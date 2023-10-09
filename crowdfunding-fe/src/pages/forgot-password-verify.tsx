import {
  Grid,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import React from "react";
import { useFormik } from "formik";
import { resetPasswordSchema } from "@/Schemas";
import Btn, { MediaBtn } from "@/components/Button/Button";
import Axios from "@/Axios";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialValues = {
  password: "",
  ConfirmPassword: "",
};

const EmailForgotPassword = () => {
  const router = useRouter();
  const { handleBlur, handleChange, values, errors, touched, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: resetPasswordSchema,
      onSubmit: async (values, action) => {
        try {
          const response = await Axios.patch(
            `/auth/reset-password?token=${router.query.token}`,
            {
              password: values.password,
            }
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
    <Grid
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="#e4f2f7"
    >
      <Grid
        item
        height={{ xs: "45rem", sm: "55rem", md: "26rem" }}
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
                xs={9}
                sm={6}
              >
                <Link
                  href="/Login"
                  underline="none"
                  variant="h4"
                  color="primary.main"
                >
                  Forgot Password
                </Link>
              </Grid>
              <Grid
                item={true}
                borderBottom="1px solid "
                borderColor="secondary.contrastText"
                xs={3}
                sm={6}
              ></Grid>
            </Grid>
            <Grid
              container
              gap={2}
              component="form"
              onSubmit={handleSubmit}
              mt={2}
            >
              <Typography>
                Update your password for access your account.
              </Typography>
              <Grid container gap={2}>
                <Grid item xs={12}>
                  <TextField
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                    focused
                    id="password"
                    placeholder="New Password"
                    name="password"
                    error={Boolean(errors.password && touched.password)}
                    helperText={
                      errors.password && touched.password
                        ? errors.password
                        : null
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
                <Grid item xs={12}>
                  <TextField
                    value={values.ConfirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                    focused
                    id="Confirm Password"
                    placeholder="Confirm Password"
                    name="ConfirmPassword"
                    error={Boolean(
                      errors.ConfirmPassword && touched.ConfirmPassword
                    )}
                    helperText={
                      errors.ConfirmPassword && touched.ConfirmPassword
                        ? errors.ConfirmPassword
                        : null
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
