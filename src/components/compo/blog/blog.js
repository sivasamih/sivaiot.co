"use client";
import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useEffect, useState } from "react";
import * as FETCHAPI from "@/apis/fetchapi";
import * as APIURLS from "@/apis/apiconstant";
import Loading from "@/app/loading";
import BlogCard1 from "@/components/customcompo/cards/blogCard_1";
import CustomPagination from "@/components/customcompo/pagination/pagination";
import { Route_Path } from "@/apis/api";

const BlogPage = ({ Data }) => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const maxLength = 9; // Number of blogs per page

  useEffect(() => {
    const blog = Data ? Data : [];
    setBlog(blog);
    setCount(Math.ceil(blog.length / maxLength));
    setLoading(false);
  }, []);

  // Pagination handler
  const handlePagination = (e, pageNo) => {
    setPage(pageNo);
    const clickedElement = e.target;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* <Loading open={loading} /> */}
      {blog.length > 0 && (
        <Box>
          <Box sx={{ bgcolor: "var(--green)", py: 4 }}>
            <Container>
              <Typography
                sx={{
                  fontSize: {
                    xs: "calc(1rem + 1vw)",
                    md: "calc(1.2rem + 1vw)",
                  },
                  fontWeight: "bold",
                  color: "white",
                }}
                component={"h1"}
              >
                RFID Blogs
              </Typography>
            </Container>
          </Box>
          <Container>
            <Box sx={{ my: 5 }}>
              {/* Blog List */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "auto",
                    sm: "repeat(2,1fr)",
                    md: "repeat(3,1fr)",
                  },
                  gap: 3,
                }}
              >
                {blog
                  .slice((page - 1) * maxLength, page * maxLength)
                  .map((item, index) => {
                    return (
                      <div key={index}>
                        <BlogCard1
                          Title={item.BlogTitle}
                          Time={item.PostedDateTime}
                          url={Route_Path.BLOG + "/" + item.PostUrl}
                          image={item.FeatureImage}
                          Tags={item.Tags}
                          Brief={item.Brief}
                        />
                      </div>
                    );
                  })}
              </Box>
            </Box>
            <Box
              sx={{
                mb: 2,
                justifyContent: "center",
                display: count > 1 ? "flex" : "none",
              }}
            >
              <CustomPagination
                page={page}
                handleChange={handlePagination}
                count={count} // Total number of pages
              />
            </Box>
          </Container>
        </Box>
      )}
    </>
  );
};

export default BlogPage;
