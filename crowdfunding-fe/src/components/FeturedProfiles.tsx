import { Grid, Typography } from "@mui/material";
import React from "react";
import FeaturedProfilesCardMax, { useWindowWidth } from "./FeaturedProfilesCardMax";
import FeaturedProfilesCardMin from "./FeaturedProfilesCardMin";

const FeturedProfiles = () => {
  const breakpoint = 575;
  const { width } = useWindowWidth();
  return (
    <>
      <Typography
        color="primary"
        textAlign={"center"}
        width={"100%"}
        bgcolor="secondary.main"
        p={2.3}
        sx={{ typography: { sm: "h3", xs: "h5" }, }}>
        Featured Profiles </Typography>
      <Grid
        container
        direction="column"
        pb={3}
        alignItems="center"
        justifyContent="center"
        bgcolor="secondary.main"
      >
        {width > breakpoint ? <FeaturedProfilesCardMax /> : <FeaturedProfilesCardMin />}
      </Grid>
    </>
  );
};

export default FeturedProfiles;
