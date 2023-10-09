import Axios from "@/Axios";
import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SideBar from "./Sidebar";

const MyLink = () => {
  const [initialValue, setInitialValue] = useState<any>();
  const getData = async () => {
    try {
      const response = await Axios.get("/mylink");
      const allData = response.data.data;
      setInitialValue(allData);
    } catch (error) {
      console.error("Error fetching data:", error);
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
        justifyContent="center"
      >
        <SideBar />
        <Grid
          item={true}
          flexDirection="column"
          display="flex"
          alignItems="center"
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
            <Typography fontWeight={500} p={1} variant="h4">
              My Links
            </Typography>
          </Grid>
          <Grid p={3}>
            <Grid container p={1}>
              <Typography
                alignItems="center"
                display="flex"
                variant="h4"
                fontWeight={500}
              >
                My Profile link :
              </Typography>
            </Grid>
            <Grid container alignItems="center" justifyContent="center">
              <TextField
                focused
                value={initialValue?.profileUrl?.profileUrl}
                inputProps={{
                  style: {
                    height: "12px",
                  },
                }}
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      sx={{
                        borderRight: "2px solid",
                        borderColor: "primary.main",
                        width: 210,
                        height: 150,
                        p: 2.3,
                        ml: -1.4,
                        borderRadius: 1,
                      }}
                    >
                      https://crowdfunding.com/
                    </InputAdornment>
                  ),
                }}
              />{" "}
              <Button variant="outlined" sx={{ height: "47px" }}>
                Change link{" "}
              </Button>
              <Button
                sx={{
                  width: "130px",
                  height: "47px",
                  backgroundColor: "primary.main",
                  color: "secondary.main",
                  "&:hover": {
                    color: "primary.dark",
                    backgroundColor: "primary.main",
                  },
                }}
                variant="outlined"
              >
                Copy
              </Button>
            </Grid>
            <Grid mt={2} p={1}>
              <Typography variant="body2">My sponsor pages link :</Typography>
              {initialValue?.sponsorPageURL?.map((data: any, ind: any) => (
                <Grid container flexDirection="column" item={true} key={ind}>
                  <Grid container ml={1}>
                    {" "}
                    <Typography>{data.url}</Typography>{" "}
                  </Grid>
                  <Grid
                    container
                    m={0.5}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <TextField
                      focused
                      value={data.url}
                      sx={{ width: { lg: 430, md: 430, xs: 260 } }}
                      inputProps={{
                        style: {
                          height: "12px",
                        },
                      }}
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            sx={{
                              borderRight: "2px solid",
                              borderColor: "primary.main",
                              width: 210,
                              height: 150,
                              p: { lg: 2.3, md: 2.3, xs: 0.5 },
                              ml: -1.4,
                              borderRadius: 1,
                            }}
                          >
                            https://crowdfunding.com/
                          </InputAdornment>
                        ),
                      }}
                    />
                    <Button variant="outlined" sx={{ height: "47px" }}>
                      Change link{" "}
                    </Button>
                    <Button
                      sx={{
                        width: "130px",
                        height: "47px",
                        backgroundColor: "primary.main",
                        color: "secondary.main",
                        "&:hover": {
                          color: "primary.dark",
                          backgroundColor: "primary.main",
                        },
                      }}
                      variant="outlined"
                    >
                      Copy
                    </Button>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MyLink;
