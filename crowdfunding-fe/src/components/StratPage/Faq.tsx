import { ErrorMessage, FieldArray, Form, Formik } from "formik";
import React from "react";
import { Box, Grid, IconButton, TextField, Typography } from "@mui/material";
import Btn from "../Button/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/Add";
import * as Yup from "yup";

const Faq = (props: any) => {
  const handleSubmit = (values: any) => {
    props.next(values);
  };

  return (
    <>
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
            FAQ
          </Typography>
          <Typography mb={3} textAlign="center">
            FAQ stands for Frequently Asked Questions. If you have simple
            answers to common questions then list them here.
          </Typography>
        </Box>
        <Formik
          initialValues={props.data}
          enableReinitialize={true}
          onSubmit={handleSubmit}
          validationSchema={Yup.object({
            faqSection: Yup.array().of(
              Yup.object().shape({
                question: Yup.string().required("question is required"),
                answer: Yup.string().required("Answer is required"),
              })
            ),
          })}
        >
          {({ values, handleChange, handleBlur }) => (
            <Form style={{ width: "100%" }}>
              <FieldArray
                name="faqSection"
                render={({ insert, remove }) => {
                  return (
                    <Grid container alignItems="center" justifyContent="center">
                      {values.faqSection.map((employee: any, index: any) => {
                        return (
                          <React.Fragment key={index}>
                            <Grid
                              container
                              alignItems="center"
                              justifyContent="center"
                              width={{ md: "100%", lg: "70%" }}
                              m={1}
                            >
                              <Grid item lg={2} md={12} sm={12} xs={12}>
                                <Typography
                                  alignItems="center"
                                  fontWeight="bold"
                                  display="flex"
                                >
                                  Question
                                  <Box color="red" component="span">
                                    {"*"}
                                  </Box>{" "}
                                  :
                                </Typography>
                              </Grid>
                              <Grid item lg={8} md={12} sm={12} xs={12}>
                                <TextField
                                  value={employee.question}
                                  onBlur={handleBlur}
                                  fullWidth
                                  focused
                                  onChange={handleChange}
                                  size="small"
                                  id={`faqSection.${index}.question`}
                                  name={`faqSection.${index}.question`}
                                />
                                <Grid
                                  sx={{
                                    color: "error.main",
                                    fontSize: "0.75rem",
                                  }}
                                >
                                  <ErrorMessage
                                    name={`faqSection.${index}.question`}
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              alignItems="center"
                              justifyContent="center"
                              width={{ md: "100%", lg: "70%" }}
                              m={1}
                            >
                              <Grid item lg={2} md={12} sm={12} xs={12}>
                                <Typography
                                  alignItems="center"
                                  fontWeight="bold"
                                  display="flex"
                                >
                                  Answer
                                  <Box color="red" component="span">
                                    {"*"}
                                  </Box>
                                  :
                                </Typography>
                              </Grid>
                              <Grid item lg={8} md={12} sm={12} xs={12}>
                                <TextField
                                  value={employee.answer}
                                  onBlur={handleBlur}
                                  fullWidth
                                  focused
                                  onChange={handleChange}
                                  size="small"
                                  id={`faqSection.${index}.answer`}
                                  name={`faqSection.${index}.answer`}
                                />
                                <ErrorMessage
                                  name={`faqSection.${index}.answer`}
                                >
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
                              width="100%"
                              display="flex"
                              justifyContent="flex-end"
                              alignItems="flex-end"
                            >
                              <IconButton
                                aria-label="Add"
                                sx={{
                                  bgcolor: "primary.dark",
                                  color: "secondary.main",
                                  "&:hover": { bgcolor: "primary.dark" },
                                }}
                                size="medium"
                                onClick={(event) => {
                                  insert(values.faqSection.length + 1, {
                                    question: "",
                                    answer: "",
                                  });
                                }}
                              >
                                <AddCircleOutlineIcon
                                  fontSize="inherit"
                                  type="button"
                                />
                              </IconButton>
                              &nbsp;
                              <IconButton
                                aria-label="delete"
                                sx={{
                                  bgcolor: "error.main",
                                  color: "secondary.main",
                                  "&:hover": { bgcolor: "error.main" },
                                }}
                                size="medium"
                                onClick={(event) => remove(index)}
                              >
                                <DeleteIcon fontSize="inherit" type="button" />
                              </IconButton>
                            </Grid>
                          </React.Fragment>
                        );
                      })}
                    </Grid>
                  );
                }}
              />
              <Grid container m={2} justifyContent="center" alignItems="center">
                <Grid m={1}>
                  <Btn
                    borderRadius="50px"
                    onClick={() => props.prev(values)}
                    type="button"
                    fontSize="20px"
                    textTransform="capitalize"
                    backgroundColor="secondary.main"
                    color="primary.main"
                    variant="outlined"
                    bg="secondary.contrastText"
                    textColor="primary.dark"
                    pl="30px"
                    pr="30px"
                    text=" Back"
                  />
                </Grid>
                <Grid m={1}>
                  <Btn
                    type="submit"
                    borderRadius="50px"
                    fontSize="20px"
                    textTransform="capitalize"
                    backgroundColor="secondary.main"
                    color="primary.main"
                    variant="outlined"
                    bg="error.light"
                    textColor="primary.dark"
                    pl="30px"
                    pr="30px"
                    text=" Skip"
                  />
                </Grid>
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
              </Grid>
            </Form>
          )}
        </Formik>
      </Grid>
    </>
  );
};

export default Faq;
