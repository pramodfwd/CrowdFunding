import Btn from "./genericComponent/Btn";
import Grid from "@mui/material/Grid";
import { Box, Card, Typography } from "@mui/material";

import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import WalletIcon from "@mui/icons-material/Wallet";
import WebhookIcon from "@mui/icons-material/Webhook";
import Link from "next/link";

const pages = [
  {
    name: "Create Account",
    to: "join",
    icon: <SwitchAccountIcon style={{ width: 100, height: 100 }} />,
    details:
      "Your GoFundHer Profile page can find sponsors or you can create “Sponsor” pages.",
  },
  {
    name: "Share your Link",
    to: "login",
    icon: <WebhookIcon style={{ width: 100, height: 100 }} />,
    details:
      "GoFundHer.com/______.Send emails Send text messages Share on social media",
  },
  {
    name: "Recive Money",
    to: "login",
    icon: <WalletIcon style={{ width: 100, height: 100 }} />,
    details:
      "Receive your money with PayPal or direct deposit to your bank account from STRIPE.",
  },
];

export default function Head() {
  return (
    <>
      <Grid
        bgcolor="primary.main"
        container
        direction="column"
        sx={{ minHeight: { xs: 290, sm: 260, md: 290, lg: 353 } }}
        alignItems="center"
        justifyContent="center"
        border="1px solid"
        borderColor="primary.main"
      >
        <Grid item xs={3}>
          <Typography
            component="h1"
            align="center"
            sx={{
              typography: { sm: "h1", xs: "h3" },
              mt: { xs: 8, sm: 11, md: 15, lg: 11 },
            }}
            color="secondary.main"
          >
            Support Her and Go Fund Her
          </Typography>
          <Box
            component="div"
            sx={{ pt: { xs: 5, sm: 5, md: 5, lg: 5 }, textAlign: "center" }}
          >
            <Btn
              bg="white"
              textColor="primary"
              hoverColor="white"
              hoverBg="primary"
              href="/search"
              text="Sponsor Now"
            />
            <Btn href="/start" text="Start Now" />
          </Box>
          <Typography
            pt={1}
            color="secondary.main"
            align="center"
            variant="subtitle2"
          >
            Find sponsors with a profile page
          </Typography>
        </Grid>
      </Grid>
      <Grid
        bgcolor="primary.main"
        border="1px solid"
        borderColor="primary.main"
        container
        direction="column"
        sx={{ minHeight: { xs: 160, sm: 160, md: 180, lg: 195 } }}
      ></Grid>
      <Grid container justifyContent="center" mt={-15} mb={1}>
        {pages.map((value, ind) => (
          <Grid key={ind} m={1.8}>
            <Card
              elevation={6}
              style={{
                borderRadius: 7,
              }}
              sx={{
                width: { sm: 220, md: 260, lg: 355 },
                height: { sm: 295, md: 260, lg: 280 },
                position: "relative",
                "&:before": {
                  content: "''",
                  position: "absolute",
                  width: "0",
                  height: "2px",
                  bottom: 0,
                  backgroundColor: "primary.main",
                  visibility: "hidden",
                  transition: "all 0.5s ease-in-out",
                },
                "&:hover:before": {
                  visibility: "visible",
                  width: "100%",
                },
                "&:hover": {
                  marginTop: "-15px",
                  transition: "ease-in-out 0.5s",
                },
              }}
            >
              <Typography align="center" p={1} color="primary">
                {value.icon}
              </Typography>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Link href={`/${value.to}`} legacyBehavior>
                  <Typography
                    color={"black"}
                    variant="h5"
                    sx={{
                      "&:hover": { color: "primary.main" },
                      cursor: "pointer",
                    }}
                  >
                    {value.name}
                  </Typography>
                </Link>
              </Box>
              <Typography
                p={2}
                lineHeight="26px"
                align="center"
                variant="body1"
              >
                {value.details}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
