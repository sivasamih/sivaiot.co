import { Card, CardContent, Skeleton } from "@mui/material";

const FamiliesCardSkeleton = () => {
  return (
    <Card>
      <CardContent sx={{ p: 0, m: 0 }}>
        <Skeleton variant="rectangular" width={"100%"} height={130} />
      </CardContent>

      <CardContent sx={{ py: 0 }}>
        <Skeleton variant="rectangular" width={"100%"} height={30} sx={{mt:1}}/>
        <Skeleton
          variant="rectangular"
          width={"100%"}
          height={40}
          sx={{ mt: 1 }}
        />
      </CardContent>
    </Card>
  );
};

export default FamiliesCardSkeleton;
