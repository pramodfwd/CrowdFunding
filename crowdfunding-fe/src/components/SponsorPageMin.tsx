import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";
import Btn from "./genericComponent/Btn";
import SocialMediaLink from "./genericComponent/SocialMediaLink";
import { LinearProgressWithLabel } from "./SponsorPageMax";
import Link from "next/link";
import Axios from "@/Axios";

const SponsorPageMin = () => {
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
  return (
    <Carousel
      navButtonsAlwaysVisible
      autoPlay
      navButtonsProps={{
        style: {
          backgroundColor: "white",
          color: "black",
          borderRadius: 0,
          padding: "1px",
        },
      }}
      duration={100}
      swipe
      animation="fade"
      sx={{ width: "100%" }}
    >
      {initialValue.map((step: any, index: any) => (
        <Grid key={index} ml={4} mr={4}>
          <Card
            sx={{
              margin: 1,
              pb: 2,
              height: 600,
            }}
          >
            <Link href={`/MySponsorPageDetails/${step._id}`} legacyBehavior>
              <CardMedia
                component="img"
                sx={{ height: 260, cursor: "pointer" }}
                image={step.uploadImage}
              />
            </Link>
            <Link href={`/MySponsorPageDetails/${step._id}`} legacyBehavior>
              <Typography
                paddingTop={1.5}
                paddingLeft={1.5}
                sx={{
                  typography: { sm: "h6", xs: "body1" },
                  "&:hover": { color: "primary.main" },
                  cursor: "pointer",
                  overflow: "hidden",
                }}
                gutterBottom
                component="div"
              >
                {step.sponsorPageName}
              </Typography>
            </Link>
            <Typography variant="subtitle1" pl={1.5} pr={1.5}>
              by{" "}
              <Box component="span" color="primary.main">
                {step.profileId?.firstName}
              </Box>
            </Typography>
            <Typography
              variant="subtitle1"
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
          </Card>
        </Grid>
      ))}
    </Carousel>
  );
};

export default SponsorPageMin;
