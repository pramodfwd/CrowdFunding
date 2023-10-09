import Btn from "@/components/Button/Button";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import SideBar from "./Sidebar";
import WalletIcon from "@mui/icons-material/Wallet";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const GetPaidNow = () => {

  return (
    <Grid bgcolor="secondary.contrastText">
      <Grid
        sx={{ padding: { xs: 0, sm: 0, md: 0, lg: 3 } }}
        container
        justifyContent="center"
      >
        <SideBar />
        <Grid
          item={true}
          flexDirection="column"
          display="flex"
          alignItems="center"
          justifyContent="flexStart"
          sx={{
            margin: { xs: "15px", sm: "15px", md: "0px 15px", lg: "0px 15px" },
          }}
          bgcolor="secondary.main"
          xs={12}
          sm={12}
          md={9}
        >
          <Grid
            width="100%"
            borderBottom="2px solid"
            borderColor="secondary.contrastText"
            display="flex"
            justifyContent="space-between"
          >
            <Typography fontWeight={500} p={1} variant="h4">
              GET PAID
            </Typography>
          </Grid>
          <Grid container width="100%" p={3}>
            <Typography fontWeight={500} variant="h3">
              How would you like to get paid?
            </Typography>
            <Grid
              container
              width="100%"
              display="flex"
              pt={1}
              justifyContent="space-between"
            >
              <Box>
                <Typography fontWeight={800} variant="subtitle2" ml={3}>
                  Paypal
                </Typography>
                <Typography variant="body2">
                  <WalletIcon /> Available Worldwide. 2 - 4 business days to
                  receive money.
                </Typography>
              </Box>
              <Btn
                href="/start"
                text="Connect"
                variant="outlined"
                borderRadius="30px"
                fontSize="16px"
                textTransform="capitalize"
                color="primary.main"
                backgroundColor="secondary.main"
                bg="primary.main"
                textColor="secondary.main"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GetPaidNow;
