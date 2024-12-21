import { Pagination } from "@mui/material";

const CustomPagination = ({ page, handleChange, count }) => {
  return (
    <>
      <Pagination count={count} page={page} onChange={handleChange} />
    </>
  );
};

export default CustomPagination;
