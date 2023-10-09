import { Box, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import Btn, { MediaBtn } from "../Button/Button";
import InputAdornment from "@mui/material/InputAdornment";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import lightTheme from "@/styles/theme/lightTheme";
import { useFormik } from "formik";
import { signUpSchema } from "@/Schemas";
import axios from "@/Axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const { handleBlur, handleChange, values, errors, touched, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,

      onSubmit: async (values, action) => {
        try {
          const response = await axios.post("/auth/signup", {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
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
            p={1}
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
            <Grid bgcolor="primary.main" width="20%" height="2px" m={1}></Grid>
            <Grid
              component="img"
              height="60%"
              width="80%"
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
            p={{ xs: 0, sm: 2 }}
          >
            <Grid container display="flex" justifyContent="center" p={2}>
              <Grid
                item={true}
                sx={{
                  borderBottom: "2px solid ",
                  borderColor: "primary.main",
                }}
                width={220}
                textAlign="center"
                xs={6}
                sm={6}
              >
                <Link
                  href="/join"
                  legacyBehavior
                >
                 <Typography variant="h4" color="primary.main" sx={{cursor:"pointer"}}>Join</Typography> 
                </Link>
              </Grid>
              <Grid
                item={true}
                sx={{
                  borderBottom: "1px solid ",
                  borderColor: "secondary.contrastText",
                }}
                width={220}
                textAlign="center"
                xs={6}
                sm={6}
              >
                 <Link
                  href="/login"
                  legacyBehavior
                >
                 <Typography variant="h4" sx={{ color: "primary.dark", cursor:"pointer" }}>login</Typography> 
                </Link>
              </Grid>
            </Grid>
            <Typography fontSize={{ xs:16, lg: 20 }}>Join with Social</Typography>
            <Grid
              item
              container
              maxWidth="100%"
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mt={1}
            >
              <Grid
                container
                spacing={1}
                direction="row"
                justifyContent="center"
                p={2}
                mb={-1}
                gap={1}
              >
                <Grid>
                  <MediaBtn
                    icon={<FacebookIcon />}
                    text="Facebook"
                    color="#3c5a9a"
                    borderColor="secondary.main"
                    width={120}
                    borderRadius={10}
                    size="small"
                    variant="outlined"
                    textTransform="capitalize"
                  />
                </Grid>
                <Grid>
                  <MediaBtn
                    icon={<LinkedInIcon />}
                    text="LinkedIn"
                    color="#0077b5"
                    borderColor="secondary.main"
                    width={120}
                    borderRadius={10}
                    size="small"
                    variant="outlined"
                    textTransform="capitalize"
                  />
                </Grid>
                <Grid>
                  <MediaBtn
                    icon={<GoogleIcon />}
                    text="Google"
                    color="#db4437"
                    borderColor="secondary.main"
                    width={120}
                    borderRadius={10}
                    size="small"
                    variant="outlined"
                    textTransform="capitalize"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
              p={2}
              mb={-1}
            >
              <Box
                height={3}
                width="30%"
                sx={{
                  background: `linear-gradient(to left,${lightTheme.palette.primary.main} 10%, ${lightTheme.palette.primary.light} 100%)`,
                }}
              ></Box>
              <Typography fontWeight="bold" fontSize={18} textAlign="center">
                Or Join with
              </Typography>
              <Box
                height={3}
                width="30%"
                sx={{
                  background: `linear-gradient(to right, ${lightTheme.palette.primary.main} 10%, ${lightTheme.palette.primary.light} 100%)`,
                }}
              ></Box>
            </Grid>
            <Grid
              component="form"
              onSubmit={handleSubmit}
              noValidate
              p={2}
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Grid container spacing={1.5} lineHeight={3}>
                <Grid item xs={12} sm={12} md={6}>
                  <TextField
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                    id="firstName"
                    label="First Name"
                    size="small"
                    autoFocus
                    error={Boolean(errors.firstName && touched.firstName)}
                    helperText={errors.firstName && touched.firstName ? errors.firstName : null}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <PersonOutlineOutlinedIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <TextField
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                    size="small"
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    error={Boolean(errors.lastName && touched.lastName)}
                    helperText={errors.lastName && touched.lastName ? errors.lastName : null}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <PersonOutlineOutlinedIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    error={Boolean(errors.email && touched.email)}
                    helperText={errors.email && touched.email ? errors.email : null}
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
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    size="small"
                    error={Boolean(errors.password && touched.password)}
                    helperText={errors.password && touched.password ? errors.password : null}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <LockOutlinedIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    size="small"
                    error={Boolean(errors.confirmPassword && touched.confirmPassword)}
                    helperText={errors.confirmPassword && touched.confirmPassword ? errors.confirmPassword : null}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <LockOutlinedIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
              <Btn
                text="Join"
                color="primary.dark"
                backgroundColor="primary.main"
                width={120}
                height={50}
                borderRadius={20}
                fontSize={18}
                variant="contained"
                textTransform="capitalize"
                type="submit"
              />
              <ToastContainer />
            </Grid>
            <Grid justifyContent="flex-start" item={true} p={1} xs={12} sm={12}>
              <Grid item>
                By continuing, you agree to the CrowdFunding.com{" "}
                <Link
                    href="#"
                    legacyBehavior
                  >
                   <Typography component="a" sx={{color:"primary.main",
                      "&:hover": {
                        color: "blue",
                      }, cursor:"pointer"
                    }}> terms </Typography> 
                  </Link>
                terms and acknowledge receipt of our{" "}
                <Link
                    href="#"
                    legacyBehavior
                  >
                  <Typography component="a" sx={{ color:"primary.main",
                      "&:hover": {
                        color: "blue",
                      }, cursor:"pointer"
                    }}> privacy policy</Typography>  
                  </Link>
                .
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SignUp;
