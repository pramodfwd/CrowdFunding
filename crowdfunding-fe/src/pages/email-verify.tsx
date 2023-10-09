import { Box, Button, Grid, Typography } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import React from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import Axios from "@/Axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialValues = {};

const Varification = () => {
  const router = useRouter();
  const { handleBlur, handleChange, values, errors, touched, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      onSubmit: async (values, action) => {
        try {
          const response = await Axios.post(
            `/auth/verify-email?token=${router.query.token}`,
            {}
          );
          toast(response.data.message, {
            position: toast.POSITION.BOTTOM_CENTER,
            type: toast.TYPE.SUCCESS,
          });
        } catch (error: any) {
          toast(error.response.data.message, {
            position: toast.POSITION.BOTTOM_CENTER,
            type: toast.TYPE.ERROR,
          });
        }
        action.resetForm();
      },
    });

  return (
    <>
      <Grid
        item={true}
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight={400}
      >
        <Grid item={true} xs={12} minHeight="100px" bgcolor="greenyellow">
          <Box p={6} bgcolor="secondary.light">
            <Box display="flex" justifyContent="center" fontSize="large">
              <EmailOutlinedIcon sx={{color:"primary.main", fontSize:"40px"}} />
            </Box>
            <Typography align="center" fontSize="28px" fontWeight={600}>
              Verify your email address
            </Typography>
            <Typography align="center">
              In order to start using your CrowdFundingFE account. you need to
              <br></br>confirm your email address
            </Typography>
            <Grid
              component="form"
              display="flex"
              onSubmit={handleSubmit}
              mt={3}
              justifyContent="center"
              alignItems="center"
            >
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "primary.main",
                  color: "secondary.main",
                  "&:hover": {
                    backgroundColor: "secondary.main",
                    color: "primary.main",
                  },
                }}
              >
                Confirm
              </Button>
              <ToastContainer />
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Varification;
