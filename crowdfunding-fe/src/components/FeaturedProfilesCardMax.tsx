import { Box, Grid, CardMedia, Typography, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import Axios from "@/Axios";
import TwitterIcon from "@mui/icons-material/Twitter";
import { YouTube } from "@mui/icons-material";

export const useWindowWidth = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  return { width };
};

const FeaturedProfilesCardMax = () => {
  const { width } = useWindowWidth();
  const [showPerPage, setShowPerPage] = useState(4);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });
  const [initialValue, setInitialValue] = useState<any>([]);
  const getData = async () => {
    try {
      const response = await Axios.get("/feature-profile");
      const allData = response.data.featureprofile;
      setInitialValue(allData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const total = initialValue.length;
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.matchMedia("(max-width: 750px)").matches) {
        setShowPerPage(2);
      } else if (window.matchMedia("(max-width: 920px)").matches) {
        setShowPerPage(3);
      } else {
        setShowPerPage(4);
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
                elevation={8}
                sx={{
                  width: { xs: 250, sm: 230, md: 210, lg: 250 },
                  height: 430,
                  margin: { xs: 2, sm: 1, md: 1.5, lg: 2 },
                  paddingTop: 0.7,
                  "&:hover": {
                    color: "primary.main",
                    transition: "all 0.4s",
                    paddingTop: "0px",
                    height: 424,
                    "& .MuiTypography-root": {
                      color: "initial",
                    },
                    "& .MuiTypography-root.MuiTypography-subtitle2": {
                      color: "primary.main",
                    },
                  },
                  "&:hover .MuiCardMedia-root": {
                    filter: "grayscale(400%)",
                    transition: "all 0.4s",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    height: 250,
                  }}
                  image={step.image}
                />
                <Grid
                  bgcolor="primary.main"
                  color={"white"}
                  display="flex"
                  mt={-1.5}
                  gap={1}
                  // px={5}
                  minHeight={28}
                  sx={{
                    clipPath: "polygon(0%  0%, 93% 0%, 100% 100%, 0% 100%)",
                  }}
                  width="80%"
                  position="relative"
                  justifyContent="center"
                  alignItems="center"
                >
                  {step.instagram ? (
                    <Link href="mailto:someone@example.com">
                      <InstagramIcon
                        fontSize="inherit"
                        sx={{ color: "secondary.main", mt: 0.7 }}
                      />
                    </Link>
                  ) : (
                    ""
                  )}
                  {step.facebook ? (
                    <Link href="mailto:someone@example.com">
                      <FacebookIcon
                        fontSize="inherit"
                        sx={{ color: "secondary.main", mt: 0.7 }}
                      />
                    </Link>
                  ) : (
                    ""
                  )}
                  {step.youtube ? (
                    <Link href="mailto:someone@example.com">
                      <YouTube
                        fontSize="inherit"
                        sx={{ color: "secondary.main", mt: 0.7 }}
                      />
                    </Link>
                  ) : (
                    ""
                  )}
                  {step.twitter ? (
                    <Link href="mailto:someone@example.com">
                      <TwitterIcon
                        fontSize="inherit"
                        sx={{ color: "secondary.main", mt: 0.7 }}
                      />
                    </Link>
                  ) : (
                    ""
                  )}
                </Grid>
                <Link href={`/MyProfileDetails/${step._id}`} legacyBehavior>
                  <Typography
                    paddingTop={1.5}
                    paddingLeft={1.5}
                    sx={{
                      cursor: "pointer",
                      typography: {
                        
                        sm: "subtitle2",
                        xs: "body2",
                      },
                      overflow: "hidden",
                    }}
                    gutterBottom
                    component="div"
                  >
                    {step.firstName}&nbsp;{step.lastName}
                  </Typography>
                </Link>
                <Typography
                  variant="body1"
                  pl={1.5}
                  sx={{
                    color: "primary.contrastText",
                    display: "-webkit-box",
                    overflow: "hidden",
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {step.miniBio}
                </Typography>
              </Paper>
            </Grid>
          ))}
      </Grid>
      <Box
        bgcolor="secondary.main"
        textAlign={"center"}
        fontSize={35}
        width="100%"
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

export default FeaturedProfilesCardMax;
