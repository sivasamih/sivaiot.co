import CustomLoading from "@/components/customcompo/CustomLoading/customLoading"
import BlogPageSkeleton from "@/components/customcompo/skeleton/blogPageSkeleton"
import { Box, Typography } from "@mui/material"

const BlogLoadingPage = () => {
    return (
        <>
            <CustomLoading />
            <BlogPageSkeleton />
        </>

    )
}
export default BlogLoadingPage