"use client";
import { Box } from "@mui/material";
import { Route_Path } from "@/apis/api";
import { useEffect, useState } from "react";
import FamiliesAccordian from "@/components/customcompo/accordian/familiesaccordian";
import * as APIURLS from "@/apis/apiconstant";
import ProductCard from "@/components/customcompo/cards/productCard";
import ProductSearchBox from "./productsearchBox";

const PartnerProductListing = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [IsExpandAll, setIsExpandAll] = useState(false);
  const [Category, setCategories] = useState([]);

  useEffect(() => {
    const C = props.Categories ? props.Categories : [];
    setCategories(C);
  }, []);

  const filterData = () => {
    let filterList = [];
    if (!searchQuery) return Category;
    try {
      filterList = Category.map((category) => {
        const isCategoryMatch =
          category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          category.desc.toLowerCase().includes(searchQuery.toLowerCase());

        const filteredList = isCategoryMatch
          ? category.productList
          : category.productList.filter(
              (item) =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.desc.toLowerCase().includes(searchQuery.toLowerCase())
            );

        const isExpanded = isCategoryMatch || filteredList.length > 0;
        return {
          ...category,
          name: highlightText(category.name, searchQuery),
          desc: highlightText(category.desc, searchQuery),
          productList: filteredList.map((item) => ({
            ...item,
            name: highlightText(item.name, searchQuery),
            desc: highlightText(item.desc, searchQuery),
          })),
          isCategoryMatch,
          IsExpanded: isExpanded,
        };
      }).filter(
        (category) =>
          category.isCategoryMatch || category.productList.length > 0
      );
    } catch (ex) {
      console.error("Error in filtering data:", ex);
    }

    return filterList.length > 0 ? filterList : Category;
  };

  const highlightText = (text, query) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(regex, "<mark>$1</mark>");
  };

  const handleAccExpand = (id) => {
    const List = Category;
    try {
      let category = List.map((item) =>
        item.id === id ? { ...item, IsExpanded: !item.IsExpanded } : item
      );
      if (IsExpandAll) {
        let index = List.findIndex((item) => item.IsExpanded === false);
        if (index) {
          setIsExpandAll(false);
        }
      }
      setCategories(category);
    } catch (ex) {}
  };

  const expandAllACC = (value) => {
    const List = Category;
    try {
      List.map((item) => (item.IsExpanded = value));
      setCategories(List);
      setIsExpandAll(value);
    } catch (ex) {}
  };

  return (
    <>
      <ProductSearchBox
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        IsExpandAll={IsExpandAll}
        expandAllACC={expandAllACC}
      />

      <Box
        sx={{
          "& > :first-of-type": {
            borderTop: 0,
          },
          "& > :first-of-type:before": {
            width: "3rem",
          },
          "& > :last-of-type .header-box": {
            borderBottom: "none",
          },
          "& > :last-of-type ": {
            // borderBottom: 0,
          },
          "& > :first-of-type ": {},
        }}
      >
        {filterData().map((item, i) => {
          return (
            <Box
              key={'header-' +i}
              sx={{
                borderTop: (i + 1) % 2 === 0 ? "3rem solid #F2F4F7" : "nooe",
                borderRight:
                  (i + 1) % 2 === 0
                    ? "3rem solid transparent"
                    : "3rem solid #F2F4F7",
                borderLeft:
                  (i + 1) % 2 === 0
                    ? "3rem solid #F2F4F7"
                    : "3rem solid transparent",
                borderBottom: (i + 1) % 2 === 0 ? "3rem solid #F2F4F7" : "nooe",
                position: "relative",
                "&:before": {
                  content: "''",
                  position: "absolute",
                  top: "-3rem",
                  right: "-3rem",
                  bgcolor: "#F2F4F7",
                  width: { xs: "3rem", md: "3rem" },
                  height: "3rem",
                },
                py: 3,
              }}
              className="header-box"
            >
              <Box style={{ padding: "0 0" }}>
                <FamiliesAccordian
                  id={i + 1}
                  Title={item.name}
                  Desc={item.desc}
                  Image={APIURLS.BASE_PATH.ProductCategory + item.BannerImage}
                  onChange={() => handleAccExpand(item.id)}
                  IsExpand={item.IsExpanded}
                  Content={
                    <Box
                      sx={{
                        "& > :last-of-type": {
                          pb: 0,
                          mb: 0,
                        },
                        display: "grid",
                        gridTemplateColumns: {
                          xs: "auto",
                        },
                        gap: 4,
                      }}
                    >
                      {item["productList"]
                        ? item["productList"].map((P, index) => {
                            let imageALt =
                              P.ImageList && P.ImageList.length > 0
                                ? P.ImageList[0]["Alt"]
                                : "Product image";
                            let url = P.link.startsWith("/")
                              ? P.link
                              : Route_Path.PRODUCTS + "/" + P.link;
                            return (
                              <Box
                                id={P.link}
                                key={'productList-' + index}
                              >
                                <ProductCard
                                  ID={P.ID}
                                  ProductImage={
                                    APIURLS.BASE_PATH.Product + P.image
                                  }
                                  ProductImageAlt={imageALt}
                                  ProductName={P.name ? P.name : ""}
                                  ProductDesc={P.desc ? P.desc : ""}
                                  Datasheet={P.Datasheets}
                                  pt={{ xs: 2, md: 3 }}
                                  url={url}
                                  IsClickable={!item.IsClickable}
                                  IsExternalURL={P.IsExternalURL}
                                  IsNew={P.IsNew}
                                  isActiveDatasheetBtn={true}
                                />
                              </Box>
                            );
                          })
                        : null}
                    </Box>
                  }
                />
              </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
};
export default PartnerProductListing;
