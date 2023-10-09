import { Grid, Typography } from "@mui/material";
import { useWindowWidth } from "./FeaturedProfilesCardMax";
import SponsorPageMax from "./SponsorPageMax";
import SponsorPageMin from "./SponsorPageMin";

const SponsorPages = () => {
  const breakpoint = 760;
  const { width } = useWindowWidth();

  return (
    <>
      <Typography color="primary" sx={{ typography: { sm: 'h3', xs: 'h5' }, p: 2, backgroundColor: "secondary.main", textAlign: "center", width: '100%' }}>Sponsor Pages</Typography>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        bgcolor="secondary.main"
      >
        {width > breakpoint ? <SponsorPageMax /> : <SponsorPageMin />}
      </Grid>
    </>
  );
};

export default SponsorPages;