import {
  Box,
  Button,
  CardMedia,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import SideBar from "./Sidebar";
import Btn from "@/components/Button/Button";
import { loginStatus } from "Redux/IsloginSlice";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { myProfileSchema } from "@/Schemas";
import Axios from "@/Axios";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

export interface InitialState {
  image: string;
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  zip: number;
  phone: number;
  email: string;
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
  youtube: string;
  tiktok: string;
  whatsapp: string;
  twitch: string;
  youtubeVideoUrl: string;
  personalWebsite: string;
  profileUrl: string;
  miniBio: string;
}

const MyProfiles: React.FC<InitialState> = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [initialValue, setInitialValue] = useState<any>({});
  const inputRef: any = useRef(null);
  const [base64Image, setBase64Image] = useState<any>("");
  const getData = async () => {
    try {
      const response = await Axios.get("/profile");
      const allData = response.data.profile;
      setInitialValue(allData);
      setBase64Image(allData.image);
    } catch (error) {
      console.error("Error fetching data:", error);
      // router.push("/login");
      router.push('/login', undefined, { shallow: true });
      dispatch(loginStatus(false));
    }
  };
  useEffect(() => {
    getData();
  }, []);

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

  const {
    handleBlur,
    handleChange,
    values,
    touched,
    errors,
    handleSubmit,
  }: any = useFormik({
    enableReinitialize: true,
    initialValues: initialValue,
    validationSchema: myProfileSchema,

      onSubmit: async (values, action) => {
        try {
          const response = await Axios.patch("/profile", {
            image: base64Image,
            firstName: values.firstName,
            lastName: values.lastName,
            street: values.street,
            city: values.city,
            state: values.state,
            zip: values.zip,
            phone: values.phone,
            email: values.email,
            facebook: values.facebook,
            twitter: values.twitter,
            instagram: values.instagram,
            linkedin: values.linkedin,
            youtube: values.youtube,
            tiktok: values.tiktok,
            whatsapp: values.whatsapp,
            twitch: values.twitch,
            youtubeVideoUrl: values.youtubeVideoUrl,
            personalWebsite: values.personalWebsite,
            profileUrl: values.profileUrl,
            miniBio: values.miniBio,
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
      },
    });

  return (
    <Grid bgcolor="secondary.contrastText">
      <Grid
        item={true}
        sx={{ padding: { xs: 0, sm: 0, md: 0, lg: 3 } }}
        container
        justifyContent="center"
      >
        <SideBar />
        <Grid
          item={true}
          flexDirection="column"
          display="flex"
          alignItems="center"
          justifyContent="flexStart"
          sx={{
            margin: { xs: "15px", sm: "15px", md: "8px 15px", lg: "8px 15px" },
          }}
          bgcolor="secondary.main"
          xs={12}
          sm={12}
          md={9}
          component="form"
          onSubmit={handleSubmit}
        >
          <Grid
            item={true}
            width="100%"
            borderBottom="2px solid"
            borderColor="secondary.contrastText"
            display="flex"
            justifyContent="space-between"
          >
            <Typography fontWeight={500} variant="h4" p={1}>
              MY PROFILE
            </Typography>
            <Link href={`/MyProfileDetails/${values._id}`} legacyBehavior>
            <Typography p={1} color="primary.main" variant="body2"  sx={{
                    cursor: "pointer",
                    "&:hover": { color: "primary.dark" },
                  }}>
              View my public profile
            </Typography>
            </Link>
          </Grid>
          <Grid
            container
            justifyContent="center"
            width="100%"
            borderBottom="1px solid"
            borderColor="secondary.contrastText"
          >
            <Box
              sx={{
                minHeight: 140,
                width: { xs: 140, sm: 140, md: 140, lg: 140 },
                margin: { xs: 1, sm: 1, md: 1 },
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  height: 140,
                  borderRadius: "50%",
                  border: "2px solid",
                  borderColor: "secondary.contrastText",
                }}
                image={base64Image}
              ></CardMedia>
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
                  component="label"
                  color="primary"
                  sx={{ fontSize: "9px" }}
                  onClick={() => {
                    inputRef.current.click();
                  }}
                >
                  Change Profile
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid
            item={true}
            container
            sx={{ margin: "30px 0px" }}
            alignItems="center"
            justifyContent="center"
            borderBottom="1px solid"
            borderColor="secondary.contrastText"
          >
            <Box
              sx={{
                width: { xs: 300, sm: 300, md: 300, lg: 400 },
              }}
            >
              <Typography align="center" variant="body2" lineHeight={1}>
                Create monthly rewards for your profile
              </Typography>
              <br></br>
              <Box component="div" sx={{ textAlign: "center" }}>
                <Btn
                  href="/start"
                  text="New Reward"
                  variant="outlined"
                  borderRadius="50px"
                  fontSize="20px"
                  textTransform="capitalize"
                  color="primary.main"
                  backgroundColor="secondary.main"
                  bg="primary.main"
                  textColor="secondary.main"
                />
              </Box>
            </Box>
          </Grid>
          <Grid item={true}>
            <Grid
              container
              justifyContent="center"
              spacing={1.5}
              lineHeight={3}
            >
              <Grid item xs={12} sm={5.5} md={5}>
                <Typography variant="body1">First Name</Typography>
                <TextField
                  fullWidth
                  size="small"
                  color="primary"
                  focused
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(errors.firstName && touched.firstName)}
                  helperText={
                    errors.firstName && touched.firstName
                      ? errors.firstName
                      : null
                  }
                  name="firstName"
                  placeholder="First Name"
                  id="firstname"
                />
              </Grid>
              <Grid item xs={12} sm={5.5} md={5}>
                <Typography variant="body1">Last Name</Typography>
                <TextField
                  fullWidth
                  size="small"
                  color="primary"
                  focused
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(errors.lastName && touched.lastName)}
                  helperText={
                    errors.lastName && touched.lastName ? errors.lastName : null
                  }
                  name="lastName"
                  placeholder="Last Name"
                  id="lastName"
                />
              </Grid>
              <Grid item xs={12} sm={5.5} md={5}>
                <Typography variant="body1">Street</Typography>
                <TextField
                  fullWidth
                  size="small"
                  color="primary"
                  focused
                  name="street"
                  placeholder="Street"
                  id="Street"
                  value={values.street}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(errors.street && touched.street)}
                  helperText={
                    errors.street && touched.street ? errors.street : null
                  }
                />
              </Grid>
              <Grid item xs={12} sm={5.5} md={5}>
                <Typography variant="body1">City</Typography>
                <TextField
                  fullWidth
                  size="small"
                  color="primary"
                  focused
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(errors.city && touched.city)}
                  helperText={errors.city && touched.city ? errors.city : null}
                  name="city"
                  placeholder="City"
                  id="City"
                />
              </Grid>
              <Grid item xs={12} sm={5.5} md={5}>
                <Typography variant="body1">State</Typography>
                <TextField
                  fullWidth
                  size="small"
                  color="primary"
                  focused
                  value={values.state}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(errors.state && touched.state)}
                  helperText={
                    errors.state && touched.state ? errors.state : null
                  }
                  name="state"
                  placeholder="State"
                  id="State"
                />
              </Grid>
              <Grid item xs={12} sm={5.5} md={5}>
                <Typography variant="body1">Zip</Typography>
                <TextField
                  fullWidth
                  size="small"
                  color="primary"
                  focused
                  value={values.zip}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(errors.zip && touched.zip)}
                  helperText={errors.zip && touched.zip ? errors.zip : null}
                  name="zip"
                  placeholder="XXXXX"
                  id="Zip"
                />
              </Grid>
              <Grid item xs={12} sm={5.5} md={5}>
                <Typography variant="body1">Phone</Typography>
                <TextField
                  fullWidth
                  size="small"
                  color="primary"
                  focused
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(errors.phone && touched.phone)}
                  helperText={
                    errors.phone && touched.phone ? errors.phone : null
                  }
                  name="phone"
                  placeholder="+91 xxx-xxx-xxx"
                  id="Phone"
                />
              </Grid>
              <Grid item xs={12} sm={5.5} md={5}>
                <Typography variant="body1">Email</Typography>
                <TextField
                  fullWidth
                  size="small"
                  color="primary"
                  focused
                  name="email"
                  placeholder="xyz@gmail.com"
                  id="Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(errors.email && touched.email)}
                  helperText={
                    errors.email && touched.email ? errors.email : null
                  }
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={5.5} md={5}>
                <Typography variant="body1">Facebook</Typography>
                <TextField
                  fullWidth
                  size="small"
                  color="primary"
                  focused
                  value={values.facebook}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(errors.facebook && touched.facebook)}
                  helperText={
                    errors.facebook && touched.facebook ? errors.facebook : null
                  }
                  name="facebook"
                  placeholder="xxxxxxxx"
                  id="Facebook"
                />
              </Grid>
              <Grid item xs={12} sm={5.5} md={5}>
                <Typography variant="body1">Twitter</Typography>
                <TextField
                  fullWidth
                  size="small"
                  color="primary"
                  focused
                  value={values.twitter}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(errors.twitter && touched.twitter)}
                  helperText={
                    errors.twitter && touched.twitter ? errors.twitter : null
                  }
                  name="twitter"
                  placeholder="xxxxxxxx"
                  id="Twitter"
                />
              </Grid>
              <Grid item xs={12} sm={5.5} md={5}>
                <Typography variant="body1">Instagram</Typography>
                <TextField
                  fullWidth
                  size="small"
                  color="primary"
                  focused
                  value={values.instagram}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(errors.instagram && touched.instagram)}
                  helperText={
                    errors.instagram && touched.instagram
                      ? errors.instagram
                      : null
                  }
                  name="instagram"
                  placeholder="xxxxxxxx"
                  id="Instagram"
                />
              </Grid>
              <Grid item xs={12} sm={5.5} md={5}>
                <Typography variant="body1">Linkedin</Typography>
                <TextField
                  fullWidth
                  size="small"
                  color="primary"
                  focused
                  value={values.linkedin}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(errors.linkedin && touched.linkedin)}
                  helperText={
                    errors.linkedin && touched.linkedin ? errors.linkedin : null
                  }
                  name="linkedin"
                  placeholder="xxxxxxxx"
                  id="Linkedin"
                />
              </Grid>
              <Grid item xs={12} sm={5.5} md={5}>
                <Typography variant="body1">Youtube</Typography>
                <TextField
                  fullWidth
                  size="small"
                  color="primary"
                  focused
                  value={values.youtube}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(errors.youtube && touched.youtube)}
                  helperText={
                    errors.youtube && touched.youtube ? errors.youtube : null
                  }
                  name="youtube"
                  placeholder="xxxxxxxx"
                  id="Youtube"
                />
              </Grid>
              <Grid item xs={12} sm={5.5} md={5}>
                <Typography variant="body1">Tiktok</Typography>
                <TextField
                  fullWidth
                  size="small"
                  color="primary"
                  focused
                  value={values.tiktok}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(errors.tiktok && touched.tiktok)}
                  helperText={
                    errors.tiktok && touched.tiktok ? errors.tiktok : null
                  }
                  name="tiktok"
                  placeholder="xxxxxxxx"
                  id="Tiktok"
                />
              </Grid>
              <Grid item xs={12} sm={5.5} md={5}>
                <Typography variant="body1">Whatsapp</Typography>
                <TextField
                  fullWidth
                  size="small"
                  color="primary"
                  focused
                  value={values.whatsapp}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(errors.whatsapp && touched.whatsapp)}
                  helperText={
                    errors.whatsapp && touched.whatsapp ? errors.whatsapp : null
                  }
                  name="whatsapp"
                  placeholder="xxxxxxxx"
                  id="whatsapp"
                />
              </Grid>
              <Grid item xs={12} sm={5.5} md={5}>
                <Typography variant="body1">Twitch</Typography>
                <TextField
                  fullWidth
                  size="small"
                  color="primary"
                  focused
                  value={values.twitch}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(errors.twitch && touched.twitch)}
                  helperText={
                    errors.twitch && touched.twitch ? errors.twitch : null
                  }
                  name="twitch"
                  placeholder="xxxxxxxx"
                  id="Twitch"
                />
              </Grid>
              <Grid item xs={12} sm={5.5} md={5}>
                <Typography variant="body1">Youtube Video Url</Typography>
                <TextField
                  fullWidth
                  size="small"
                  color="primary"
                  focused
                  value={values.youtubeVideoUrl}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(
                    errors.youtubeVideoUrl && touched.youtubeVideoUrl
                  )}
                  helperText={
                    errors.youtubeVideoUrl && touched.youtubeVideoUrl
                      ? errors.youtubeVideoUrl
                      : null
                  }
                  name="youtubeVideoUrl"
                  placeholder="xxxxxxxx"
                  id="youtubeVideoUrl"
                />
              </Grid>
              <Grid item xs={12} sm={5.5} md={5}>
                <Typography variant="body1">Personal Website</Typography>
                <TextField
                  fullWidth
                  size="small"
                  color="primary"
                  focused
                  value={values.personalWebsite}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(
                    errors.personalWebsite && touched.personalWebsite
                  )}
                  helperText={
                    errors.personalWebsite && touched.personalWebsite
                      ? errors.personalWebsite
                      : null
                  }
                  name="personalWebsite"
                  placeholder="https://www.xyz.com"
                  id="personalWebsite"
                />
              </Grid>
              <Grid item xs={12} sm={5.5} md={5}>
                <Typography variant="body1">Profile Url</Typography>
                <TextField
                  fullWidth
                  size="small"
                  color="primary"
                  focused
                  value={values.profileUrl}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(errors.profileUrl && touched.profileUrl)}
                  helperText={
                    errors.profileUrl && touched.profileUrl
                      ? errors.profileUrl
                      : null
                  }
                  name="profileUrl"
                  placeholder="Profile Url"
                  id="profileUrl"
                />
              </Grid>
              <Grid item xs={12} sm={5.5} md={10}>
                <Typography variant="body1">
                  Mini Bio (500 characters)
                </Typography>
                <TextField
                  fullWidth
                  size="small"
                  color="primary"
                  focused
                  multiline
                  rows={5}
                  value={values.miniBio}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(errors.miniBio && touched.miniBio)}
                  helperText={
                    errors.miniBio && touched.miniBio ? errors.miniBio : null
                  }
                  name="miniBio"
                  placeholder="Enter Mini Bio "
                  id="miniBio"
                />
              </Grid>
            </Grid>
            <Grid
              item={true}
              display="flex"
              justifyContent="center"
              xs={12}
              sm={12}
              md={8}
              lg={8}
            >
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="I would like to appear on the Profile List page to find more sponsors."
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="I want to receive news from GoFundHer via email."
                />
              </FormGroup>
            </Grid>
            <Box component="div" sx={{ textAlign: "center" }}>
              <Btn
                type="submit"
                text="Update"
                width="20%"
                variant="outlined"
                borderRadius="30px"
                fontSize="20px"
                textTransform="capitalize"
                color="primary.main"
                backgroundColor="secondary.main"
                bg="primary.main"
                textColor="secondary.main"
              />
              <ToastContainer />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MyProfiles;