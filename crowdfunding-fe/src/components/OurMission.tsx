import { Button, Grid, Typography } from "@mui/material";

import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";
import Btn from "./genericComponent/Btn";
import Link from "next/link";
import { Box } from "@mui/system";

const pages = [
  {
    name: "Create Account",
    icon: <BusinessCenterIcon style={{ width: 50, height: 50 }} />
  },
  {
    name: "Share your Link",
    icon: <SportsMartialArtsIcon style={{ width: 50, height: 50 }} />
  },
  {
    name: "Recive Money",
    icon: <FoodBankIcon style={{ width: 50, height: 50 }} />
  },
  {
    name: "Create Account",
    icon: <LocalHospitalIcon style={{ width: 50, height: 50 }} />
  },
  {
    name: "Share your Link",
    icon: <SchoolIcon style={{ width: 50, height: 50 }} />
  },
  {
    name: "Recive Money",
    icon: <BusinessCenterIcon style={{ width: 50, height: 50 }} />
  },
  {
    name: "Create Account",
    icon: <SportsMartialArtsIcon style={{ width: 50, height: 50 }} />
  },
  {
    name: "Share your Link",
    icon: <BusinessCenterIcon style={{ width: 50, height: 50 }} />
  },
  {
    name: "Recive Money",
    icon: <BusinessCenterIcon style={{ width: 50, height: 50 }} />
  },
  {
    name: "Create Account",
    icon: <BusinessCenterIcon style={{ width: 50, height: 50 }} />
  },
  {
    name: "Share your Link",
    icon: <SportsMartialArtsIcon style={{ width: 50, height: 50 }} />
  },
  {
    name: "Recive Money",
    icon: <BusinessCenterIcon style={{ width: 50, height: 50 }} />
  },
  {
    name: "Create Account",
    icon: <BusinessCenterIcon style={{ width: 50, height: 50 }} />
  },
  {
    name: "Share your Link",
    icon: <SportsMartialArtsIcon style={{ width: 50, height: 50 }} />
  },
  {
    name: "Recive Money",
    icon: <BusinessCenterIcon style={{ width: 50, height: 50 }} />
  },
  {
    name: "Create Account",
    icon: <SportsMartialArtsIcon style={{ width: 50, height: 50 }} />
  },
  {
    name: "Share your Link",
    icon: <BusinessCenterIcon style={{ width: 50, height: 50 }} />
  },
  {
    name: "Recive Money",
    icon: <BusinessCenterIcon style={{ width: 50, height: 50 }} />
  },
  {
    name: "Create Account",
    icon: <SportsMartialArtsIcon style={{ width: 50, height: 50 }} />
  },
  {
    name: "Share your Link",
    icon: <BusinessCenterIcon style={{ width: 50, height: 50 }} />
  },
];

const OurMission = () => {
  return (
    <>
      <Typography
        color="primary"
        sx={{
          typography: { sm: "h3", xs: "h5" },
          p: 2.6,
          backgroundColor: "#f7f9ff",
          textAlign: "center",
          width: "100%",
        }}
      >
        Our Mission
      </Typography>
      <Grid
        container
        direction="column"
        alignItems="center"
        pb={3}
        bgcolor={"#f7f9ff"}
      >
        <Grid container justifyContent="center" sx={{ pb: 3.5 }}>
          {pages.map((value, ind) => (
            <Grid
              item
              key={ind}
              justifyContent="center"
              container
              xs={6}
              sm={4}
              md={3.5}
              lg={2.7}
            >
              <Box
                sx={{
                  backgroundColor: "#f2f4f7",
                  display: "grid",
                  textAlign: "center",
                  height: "170px",
                  width: "100%",
                  cursor:"pointer",
                  "&:hover": {
                    transition: "ease-in-out 0.4s",
                    backgroundColor: "primary.light",
                    cursor: "pointer",
                  },
                }}
              >
                <Link href="/">
                  <Typography mt={3} color="primary.main">
                    {value.icon}
                  </Typography>
                </Link>
                <Link href="/" legacyBehavior>
                  <Typography variant="h6">
                    {value.name}
                  </Typography>
                </Link>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Btn href="/join" text="Start Now" />
      </Grid>
    </>
  );
};
export default OurMission;
