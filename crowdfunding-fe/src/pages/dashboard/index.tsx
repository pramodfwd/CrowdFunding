import { Button, CardMedia, Grid, Typography } from "@mui/material";
import WalletIcon from "@mui/icons-material/Wallet";
import { Box } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import SideBar from "./Sidebar";
import { useDispatch } from "react-redux";
import { loginStatus } from "Redux/IsloginSlice";
import Axios from "@/Axios";
import Link from "next/link";
import MuiLink from "@mui/material/Link";
import { useFormik } from "formik";
import { useRouter } from "next/router";

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [initialValue, setInitialValue] = useState<any>({});
  const inputRef: any = useRef(null);
  const [base64Image, setBase64Image] = useState<any>("");

  const handleImageUpload = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader: any = new FileReader();
      reader.onloadend = () => {
        setBase64Image(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const getData = async () => {
    try {
      const response = await Axios.get("/dashboard");
      const allData = response.data.data;
      setInitialValue(allData);
      setBase64Image(allData.image);
    } catch (error) {
      console.error("Error fetching data:", error);
      router.push('/login', undefined, { shallow: true });
      dispatch(loginStatus(false));
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const { values, handleSubmit, handleBlur } = useFormik({
    enableReinitialize: true,
    initialValues: initialValue,
    onSubmit: async (values, action) => {
      try {
        const response = await Axios.patch("/profile/profile-image", {
          image: base64Image,
        });
      } catch (error: any) {
      }
    },
  });
  return (
    <Grid bgcolor="secondary.contrastText">
      <Grid
        sx={{ padding: { xs: 0, sm: 0, md: 0, lg: 3 } }}
        container
        gap={2}
        justifyContent="center"
      >
        <SideBar />
        <Grid
          item={true}
          container
          xs={12}
          md={9}
          sm={12}
          display="flex"
          alignItems="center"
          gap={2}
          marginBottom={1}
        >
          <Grid
            item={true}
            sx={{ margin: { xs: 1, sm: 1, md: "0px 10px", lg: "0px 10px" } }}
            bgcolor="secondary.main"
            xs={12}
            sm={12}
            md={12}
            height={280}
          >
            <Grid container justifyContent="center">
              <Grid container justifyContent="right" alignItems="right">
                <Typography
                  p={1}
                  fontWeight="800"
                  color="secondary.contrastText"
                >
                  Member since: {values.createdAt}
                </Typography>
              </Grid>
              <Grid
                container
                justifyContent="center"
                sx={{
                  width: 300,
                }}
                alignItems="center"
              >
                <Box
                  sx={{
                    width: { xs: 140, sm: 140, md: 140, lg: 140 },
                    margin: { xs: 1, sm: 1, md: 1, lg: 1 },
                  }}
                  component="form"
                  onSubmit={handleSubmit}
                >
                  <CardMedia
                  component="img"
                    sx={{
                      height: 140,
                      borderRadius: "50%",
                      border: "1px solid",
                      borderColor: "primary.main",
                    }}
                    image={base64Image}
                  />
                  <Box
                    position="relative"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    borderTop="1px solid"
                    borderColor="secondary.main"
                    bottom={33}
                  >
                    <input
                      ref={inputRef}
                      type="file"
                      onChange={handleImageUpload}
                      accept="image/*"
                      onBlur={handleBlur}
                      id="image"
                      name="image"
                      hidden
                    />
                    <Button
                      // component="label"
                      type="button"
                      color="secondary"
                      sx={{ fontSize: "8px" }}
                      onClick={() => {
                        inputRef.current.click();
                      }}
                    >
                      Change Profile
                    </Button>
                  </Box>
                </Box>
                <Box>
                  <Typography
                    mt={-2}
                    align="center"
                    fontSize="18px"
                    fontWeight={600}
                  >
                    {values.firstName} {values.lastName}
                  </Typography>
                  <Typography align="center" variant="body1">
                    {values.email}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item={true}
            container
            xs={12}
            md={12}
            sm={12}
            display="flex"
            alignItems="center"
            gap={2}
            marginLeft={{ xs: 1, sm: 1, md: 1, lg: 1 }}
          >
            <MainCard linkName="Add Sponsor Page" to="/start" />
            <MainCard
              linkName="My Sponsor Pages"
              to="dashboard/my-sponsor-pages"
            />
            <MainCard linkName="Get Paid" to="dashboard/get-paid-now" />
            <MainCard
              linkName="Money Collected"
              to="dashboard/money/received"
            />
            <MainCard linkName="My profile" to="dashboard/my-profiles" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Dashboard;

export const MainCard = ({ linkName, to }: any) => {
  return (
    <Grid item={true} xs={11.7} sm={5.8} md={5.8}>
      <Link href={to} legacyBehavior>
        <MuiLink
          bgcolor="secondary.main"
          underline="none"
          height={170}
          display="flex"
          alignItems="center"
          sx={{
            position: "relative",
            color: "primary.main",
            "&:hover": {
              color: "primary.dark",
            },
            "&:before": {
              content: "''",
              position: "absolute",
              width: "3px",
              height: "0",
              bottom: 0,
              backgroundColor: "primary.dark",
              visibility: "hidden",
            },
            "&:hover:before": {
              visibility: "visible",
              height: "100%",
            },
          }}
        >
          <Box sx={{m:{ xs: 2, sm: 1, md: 2, lg: 6 }}}>
            <WalletIcon
              style={{
                width: "100%",
                height: 100,
              }}
            />
          </Box>
          <Typography
            variant="subtitle2"
            textTransform="uppercase"
            gutterBottom
          >
            {linkName}
          </Typography>
        </MuiLink>
      </Link>
    </Grid>
  );
};
