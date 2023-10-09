import React, { useEffect, useState } from "react";
import {
  Box,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import "cropperjs/dist/cropper.css";
import { Form, Formik } from "formik";
import { InputAdornment } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { ErrorMessage, FieldArray } from "formik";
import { IconButton, TextField } from "@mui/material";
import Btn from "../Button/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/Add";
import { useRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { ToastContainer } from "react-toastify";
import * as Yup from "yup";

const Rewards = (props: any) => {
  const [image, setImage] = useState("");
  const [cropData, setCropData] = useState("");
  const [cropper, setCropper] = useState<any>(null);
  const [imageChanged, setImageChanged] = useState(false);
   
  useEffect(()=>{
    props.data.rewardSection.map((rIC:any, ind:any)=>{
      setImageChanged(rIC.rewardImageChange)
    })
  } , [])
  const handleSubmit = (values: any) => {
    props.next(values, true);
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
            Sponsor Rewards
          </Typography>
          <Typography mb={3} textAlign="center">
            Create Rewards for your Sponsors
          </Typography>
        </Box>
        <Formik
          initialValues={props.data}
          enableReinitialize={true}
          onSubmit={handleSubmit}
          validationSchema={Yup.object({
            rewardSection: Yup.array().of(
              Yup.object().shape({
                rewardTitle: Yup.string().required("Reward title is required"),
                rewardType: Yup.string(),
                youtubeVideoLink: Yup.string(),
                rewardImage: Yup.string(),
                sponsorshipAmount: Yup.number().required("Amount is required"),
                rewardDescription: Yup.string().required(
                  "Description is required"
                ),
              })
            ),
          })}
        >
          {({ errors, touched, values, handleChange, handleBlur }) => (
            <Form style={{ width: "100%" }}>
              <FieldArray
                name="rewardSection"
                render={({ insert, remove }) => {
                  return (
                    <Grid container alignItems="center" justifyContent="center">
                      {values.rewardSection.map((employee: any, index: any) => {
                        return (
                          <React.Fragment key={index}>
                            <Grid
                              container
                              alignItems="center"
                              justifyContent="center"
                              width={{ md: "100%", lg: "65%" }}
                              m={1}
                            >
                              <Grid item lg={3} md={12} sm={12} xs={12}>
                                <Typography
                                  alignItems="center"
                                  fontWeight="bold"
                                  display="flex"
                                >
                                  Reward Title
                                  <Box color="red" component="span">
                                    {"*"}
                                  </Box>{" "}
                                  :
                                </Typography>
                              </Grid>
                              <Grid item lg={8} md={12} sm={12} xs={12}>
                                <TextField
                                  value={employee.rewardTitle}
                                  onBlur={handleBlur}
                                  fullWidth
                                  focused
                                  onChange={handleChange}
                                  size="small"
                                  id={`rewardSection.${index}.rewardTitle`}
                                  name={`rewardSection.${index}.rewardTitle`}
                                />
                                <Grid
                                  sx={{
                                    color: "error.main",
                                    fontSize: "0.75rem",
                                  }}
                                >
                                  <ErrorMessage
                                    name={`rewardSection.${index}.rewardTitle`}
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              alignItems="center"
                              justifyContent="center"
                              width={{ md: "100%", lg: "65%" }}
                              m={1}
                            >
                              <Grid item lg={3} md={12} sm={12} xs={12}>
                                <Typography
                                  alignItems="center"
                                  fontWeight="bold"
                                  display="flex"
                                >
                                  Reward Type :
                                </Typography>
                              </Grid>
                              <Grid item lg={8} md={12} sm={12} xs={12}>
                                <FormControl fullWidth>
                                  <Select
                                    size="small"
                                    defaultValue="Monthly"
                                    value={employee.rewardType}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    id={`rewardSection.${index}.rewardType`}
                                    name={`rewardSection.${index}.rewardType`}
                                    sx={{ textAlign: "left" }}
                                  >
                                    <MenuItem value="One Time">
                                      One Time
                                    </MenuItem>
                                    <MenuItem value="Monthly">Monthly</MenuItem>
                                  </Select>
                                </FormControl>
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              alignItems="center"
                              justifyContent="center"
                              width={{ md: "100%", lg: "65%" }}
                              m={1}
                            >
                              <Grid item lg={3} md={12} sm={12} xs={12}>
                                <Typography
                                  alignItems="center"
                                  fontWeight="bold"
                                  display="flex"
                                >
                                  Youtube Video Link :
                                </Typography>
                              </Grid>
                              <Grid item lg={8} md={12} sm={12} xs={12}>
                                <TextField
                                  value={employee.youtubeVideoLink}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  fullWidth
                                  size="small"
                                  id={`rewardSection.${index}.youtubeVideoLink`}
                                  name={`rewardSection.${index}.youtubeVideoLink`}
                                  focused
                                  placeholder="https://www.youtube.com/watch?v=Zv11L-ZfrSg"
                                />
                                <Grid
                                  sx={{
                                    color: "error.main",
                                    fontSize: "0.75rem",
                                  }}
                                >
                                  <ErrorMessage
                                    name={`rewardSection.${index}.youtubeVideoLink`}
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              alignItems="center"
                              justifyContent="center"
                              width={{ md: "100%", lg: "65%" }}
                              m={1}
                            >
                              <Grid item lg={3} md={12} sm={12} xs={12}>
                                <Typography
                                  alignItems="center"
                                  fontWeight="bold"
                                  display="flex"
                                >
                                  Reward Image :
                                </Typography>
                              </Grid>
                              <Grid item lg={8} md={12} sm={12} xs={12}>
                                <TextField
                                  fullWidth
                                  InputLabelProps={{ shrink: true }}
                                  type="file"
                                  onChange={onChange}
                                  onBlur={handleBlur}
                                  size="small"
                                  sx={{
                                    border: "1px dashed",
                                    borderColor: "primary.main",
                                  }}
                                />
                                <Grid style={{ width: "50%", height: "30%" }}>
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
                                      onClick={()=>{
                                        if (typeof cropper !== "undefined") {
                                          const crop = cropper.getCroppedCanvas().toDataURL();
                                          setCropData(crop);
                                          employee.rewardImage  = crop;
                                          setImageChanged(true)
                                        }
                                      }}
                                      fontSize="12px"
                                      width="50%"
                                      bg="primary.main"
                                      backgroundColor="primary.main"
                                      color="secondary.main"
                                      textColor="secondary.main"
                                      marginBottom="1px"
                                    />
                                  )}
                                </Grid>
                                {employee.rewardImage && (
                                  <img
                                    src={employee.rewardImage}
                                    alt="croped Image"
                                    width="70"
                                    sizes={"10vw"}
                                  />
                                )}
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              alignItems="center"
                              justifyContent="center"
                              width={{ md: "100%", lg: "65%" }}
                              m={1}
                            >
                              <Grid item lg={3} md={12} sm={12} xs={12}>
                                <Typography
                                  alignItems="center"
                                  fontWeight="bold"
                                  display="flex"
                                >
                                  Sponsorship Amount
                                  <Box color="red" component="span">
                                    {"*"}
                                  </Box>
                                  :
                                </Typography>
                              </Grid>
                              <Grid item lg={8} md={12} sm={12} xs={12}>
                                <TextField
                                  value={employee.sponsorshipAmount}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  fullWidth
                                  size="small"
                                  id={`rewardSection.${index}.sponsorshipAmount`}
                                  name={`rewardSection.${index}.sponsorshipAmount`}
                                  focused
                                  type="number"
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
                                <Grid
                                  sx={{
                                    color: "error.main",
                                    fontSize: "0.75rem",
                                  }}
                                >
                                  <ErrorMessage
                                    name={`rewardSection.${index}.sponsorshipAmount`}
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              alignItems="center"
                              justifyContent="center"
                              width={{ md: "100%", lg: "65%" }}
                              m={1}
                            >
                              <Grid item lg={3} md={12} sm={12} xs={12}>
                                <Typography
                                  alignItems="center"
                                  fontWeight="bold"
                                  display="flex"
                                >
                                  Reward Description
                                  <Box color="red" component="span">
                                    {"*"}
                                  </Box>
                                  :
                                </Typography>
                              </Grid>
                              <Grid item lg={8} md={12} sm={12} xs={12}>
                                <TextField
                                  value={employee.rewardDescription}
                                  onBlur={handleBlur}
                                  fullWidth
                                  focused
                                  onChange={handleChange}
                                  size="small"
                                  id={`rewardSection.${index}.rewardDescription`}
                                  name={`rewardSection.${index}.rewardDescription`}
                                />
                                <Grid
                                  sx={{
                                    color: "error.main",
                                    fontSize: "0.75rem",
                                  }}
                                >
                                  <ErrorMessage
                                    name={`rewardSection.${index}.rewardDescription`}
                                  />
                                </Grid>
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
                                  insert(props.data.rewardSection.length + 1, {
                                    rewardTitle: "",
                                    rewardType: "",
                                    youtubeVideoLink: "",
                                    sponsorshipAmount: "",
                                    rewardDescription: "",
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
                    onClick={() => props.prev(values)}
                    type="button"
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
                <Grid m={1}>
                  <Btn
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
                <ToastContainer />
              </Grid>
            </Form>
          )}
        </Formik>
      </Grid>
    </>
  );
};

export default Rewards;
