import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Btn from "../Button/Button";
import { Form, Formik } from "formik";

const RichTextEditor = dynamic(() => import("./RichTextEditor"), {
  ssr: false,
});
let config = {};
const Story = (props: any) => {
  const [value, setValue] = useState(props.data.basicInfoSection.textField);

  const handleSubmit = (values: any) => {
    props.data.basicInfoSection.textField = value;
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
            Tell Us About Your Sponsor Page
            <Box color="red" component="span">
              {"*"}
            </Box>
          </Typography>
          <Typography textAlign="center">
            How Will You Spend The Money You Want To Raise?
          </Typography>
        </Box>
        <Grid sx={{ width: { xs: "90%", sm: "90%", md: "100%", lg: "100%" } }}>
          <Formik
            initialValues={props.data}
            enableReinitialize={true}
            onSubmit={handleSubmit}
          >
            {({ values }) => (
              <Form>
                <RichTextEditor
                  config={config}
                  setValue={setValue}
                  value={value}
                />
                <Grid
                  container
                  m={2}
                  justifyContent="center"
                  alignItems="center"
                >
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
      </Grid>
    </>
  );
};
export default Story;
