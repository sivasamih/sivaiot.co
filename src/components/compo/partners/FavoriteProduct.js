'use client'
import { Box } from "@mui/system";
import * as APIURLS from "@/apis/apiconstant"
import FavoriteProductCard from "@/components/customcompo/cards/favoriteProductCard";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { PriorityHigh } from "@mui/icons-material";
import ProductSearchBox from "./productsearchBox";
import { escapeRegExp, getLocalStorage, highlightText } from "@/helper/helper";
import * as FETCHAPI from "@/apis/fetchapi";
import Loading from "@/app/loading";


const FavoriteProduct = () => {
    const [ProductList, setProductList] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [IsLoading, setIsLoading] = useState(false);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const IOT_PU = getLocalStorage();
        if (IOT_PU) {
            setUserData(IOT_PU);
        }
    }, []);

    useEffect(() => {
        if (userData) {
            PartnerFavoriteProduct();
        }
    }, [userData]);


    const PartnerFavoriteProduct = async (productID) => {
        const reqData = {
            PartnerID: userData.PartnerID,
            WebsiteID: APIURLS.WebsiteID
        }
        try {
            setIsLoading(true)
            const res = await FETCHAPI.Fetch(APIURLS.APIURL.PartnerFavoriteWebProducts, reqData);
            if (res.status === 200) {
                const data = await res.json();
                const ProductObj = data.find((item) => item.ID === productID);
                if (productID && ProductObj) {
                    setProductList((prev) => prev.ID === productID ? { ...prev, IsFavorite: ProductObj.IsFavorite } : prev)
                } else {
                    setProductList(data)
                }
            }
        } catch (ex) { } finally {
            setIsLoading(false)
        }
    }

    const filterData = () => {
        if (!searchQuery) return ProductList;

        try {
            const filterList = ProductList?.filter((P) => {
                return (
                    P.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    P.desc.toLowerCase().includes(searchQuery.toLowerCase())
                );
            });

            return filterList.map((item) => ({
                ...item,
                name: highlightText(item.name, searchQuery),
                desc: highlightText(item.desc, searchQuery),
            }));
        } catch (ex) {
            console.error("Error in filtering data:", ex);
            return [];
        }
    };



    const AddUpdateFavoriteProduct = async (productID, IsFavorite) => {
        const IOT_PU = getLocalStorage();
        if (!IOT_PU) return;
        const reqData = {
            PartnerID: userData?.PartnerID,
            ProdID: productID,
            WebsiteID: APIURLS.WebsiteID,
            IsFavorite: IsFavorite,
        };
        try {
            const responce = await FETCHAPI.Fetch(APIURLS.APIURL.PartnerFavoriteProduct, reqData);
            if (responce.status === 200) {
                PartnerFavoriteProduct();
            }
        } catch (ex) { }
    };

    let FilterProductList = filterData()

    return (
        <>
            {/*  -----------------------searchbar------------------ */}
            <Loading open={IsLoading} />
            <ProductSearchBox
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                isExpandSwitchHide={true}
            // IsExpandAll={IsExpandAll}
            // expandAllACC={expandAllACC}
            />

            <Box sx={{ py: 2, px: 4 }}>
                {FilterProductList.length > 0 ? (
                    <Box
                        sx={{
                            "& > :last-of-type": {
                                pb: 0,
                                mb: 0,
                            },
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "auto",
                                sm: "repeat(1,1fr)",
                                md: "repeat(2,1fr)",
                            },
                            gap: 4,
                        }}>
                        {FilterProductList?.map((P, index) => {

                            return (
                                <Box id={P.link} key={index} height={"100%"}>
                                    <FavoriteProductCard
                                        ID={P.ID}
                                        imageUrl={APIURLS.BASE_PATH.Product + P.image}
                                        name={P.name}
                                        desc={P.desc}
                                        Datasheets={P.Datasheets ? P.Datasheets : null}
                                        ProductName={P.name}
                                        ProductImage={P.imageUrl}
                                        shareUrl={P.link}
                                        IsFavorite={P.IsFavorite}
                                        addUpdateFavoriteProduct={AddUpdateFavoriteProduct}
                                        Icon={APIURLS.BASE_PATH.Product + P.Icon}
                                        IsShowIcon={P.IsShowIcon}
                                        IsNew={P.IsNew}
                                    />
                                </Box>
                            );
                        })}
                    </Box>
                ) : (
                    <Box
                        sx={{
                            textAlign: "center",
                        }}>
                        <PriorityHigh sx={{ fontSize: 70, color: "#cfd8dc" }} />
                        <Typography
                            sx={{ color: "#cfd8dc", fontSize: "2rem" }}
                            variant="h5">
                            No products found
                        </Typography>
                    </Box>
                )}
            </Box>
        </>
    );
};
export default FavoriteProduct;
