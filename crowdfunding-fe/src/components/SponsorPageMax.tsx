import { Box, CardMedia, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Btn from "./genericComponent/Btn";
import Pagination from "./Pagination";
import SocialMediaLink from "./genericComponent/SocialMediaLink";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import { useWindowWidth } from "./FeaturedProfilesCardMax";
import Link from "next/link";
import Axios from "@/Axios";

export function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="buffer" valueBuffer={100} {...props} />
      </Box>
      <Box>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const SponsorPageMax = () => {
  const { width } = useWindowWidth();
  const [showPerPage, setShowPerPage] = useState(3);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });
  const [initialValue, setInitialValue] = useState<any>([]);
  const total = initialValue.length;
  const getData = async () => {
    try {
      const response = await Axios.get("/search");
      const allData = response.data.searchDetail;
      setInitialValue(allData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.matchMedia("(max-width: 1000px)").matches) {
        setShowPerPage(2);
      } else {
        setShowPerPage(3);
      }
    }
  }, [width]);

  useEffect(() => {
    setPagination({
      start: 0,
      end: showPerPage,
    });
  }, [showPerPage, width]);

  const PaginationChange = (start: number, end: number) => {
    setPagination({ start, end });
  };

  return (
    <>
      <Grid container justifyContent="center">
        {initialValue
          .slice(pagination.start, pagination.end)
          .map((step: any, index: any) => (
            <Grid key={index}>
              <Paper
                elevation={3}
                sx={{
                  width: { xs: 350, sm: 350, md: 300, lg: 352 },
                  margin: 1.5,
                  height: "38em",
                }}
              >
                <Link href={`/MySponsorPageDetails/${step._id}`} legacyBehavior>
                  <CardMedia
                    component="img"
                    sx={{ height: 257, cursor: "pointer" }}
                    image={step.uploadImage}
                  />
                </Link>
                <Link href={`/MySponsorPageDetails/${step._id}`} legacyBehavior>
                  <Typography
                    paddingTop={1}
                    paddingLeft={1.5}
                    sx={{
                      typography: { sm: "subtitle2", xs: "body1" },
                      "&:hover": { color: "primary.main" },
                      cursor: "pointer",
                      overflow: "hidden",
                    }}
                    component="div"
                  >
                    {step.sponsorPageName}
                  </Typography>
                </Link>
                <Typography variant="body1" pl={1.5}>
                  by{" "}
                  <Box component="span" color="primary.main">
                    {step.profileId?.firstName}
                  </Box>
                </Typography>
                <Typography
                  minHeight={50}
                  variant="body1"
                  component="div"
                  pl={1.5}
                  pr={1.5}
                  sx={{
                    color: "primary.contrastText",
                    display: "-webkit-box",
                    overflow: "hidden",
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {step.sponsorPageCaption}
                </Typography>
                <Box mt={4} p={1}>
                  <Typography lineHeight={0.01} fontSize={"10px"}>
                    {" "}
                    <Box
                      component="span"
                      fontSize={"12px"}
                      fontWeight={700}
                      color="Black"
                    >
                      $12,020
                    </Box>{" "}
                    USD
                  </Typography>
                  <LinearProgressWithLabel color="success" value={index} />
                </Box>
                <Box sx={{ textAlign: "center" }} mb={2}>
                  <Btn href={`/money/${step.category}`} text="Sponsor Now" />
                </Box>
                <Box sx={{ pt: 1, display: "flex", justifyContent: "center" }}>
                  {" "}
                  SHARE THIS:
                  <SocialMediaLink />
                </Box>
              </Paper>
            </Grid>
          ))}
      </Grid>
      <Box
        sx={{
          backgroundColor: "secondary.main",
          textAlign: "center",
          fontSize: 45,
          width: "100%",
        }}
      >
        <Pagination
          showPerPage={showPerPage}
          onPaginationChange={PaginationChange}
          total={total}
        />
      </Box>
    </>
  );
};

export default SponsorPageMax;
