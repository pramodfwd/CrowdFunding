import React from "react";
import { AppBar, Button, Grid, Toolbar } from "@mui/material";
import Logo from "./logo";
import NavItems from "./navIgationComponent";


const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "secondary.main",
        p: { xs: 0.9, sm: 0.9, md: 0.5, lg: 0.5 },
      }}
    >
      <Toolbar>
        <Grid
          container
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid>
            <Logo />
          </Grid>
          <Grid>
            <NavItems />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
