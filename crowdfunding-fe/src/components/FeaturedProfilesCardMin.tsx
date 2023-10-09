import React, { useEffect, useState } from "react";
import { Grid, Card, CardMedia, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import Carousel from "react-material-ui-carousel";
import Link from "next/link";
import Axios from "@/Axios";
import TwitterIcon from "@mui/icons-material/Twitter";
import { YouTube } from "@mui/icons-material";

const FeaturedProfilesCardMin = () => {
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
  return (
    <Carousel navButtonsAlwaysVisible navButtonsProps={{
      style: {
        backgroundColor: "white",
        color: "black",
        borderRadius: 0,
        padding: "1px",
      },
    }} autoPlay duration={100} swipe animation="fade"sx={{ width: "100%" }}>
      {initialValue.map((step: any, index: any) => (
        <Grid key={index} ml={5} mr={5}>
          <Card
            sx={{
              width: "100%",
              height: 450,
              paddingTop: 0.7,
            }}
          >
            <CardMedia component="img" sx={{ height: 260 }} image={step.image} />
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
            <Link href='/MyProfileDetails' legacyBehavior>
            <Typography
              paddingTop={1.5}
              paddingLeft={1.5}
              sx={{
                typography: {
                  sm: "subtitle2",
                  xs: "h6",
                  "&:hover": { color: "primary.main" },
                },
                overflow: "hidden",
              }}
              component="div"
            >
              {step.firstName}&nbsp;{step.lastName}
            </Typography>
            </Link>
            <Typography component="p"
              sx={{
                color: "primary.contrastText",
                typography: {
                  sm: "subtitle1",
                  xs: "subtitle1",
                },
                  display: "-webkit-box",
                  overflow: "hidden",
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: "vertical",
              }} pl={1.5}>
              {step.miniBio}
            </Typography>
          </Card>
        </Grid>
      ))}
    </Carousel>
  )
}

export default FeaturedProfilesCardMin