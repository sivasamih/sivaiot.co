import CustomLoading from "@/components/customcompo/CustomLoading/customLoading";
import FamiliesPageSkeleton from "@/components/customcompo/skeleton/familesPageSkeleton";

const FamilieLoadingPage = () => {
    return (
        <>
            <CustomLoading />
            <FamiliesPageSkeleton />
        </>
    )
}
export default FamilieLoadingPage;