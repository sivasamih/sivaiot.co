import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const CustomTable = ({ columns, data }) => {


    if (!columns || !data) return null;

    return (
        <TableContainer sx={{ border: "1px solid #ddd", }}  >
            <Table sx={{
                "& td, & th": {
                    border: "1px solid #ddd", py: 1,
                    fontSize: { xs: "calc(0.8em + 1vw)", md: "calc(0.2em + 1vw)" },
                },
                "& th": {
                    color: "var(--headerColor)"
                }
            }}  >
                <TableHead>
                    <TableRow>
                        {columns.map((column, index) => (
                            <TableCell key={index} sx={{ fontWeight: "bold", borderRight: "1px solid #ddd" }}>
                                {column}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>

                <TableBody>
                    {data.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {columns.map((column, colIndex) => (
                                <TableCell
                                    key={colIndex}
                                    sx={{
                                        borderRight: colIndex !== columns.length - 1 ? "1px solid #ddd" : "none"
                                    }}
                                >
                                    {row[column]}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CustomTable;
