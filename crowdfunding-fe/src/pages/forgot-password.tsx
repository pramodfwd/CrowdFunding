import {
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import MuiLink from "@mui/material/Link";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import React from "react";
import { useFormik } from "formik";
import { ForgotPasswordSchema } from "@/Schemas";
import Btn, { MediaBtn } from "@/components/Button/Button";
import Axios from "@/Axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const initialValues = {
  email: "",
};

const EmailForgotPassword = () => {
  const { handleBlur, handleChange, values, errors, touched, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: ForgotPasswordSchema,

      onSubmit: async (values, action) => {
        try {
          const response = await Axios.post("/auth/forget-password-email", {
            email: values.email,
          });
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
    <Grid
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="#e4f2f7"
    >
      <Grid
        item
        height={{ xs: "40rem", sm: "45rem", md: "26rem" }}
        maxWidth="68rem"
        bgcolor="secondary.main"
        m={2}
        mt={{ xs: 2, sm: 3, md: 5 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        boxShadow={15}
        borderRadius={5}
      >
        <Grid item container>
          <Grid
            item
            xs={12}
            md={6}
            sm={12}
            display="flex"
            alignItems="center"
            flexDirection="column"
            justifyContent="center"
            borderRight={{ md: "0.5px solid", sm: "none" }}
            borderColor={{ md: "secondary.contrastText", sm: "none" }}
          >
            <Typography variant="h6" component="h1" textAlign="center">
              If You Support Them, Then Go Fund Them.
            </Typography>
            <Grid bgcolor="primary.main" width="20%" height="2px"></Grid>
            <Grid
              component="img"
              width="50%"
              alt="image."
              src="https://img.freepik.com/premium-vector/crowdfunding-isolated-cartoon-vector-illustrations_107173-22564.jpg"
            />
          </Grid>
          <Grid
            item
            container
            xs={12}
            md={6}
            sm={12}
            display="flex"
            alignItems="center"
            justifyContent="center"
            p={3}
          >
            <Grid container>
              <Grid
                item={true}
                sx={{
                  borderBottom: "2px solid ",
                  borderColor: "primary.main",
                }}
                width={220}
                textAlign="center"
                xs={8}
                sm={6}
              >
                
                <MuiLink
                underline="none"
                  variant="h4"
                  fontWeight={500}
                  color="primary.dark"
                >
                  Forgot Password
                </MuiLink>
                
              </Grid>
              <Grid
                item={true}
                borderBottom="1px solid "
                borderColor="secondary.contrastText"
                xs={4}
                sm={6}
              ></Grid>
            </Grid>
            <Grid container component="form" onSubmit={handleSubmit} mt={2}>
              <Typography>
                Enter your email address and we&rsquo;ll send you a recovery link.
              </Typography>
              <Grid container>
                <Grid item xs={12}>
                  <TextField
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                    focused
                    id="email"
                    placeholder="atul@gmail.com"
                    name="email"
                    error={Boolean(errors.email && touched.email)}
                    helperText={
                      errors.email && touched.email ? errors.email : null
                    }
                    size="small"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <EmailOutlinedIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid container>
                  <Grid
                    xs={12}
                    sm={6}
                    item
                    display="flex"
                    alignItems="center"
                    justifyContent={{ xs: "center", sm: "left" }}
                  >
                    <Btn
                      text="Submit"
                      color="primary.dark"
                      backgroundColor="primary.main"
                      width={130}
                      height={45}
                      borderRadius={20}
                      fontSize={18}
                      variant="contained"
                      textTransform="capitalize"
                      type="submit"
                    />
                    <ToastContainer />
                  </Grid>
                  <Grid
                    xs={12}
                    sm={6}
                    item
                    display="flex"
                    gap={0.5}
                    alignItems="center"
                    justifyContent={{ xs: "center", sm: "end" }}
                  >
                    <Typography>If you have remember? </Typography>
                    <Link href="/login" legacyBehavior>
                     <Typography sx={{cursor:"pointer", color:"primary.main"}}>Login</Typography> 
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EmailForgotPassword;
