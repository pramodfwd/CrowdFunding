import Axios from "@/Axios";
import {
  Box,
  CardMedia,
  FormControl,
  FormControlLabel,
  Grid,
  MenuItem,
  Paper,
  Select,
  Switch,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SideBar from "./Sidebar";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { loginStatus } from "Redux/IsloginSlice";
import Btn, { LinkBtn } from "@/components/Button/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16,
    },
    "&:before": {
      left: 12,
    },
    "&:after": {
      right: 12,
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 16,
    height: 16,
    margin: 2,
  },
}));

const MySponsorPages = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [initialValue, setInitialValue] = useState<any>({});
  const handleClick = () => {
    setOpen(!open);
  };
  const getData = async () => {
    try {
      const response = await Axios.get("/sponsor");
      const allData = response.data.data;
      setInitialValue(allData);
    } catch (error) {
      console.error("Error fetching data:", error);
      dispatch(loginStatus(false));
    }
  };
  const deleteSponsorData = async (id: any) => {
    try {
      const response = await Axios.delete(`/sponsor/delete/${id}`);
      toast(response.data.message, {
        position: toast.POSITION.BOTTOM_CENTER,
        type: toast.TYPE.SUCCESS,
      });
      getData();
    } catch (error: any) {
      console.error("Error fetching data:", error);
      toast(error, {
        position: toast.POSITION.BOTTOM_CENTER,
        type: toast.TYPE.SUCCESS,
      });
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Grid bgcolor="secondary.contrastText">
      <Grid
        sx={{ padding: { xs: 0, sm: 0, md: 0, lg: 3 } }}
        container
        item={true}
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
          >
            <Typography fontWeight={500} variant="h4" p={1}>
              Add Sponsor Page
            </Typography>
          </Grid>
          {initialValue.length > 0 ? (
            <>
              <Grid width="100%">
                <Grid
                  item={true}
                  width="100%"
                  display="flex"
                  justifyContent="space-between"
                >
                  <FormControl sx={{ width: "150px", mt: 2, pl: 2 }}>
                    <Select
                      size="small"
                      defaultValue="Select"
                      onChange={handleClick}
                    >
                      <MenuItem disabled value="Select">
                        Select
                      </MenuItem>
                      <MenuItem value="One Time">One Time</MenuItem>
                      <MenuItem value="Monthly">Monthly</MenuItem>
                    </Select>
                  </FormControl>
                  <Box pr={1}>
                    <LinkBtn
                      backgroundColor="primary.main"
                      textColor="secondary.main"
                      color="secondary.main"
                      width={160}
                      height={30}
                      borderRadius={20}
                      fontSize={16}
                      variant="contained"
                      textTransform="capitalize"
                      href="/start"
                      text="Add Sponsor Page"
                    />
                  </Box>
                </Grid>
                <Grid>
                  {initialValue.map((value: any, index: any) => (
                    <Grid
                      item={true}
                      key={index}
                      lg={12}
                      md={12}
                      sm={12}
                      xs={12}
                    >
                      <Paper
                        elevation={5}
                        sx={{
                          width: { xs: "90%", sm: "95%", md: 600, lg: 460 },
                          height: "16em",
                          m: 2,
                        }}
                      >
                        <Grid display="flex" borderRadius={3}>
                          <Grid item={true} lg={4} md={4} sm={12} xs={12}>
                            <CardMedia
                              component="img"
                              sx={{
                                height: "12em",
                              }}
                              image={value.uploadImage}
                            />
                          </Grid>
                          <Grid
                            item={true}
                            lg={8}
                            md={8}
                            sm={12}
                            xs={12}
                            sx={{ p: 1 }}
                          >
                            <Typography></Typography>
                            <Typography>{value.sponsorPageName}</Typography>
                            <Typography
                              sx={{
                                display: "-webkit-box",
                                overflow: "hidden",
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: "vertical",
                              }}
                            >
                              {value.sponsorPageCaption}
                            </Typography>
                            <Typography>Created Date - May 11, 2023</Typography>
                            <Typography>Goal - ${value.amount}</Typography>
                            <Typography>Achieved - $0.00</Typography>
                          </Grid>
                        </Grid>
                        <Grid
                          item={true}
                          display="flex"
                          justifyContent="space-between"
                          alignItems="space-between"
                          lg={12}
                          md={12}
                          sm={12}
                          xs={12}
                          bgcolor="secondary.contrastText"
                          sx={{ height: "4em", p: 1 }}
                        >
                          <FormControlLabel
                            control={<Android12Switch defaultChecked />}
                            label=""
                          />
                          <Grid
                            display="flex"
                            justifyContent="right"
                            alignItems="right"
                            gap={1}
                          >
                            <LinkBtn
                              backgroundColor="primary.main"
                              textColor="secondary.main"
                              color="secondary.main"
                              marginBottom={1}
                              marginTop={1}
                              height={30}
                              borderRadius={20}
                              fontSize={10}
                              variant="contained"
                              textTransform="capitalize"
                              href={`/start/${value._id}`}
                              text="Add Updates"
                            />{" "}
                            <LinkBtn
                              backgroundColor="primary.main"
                              textColor="secondary.main"
                              color="secondary.main"
                              marginBottom={1}
                              marginTop={1}
                              height={30}
                              borderRadius={20}
                              fontSize={13}
                              variant="contained"
                              textTransform="capitalize"
                              href={`/start/${value._id}`}
                              text="Edit"
                            />{" "}
                            <Btn
                              onClick={() => deleteSponsorData(value._id)}
                              type="button"
                              backgroundColor="primary.main"
                              textColor="secondary.main"
                              color="secondary.main"
                              marginBottom={1}
                              marginTop={1}
                              height={30}
                              borderRadius={20}
                              fontSize={13}
                              variant="contained"
                              textTransform="capitalize"
                              text="Delete"
                            />
                            <ToastContainer />
                          </Grid>
                        </Grid>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </>
          ) : (
            <Grid
              sx={{ margin: "50px 0px" }}
              alignItems="center"
              justifyContent="center"
            >
              <Box
                sx={{
                  width: { xs: 300, sm: 300, md: 300, lg: 400 },
                }}
              >
                <Typography
                  align="center"
                  fontWeight={700}
                  variant="h4"
                  lineHeight={1}
                >
                  Looks like you haven&rsquo;t created any sponsor page yet.
                </Typography>
                <br></br>
                <Box component="div" sx={{ textAlign: "center" }}>
                  <LinkBtn
                    backgroundColor="primary.main"
                    textColor="secondary.main"
                    color="secondary.main"
                    height={70}
                    borderRadius={20}
                    fontSize={22}
                    variant="contained"
                    textTransform="capitalize"
                    href="/start"
                    text="Add Sponsor Page"
                  />
                </Box>
              </Box>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MySponsorPages;
