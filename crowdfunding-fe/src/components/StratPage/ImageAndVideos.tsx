import React, { useEffect } from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import Btn from "../Button/Button";
import { useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { ErrorMessage, Form, Formik } from "formik";

const ImageAndVideos = (props: any) => {
  const [image, setImage] = useState("");
  const [cropData, setCropData] = useState("");
  const [cropper, setCropper] = useState<any>(null);
  const [imageChanged, setImageChanged] = useState(props.data.basicInfoSection.imageChange);
  useEffect(() => {
    if (props.data.basicInfoSection.imageChange == true) {
      setImageChanged(false)
    }
  }, [])
  const handleSubmit = (values: any) => {
    values.basicInfoSection.imageChange = imageChanged
    props.next(values);
  };

  const onChange = (e: any) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as any);
    };
    reader.readAsDataURL(files[0]);
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
            Sponsor Page image and video
          </Typography>
          <Typography textAlign="center">
            Add an image that clearly represents your sponsor page. Minimum
            image resolution size should be at least 400 x 400.
          </Typography>
        </Box>
        <Formik
          initialValues={props.data}
          enableReinitialize={true}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleBlur }) => {
            const getCropData = () => {
              if (typeof cropper !== "undefined") {
                const crop = cropper.getCroppedCanvas().toDataURL();
                setCropData(crop);
                values.basicInfoSection.uploadImage = crop;
                setImageChanged(true)
              }
            };
            return (
              <Form>
                <Grid
                  container
                  alignItems="center"
                  width={{ md: "100%", lg: "80%" }}
                  m={1}
                >
                  <Grid item lg={4} md={12} sm={12} xs={12}>
                    <Typography
                      alignItems="center"
                      fontWeight="bold"
                      display="flex"
                    >
                      Enter Video Url Link :
                    </Typography>
                  </Grid>
                  <Grid item lg={8} md={12} sm={12} xs={11}>
                    <TextField
                      fullWidth
                      focused
                      value={values.basicInfoSection.videoUrl}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      size="small"
                      id="basicInfoSection.videoUrl"
                      name="basicInfoSection.videoUrl"
                      placeholder="https://www.youtube.com/watch?v=Zv11L-ZfrSg"
                    />
                    <ErrorMessage name="basicInfoSection.videoUrl">
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
                  width={{ md: "100%", lg: "80%" }}
                  m={1}
                >
                  <Grid item lg={4} md={12} sm={12} xs={11}>
                    <Typography
                      alignItems="center"
                      fontWeight="bold"
                      display="flex"
                    >
                      Upload Image
                      <Box color="red" component="span">
                        {"*"}
                      </Box>
                      :
                    </Typography>
                  </Grid>
                  <Grid item lg={8} md={12} sm={12} xs={11}>
                    <TextField
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      type="file"
                      onChange={onChange}
                      inputProps={{ accept: "image/*" }}
                      onBlur={handleBlur}
                      size="small"
                      name="basicInfoSection.uploadImage"
                      sx={{
                        mb: 1,
                        border: "1px dashed",
                        borderColor: "primary.main",
                      }}
                    />
                    <Grid>
                      {values.basicInfoSection.uploadImage && (
                        <img
                          style={{ minHeight: 230, minWidth: 210 }}
                          src={values.basicInfoSection.uploadImage}
                          alt="croped Image"
                          width="220px"
                          height="220px"
                          onChange={onChange}
                        />
                      )}
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                      <Cropper
                        style={{ height: "70%", width: "100%" }}
                        autoCrop
                        initialAspectRatio={1 / 1}
                        src={image}
                        movable={false}
                        viewMode={1}
                        background={false}
                        responsive={true}
                        autoCropArea={1}
                        checkOrientation={false}
                        onInitialized={(instance: any) => {
                          setCropper(instance);
                        }}
                        guides={true}
                      />
                      {image === "" ? (
                        ""
                      ) : (
                        <Btn
                          text="Crop Image"
                          variant="outlined"
                          onClick={getCropData}
                          fontSize="16px"
                          width="35%"
                          bg="primary.main"
                          backgroundColor="primary.main"
                          color="secondary.main"
                          textColor="secondary.main"
                          marginBottom="0px"
                        />
                      )}
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    m={2}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid m={1}>
                      <Btn
                        type="button"
                        onClick={() => props.prev(values)}
                        borderRadius="50px"
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
                </Grid>
              </Form>
            );
          }}
        </Formik>
      </Grid>
    </>
  );
};

export default ImageAndVideos;
