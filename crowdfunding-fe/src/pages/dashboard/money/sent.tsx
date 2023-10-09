import { Button, Grid, MenuItem, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import SideBar from "../Sidebar";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ReplayIcon from "@mui/icons-material/Replay";
import Btn from "@/components/Button/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import css from "../../../styles/Footer.module.css";


const Sent = () => {
  const [open, setOpen] = React.useState(false);
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [startDate, endDate] = dateRange;

  const handleClick = () => {
    setOpen(!open);
  };

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
            <Typography fontWeight={500} variant="h4" p={1}>
              Money Out
            </Typography>
          </Grid>
          <Grid item={true} container>
            <Grid item container xs={12} md={12} sm={12} p={2}>
              <Grid container>
                <Grid item={true} xs={6} sm={6}>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      textTransform: "capitalize",
                      fontSize: "18px",
                      borderRadius: 0,
                      color: "secondary.main",
                      "&:hover": {
                        backgroundColor: "primary.main",
                      },
                    }}
                  >
                    One Time
                  </Button>
                </Grid>
                <Grid item={true} xs={6} sm={6}>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      textTransform: "capitalize",
                      fontSize: "18px",
                      borderRadius: 0,
                      backgroundColor: "secondary.contrastText",
                      "&:hover": {
                        backgroundColor: "secondary.contrastText",
                      },
                    }}
                  >
                    Monthly
                  </Button>
                </Grid>
              </Grid>
              <Grid
                item={true}
                container
                xs={12}
                md={12}
                sm={12}
                display="flex"
                alignItems="right"
                justifyContent="right"
                p={1}
              >
                <List>
                  <ListItemButton
                    sx={{
                      fontSize: "40px",
                      bgcolor: "primary.main",
                      color: "secondary.main",
                      borderRadius: "50px",
                      "&:hover": { backgroundColor: "primary.main" },
                    }}
                    onClick={handleClick}
                  >
                    <ListItemText primary="Download Report" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List
                      component="div"
                      sx={{
                        bgcolor: "secondary.light",
                        position: "absolute",
                        zIndex: 1,
                      }}
                    >
                      <ListItemButton>
                        <ListItemText primary="transaction report (xls)" />
                      </ListItemButton>
                      <ListItemButton>
                        <ListItemText primary="transaction report (csv)" />
                      </ListItemButton>
                    </List>
                  </Collapse>
                </List>
              </Grid>

              <Grid container item={true} gap={1} xs={12} sm={12} md={12}>
                <Grid item xs={4} sm={3} md={2} lg={2}>
                  <Typography>Filter</Typography>
                  <TextField
                    id="outlined-select-currency"
                    select
                    focused
                    fullWidth
                    defaultValue="All"
                    size="small"
                  >
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="Sponsor">Sponsor pages</MenuItem>
                    <MenuItem value="Profile">Profile</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={4} sm={3} md={2} lg={2}>
                  <Typography>Status</Typography>
                  <TextField
                    focused
                    id="outlined-select-currency"
                    select
                    fullWidth
                    defaultValue="All"
                    size="small"
                  >
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="Sponsor">Sponsor pages</MenuItem>
                    <MenuItem value="Profile">Profile</MenuItem>
                  </TextField>
                </Grid>
                <Grid item={true} xs={9} sm={5} md={4} lg={4}>
                  <Typography>Date</Typography>
                  <Grid
                    sx={{ border: "1px solid", borderColor: "primary.main" }}
                  >
                    <DatePicker
                      className={css.App}
                      selectsRange={true}
                      startDate={startDate}
                      endDate={endDate}
                      onChange={(update: any) => {
                        setDateRange(update);
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid item={true} xs={6} sm={6} md={2} lg={2} mt={2.5}>
                  <Button
                    href="/start"
                    fullWidth
                    variant="outlined"
                    sx={{
                      color: "secondary.main",
                      backgroundColor: "primary.main",
                      "&:hover": {
                        color: "secondary.main",
                        backgroundColor: "primary.main",
                      },
                    }}
                  >
                    Search
                  </Button>
                </Grid>

                <Grid item xs={4} sm={4} md={1} lg={1} mt={2.5}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "secondary.contrastText",
                      color: "primary.dark",
                      "&:hover": {
                        backgroundColor: "secondary.contrastText",
                      },
                    }}
                  >
                    <ReplayIcon />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container item={true} xs={8} md={8} sm={8}>
            <Typography align="center" variant="h3">
              Looks like you haven’t sponsored any girls or women yet.
            </Typography>
          </Grid>
          <Grid
            container
            item={true}
            justifyContent="center"
            xs={12}
            md={12}
            sm={12}
          >
            <Btn
              fullWidth
              href="/start"
              text="Explore Projects & People"
              variant="outlined"
              borderRadius={30}
              fontSize="30px"
              textTransform="capitalize"
              backgroundColor="secondary.main"
              color="primary.dark"
              bg="primary.main"
              textColor="secondary.main"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Sent;
