import React from "react";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import Paragraph1 from "../paragraph/paragraph1";

const ProductDetails = (props) => {

    const getAllKeys = (arr) => {
        const keys = arr.flatMap(obj => Object.keys(obj));
        return [...new Set(keys)];
    };

    return (
        <>
            <Table sx={{ width: "100%", my: 1,bgcolor: "var(--light-green)",}}>
                <TableHead sx={{ border: 0 }}>
                    <TableRow sx={{ border: 0,  }}>
                        {props.ProductDetails && props.ProductDetails.length > 0 && getAllKeys(props.ProductDetails).map((item, i) => {
                            return <TableCell key={i} sx={{ py: 1, }}>
                                <Paragraph1 sx={{
                                    // color: 'var(--white)',
                                    fontSize: { xs: 12, sm: 12, md: 14, lg: 16 },
                                    fontWeight: "bold",
                                }}>{item}</Paragraph1>
                            </TableCell>
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.ProductDetails && props.ProductDetails.length > 0 && props.ProductDetails.map((product, rowIndex) => (
                        <TableRow key={rowIndex} sx={{ py: 0.5, m: 0 }}>
                            {getAllKeys(props.ProductDetails).map((key, colIndex) => (
                                <TableCell key={colIndex} sx={{ m: 0, border: 0 }}>
                                    <Paragraph1 sx={{
                                        color: 'var(--Black)',
                                        fontSize: { xs: 12, sm: 12, md: 14, lg: 16 },
                                    }}>
                                        {product[key]}
                                    </Paragraph1>
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
}

export default ProductDetails;
