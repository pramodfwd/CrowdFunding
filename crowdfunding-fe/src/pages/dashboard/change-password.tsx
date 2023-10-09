import { Grid, TextField, Typography } from "@mui/material";
import React from "react";
import SideBar from "./Sidebar";
import Btn from "@/components/Button/Button";

const ChangePassword = () => {
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
              CHANGE PASSWORD
            </Typography>
          </Grid>
          <Grid
            item={true}
            container
            sx={{ margin: "50px 0px" }}
            alignItems="center"
            justifyContent="center"
          >
            <Grid container item={true} xs={12} sm={12} md={8}>
              <Grid container item={true} xs={12} sm={12} md={12} p={1}>
                <Typography variant="body1" fontWeight={600}>
                  Old Password :
                </Typography>
                <TextField
                  required
                  name="OldPassword"
                  fullWidth
                  id="OldPassword"
                  placeholder="Old Password"
                  size="small"
                  color="primary"
                  focused
                  multiline
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} p={1}>
                <Typography variant="body1" fontWeight={600}>
                  New Password :
                </Typography>
                <TextField
                  required
                  name="NewPassword"
                  fullWidth
                  id="NewPassword"
                  placeholder="New Password"
                  size="small"
                  color="primary"
                  focused
                  multiline
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} p={1}>
                <Typography variant="body1" fontWeight={600}>
                  Confirm Password :
                </Typography>
                <TextField
                  required
                  name="ConfirmPassword"
                  fullWidth
                  id="ConfirmPassword"
                  placeholder="Confirm Password"
                  size="small"
                  color="primary"
                  focused
                  multiline
                />
              </Grid>
              <Grid container item={true} justifyContent="center" p={1}>
                <Btn
                  href="/start"
                  text="Update"
                  width="150px"
                  variant="outlined"
                  borderRadius="50px"
                  fontSize="20px"
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
    </Grid>
  );
};

export default ChangePassword;
