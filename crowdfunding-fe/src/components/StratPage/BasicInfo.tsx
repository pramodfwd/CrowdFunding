import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { FormControl, InputAdornment, TextField } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Btn from "../Button/Button";
import { ErrorMessage, Form, Formik } from "formik";
import { ToastContainer } from "react-toastify";
import * as Yup from "yup";

const BasicInformation = (props: any) => {
  const handleSubmit = (values: any) => {
    props.next(values);
  };

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      p={{ xs: 0, sm: 2, md: 3 }}
      mt={{ xs: 2, md: -2 }}
    >
      <Box>
        <Typography fontSize={30} fontWeight={700} textAlign="center">
          Start with the basics
        </Typography>
        <Box textAlign="center">Set a realistic goal.</Box>
      </Box>
      <Grid width="85%" ml={{ xs: 0, sm: 0, md: 0, lg: 12 }} mt={2}>
        <Formik
          initialValues={props.data}
          enableReinitialize={true}
          onSubmit={handleSubmit}
          validationSchema={Yup.object({
            basicInfoSection: Yup.object({
              sponsorPageName: Yup.string()
                .min(2)
                .required("Sponsor Page Name is required"),
              sponsorPageURL: Yup.string()
                .min(2)
                .required("Sponsor page URL is required"),
              sponsorPageCaption: Yup.string()
                .min(2)
                .required("Sponsor Page Caption is required"),
              sponsorPageCategory: Yup.string()
                .min(2)
                .required("Sponsor Page Category is required"),
              sponsorPageLocation: Yup.string(),
              amount: Yup.string().required("Amount is required"),
            }),
          })}
        >
          {({ errors, touched, values, handleChange, handleBlur }: any) => (
            <Form>
              <Grid
                container
                alignItems="center"
                justifyContent="center"
                width={{ md: "100%", lg: "95%" }}
                mb={2}
              >
                <Grid item lg={3} md={12} sm={12} xs={12}>
                  <Typography
                    gap={0.2}
                    display="flex"
                    alignItems="center"
                    fontWeight="bold"
                    ml={{ xs: 0, sm: 0, md: 0, lg: -1 }}
                  >
                    Sponsor Page Name
                    <Box color="red" component="span">
                      {"*"}
                    </Box>
                    <InfoIcon fontSize="small" /> :
                  </Typography>
                </Grid>
                <Grid item lg={9} md={12} sm={12} xs={12}>
                  <TextField
                    value={values.basicInfoSection.sponsorPageName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                    type="text"
                    size="small"
                    id="basicInfoSection.sponsorPageName"
                    name="basicInfoSection.sponsorPageName"
                  />
                  <ErrorMessage name="basicInfoSection.sponsorPageName">
                    {(msg) => (
                      <Grid
                        sx={{
                          color: "error.main",
                          fontSize: "0.75rem",
                        }}
                      >
                        {msg}
                      </Grid>
                    )}
                  </ErrorMessage>
                </Grid>
              </Grid>
              <Grid
                container
                alignItems="center"
                width={{ md: "100%", lg: "95%" }}
                mb={2}
              >
                <Grid item lg={3} md={12} sm={12} xs={12}>
                  <Typography
                    alignItems="center"
                    fontWeight="bold"
                    display="flex"
                    gap={0.3}
                    marginLeft={{
                      xs: 0,
                      sm: 0,
                      md: 0,
                      lg: -0.3,
                    }}
                  >
                    Sponsor page URL
                    <Box color="red" ml={-0.2} component="span">
                      {"*"}
                    </Box>
                    <InfoIcon fontSize="small" /> :
                  </Typography>
                </Grid>
                <Grid item lg={9} md={12} sm={12} xs={12}>
                  <TextField
                    fullWidth
                    value={values.basicInfoSection.sponsorPageURL}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    size="small"
                    name="basicInfoSection.sponsorPageURL"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          sx={{
                            borderRight: "2px solid",
                            borderColor: "primary.main",
                            width: 170,
                            height: 150,
                            p: 2.3,
                            ml: -1.4,
                            bgcolor: "secondary.contrastText",
                            borderRadius: 1,
                          }}
                        >
                          www.crowdfunding/
                        </InputAdornment>
                      ),
                    }}
                  />
                  <ErrorMessage name="basicInfoSection.sponsorPageURL">
                    {(msg) => (
                      <Grid
                        sx={{
                          color: "error.main",
                          fontSize: "0.75rem",
                        }}
                      >
                        {msg}
                      </Grid>
                    )}
                  </ErrorMessage>
                </Grid>
              </Grid>
              <Grid
                container
                alignItems="center"
                width={{ md: "100%", lg: "95%" }}
                mb={2}
              >
                <Grid item lg={3} md={12} sm={12} xs={12}>
                  <Typography
                    alignItems="center"
                    display="flex"
                    marginLeft={{
                      xs: 0,
                      sm: 0,
                      md: 0,
                      lg: -2.3,
                    }}
                    fontWeight="bold"
                  >
                    Sponsor Page Caption
                    <Box color="red" ml={0.3} component="span">
                      {"*"}
                    </Box>
                    <InfoIcon fontSize="small" /> :
                  </Typography>
                </Grid>
                <Grid item lg={9} md={12} sm={12} xs={12}>
                  <TextField
                    value={values.basicInfoSection.sponsorPageCaption}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                    rows={3}
                    multiline
                    id="basicInfoSection.sponsorPageCaption"
                    name="basicInfoSection.sponsorPageCaption"
                  />
                  <ErrorMessage name="basicInfoSection.sponsorPageCaption">
                    {(msg) => (
                      <Grid
                        sx={{
                          color: "error.main",
                          fontSize: "0.75rem",
                        }}
                      >
                        {msg}
                      </Grid>
                    )}
                  </ErrorMessage>
                </Grid>
              </Grid>
              <Grid
                container
                alignItems="center"
                width={{ md: "100%", lg: "95%" }}
                mb={2}
              >
                <Grid item lg={3} md={12} sm={12} xs={12}>
                  <Typography
                    alignItems="center"
                    fontWeight="bold"
                    display="flex"
                    gap={0.1}
                    marginLeft={{
                      xs: 0,
                      sm: 0,
                      md: 0,
                      lg: -1.5,
                    }}
                  >
                    Sponsor Page Category
                    <Box component="span" color="red" ml={0.1}>
                      {"*"}
                    </Box>{" "}
                    :
                  </Typography>
                </Grid>
                <Grid item lg={9} md={12} sm={12} xs={12} display="flex">
                  <FormControl fullWidth>
                    <Select
                      size="small"
                      value={values.basicInfoSection.sponsorPageCategory}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="basicInfoSection.sponsorPageCategory"
                      name="basicInfoSection.sponsorPageCategory"
                      sx={{ textAlign: "left" }}
                    >
                      <MenuItem disabled value="">
                        Select Category
                      </MenuItem>
                      <MenuItem value="Community">Community</MenuItem>
                      <MenuItem value="Business">Business</MenuItem>
                      <MenuItem value="Personal">Personal</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid
                container
                alignItems="center"
                width={{ md: "100%", lg: "95%" }}
                mb={2}
              >
                <Grid item lg={3} md={12} sm={12} xs={12}>
                  <Typography
                    alignItems="center"
                    fontWeight="bold"
                    display="flex"
                    gap={0.3}
                    marginLeft={{
                      xs: 0,
                      sm: 0,
                      md: 0,
                      lg: -0.5,
                    }}
                  >
                    Sponsor Page Location :
                  </Typography>
                </Grid>
                <Grid item lg={9} md={12} sm={12} xs={12} display="flex">
                  <TextField
                    value={values.basicInfoSection.sponsorPageLocation}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                    size="small"
                    id="basicInfoSection.sponsorPageLocation"
                    name="basicInfoSection.sponsorPageLocation"
                    // placeholder="Search Places ..."
                  />
                </Grid>
              </Grid>
              <Grid
                container
                alignItems="center"
                width={{ md: "100%", lg: "95%" }}
              >
                <Grid item lg={3} md={12} sm={12} xs={12}>
                  <Typography
                    display="flex"
                    fontWeight="bold"
                    gap={0.3}
                    marginBottom={{
                      xs: -1,
                      sm: -1,
                      md: -1,
                      lg: -1,
                    }}
                    marginLeft={{
                      xs: 0,
                      sm: 0,
                      md: 0,
                      lg: 8.8,
                    }}
                  >
                    Amount
                    <Box color="red" ml={-0.2} component="span">
                      {"*"}
                    </Box>
                    :
                  </Typography>
                  <Typography
                    mt={0.5}
                    width="100%"
                    alignItems="center"
                    display="flex"
                    gap={0.3}
                    fontSize="small"
                  >
                    How much money do you need?
                  </Typography>
                </Grid>
                <Grid item lg={9} md={12} sm={12} xs={12}>
                  <TextField
                    fullWidth
                    value={values.basicInfoSection.amount}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="basicInfoSection.amount"
                    name="basicInfoSection.amount"
                    type="number"
                    size="small"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          sx={{
                            borderRight: "1px solid",
                            borderColor: "primary.light",
                            width: 50,
                            height: 50,
                            p: 2.3,
                            ml: -1.5,
                            bgcolor: "secondary.contrastText",
                            borderRadius: 1,
                          }}
                        >
                          <AttachMoneyIcon
                            sx={{
                              borderRight: "2px solid",
                              borderColor: "primary.main",
                              paddingRight: 1,
                              height: 45,
                              width: 40,
                              ml: -1.3,
                            }}
                          />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <ErrorMessage name="basicInfoSection.amount">
                    {(msg) => (
                      <Grid
                        sx={{
                          color: "error.main",
                          fontSize: "0.75rem",
                        }}
                      >
                        {msg}
                      </Grid>
                    )}
                  </ErrorMessage>
                </Grid>
              </Grid>
              <Grid container m={2} justifyContent="center" alignItems="center">
                <Btn
                  type="submit"
                  borderRadius="50px"
                  fontSize="20px"
                  textTransform="capitalize"
                  backgroundColor="secondary.main"
                  color="primary.main"
                  variant="outlined"
                  bg="primary.main"
                  pl="30px"
                  pr="30px"
                  textColor="secondary.main"
                  text=" Save & Continue"
                />
                <ToastContainer />
              </Grid>
            </Form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
};
export default BasicInformation;
