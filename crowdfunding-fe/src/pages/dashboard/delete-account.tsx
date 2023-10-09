import { Grid, Typography } from "@mui/material";
import React from "react";
import SideBar from "./Sidebar";
import Btn from "@/components/Button/Button";

const DeleteAccount = () => {


  return (
    <Grid bgcolor="secondary.contrastText">
      <Grid
        item={true}
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
            item={true}
            width="100%"
            borderBottom="2px solid"
            borderColor="secondary.contrastText"
            display="flex"
            justifyContent="space-between"
          >
            <Typography fontWeight={500} p={1} variant="h4">
              Delete Account
            </Typography>
          </Grid>
          <Grid
            item={true}
            container
            sx={{ margin: "20px 0px" }}
            p={1}
            alignItems="center"
            justifyContent="center"
          >
            <Grid container item={true} xs={12} sm={12} md={12}>
              <Typography variant="subtitle2">
                Deleting your account and fundraising data is permanent. Your
                information can not be recovered.
              </Typography>
            </Grid>
            <Grid container item={true} xs={12} sm={12} md={12}>
              <Btn
                href="/start"
                text="Delete your account"
                variant="outlined"
                borderRadius="10px"
                fontSize="18px"
                textTransform="capitalize"
                color="secondary.main"
                backgroundColor="primary.main"
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

export default DeleteAccount;
