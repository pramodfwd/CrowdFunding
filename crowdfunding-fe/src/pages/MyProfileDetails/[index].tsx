import {
  Box,
  CardMedia,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  List,
  MenuItem,
  Radio,
  Select,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Btn from "@/components/Button/Button";
import MailIcon from "@mui/icons-material/Mail";
import LanguageIcon from "@mui/icons-material/Language";
import MuiLink from "@mui/material/Link";
import PlaceIcon from "@mui/icons-material/Place";
import Axios from "@/Axios";
import LinkIcon from "@mui/icons-material/Link";
import SocialMediaLink from "@/components/genericComponent/SocialMediaLink";
import { LinkedIn, YouTube } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const label = { inputProps: { "aria-label": "Switch demo" } };
const MyProfileDetails: React.FC = (props:any) => {
  const [selectedValue, setSelectedValue] = useState("a");
  const initialValue = props.data;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  return (
    <Grid bgcolor="secondary.contrastText">
      <Grid
        sx={{ padding: { xs: 0, sm: 0, md: 0, lg: 5 } }}
        container
        justifyContent="center"
      >
        <Grid
          container
          item={true}
          bgcolor="secondary.main"
          md={3}
          display="flex"
          alignItems="center"
          flexDirection="column"
          marginBottom={1}
        >
          <List sx={{ pt: 5 }}>
            <Grid item={true} lg={4} md={4} sm={12} xs={12}>
              <CardMedia
                component="img"
                sx={{
                  height: "150px",
                  width: "150px",
                  bgcolor: "ActiveBorder",
                }}
                image="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250"
              />
            </Grid>
            <Typography p={1} variant="h4">
              {initialValue.firstName}&nbsp;{initialValue.lastName}
            </Typography>
          </List>
          <Grid container justifyContent="center" alignItems="center">
            {initialValue.facebook ? (
              <Typography display="flex" gap={1} p={0.5}>
                <MuiLink
                  underline="none"
                  sx={{
                    color: "secondary.contrastText",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                  href="mailto:someone@example.com"
                >
                  <FacebookIcon
                    shapeRendering="circle"
                    sx={{ color: "#3b5998" }}
                  />
                </MuiLink>
              </Typography>
            ) : (
              ""
            )}
            {initialValue.instagram ? (
              <Typography display="flex" gap={1} p={0.5}>
                <MuiLink
                  underline="none"
                  sx={{
                    color: "secondary.contrastText",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                  href="mailto:someone@example.com"
                >
                  <InstagramIcon sx={{ color: " #e95950" }} />
                </MuiLink>
              </Typography>
            ) : (
              ""
            )}
            {initialValue.linkedin ? (
              <Typography display="flex" gap={1} p={0.5}>
                <MuiLink
                  underline="none"
                  sx={{
                    color: "secondary.contrastText",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                  href="mailto:someone@example.com"
                >
                  <LinkedIn sx={{ color: "#0077b5" }} />
                </MuiLink>
              </Typography>
            ) : (
              ""
            )}
            {initialValue.twitter ? (
              <Typography display="flex" gap={1} p={0.5}>
                <MuiLink
                  underline="none"
                  sx={{
                    color: "secondary.contrastText",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                  href="mailto:someone@example.com"
                >
                  <TwitterIcon sx={{ color: "#1DA1F2" }} />
                </MuiLink>
              </Typography>
            ) : (
              ""
            )}
            {initialValue.youtube ? (
              <Typography display="flex" gap={1} p={0.5}>
                <MuiLink
                  underline="none"
                  sx={{
                    color: "secondary.contrastText",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                  href="mailto:someone@example.com"
                >
                  <YouTube sx={{ color: "red" }} />
                </MuiLink>
              </Typography>
            ) : (
              ""
            )}
          </Grid>
          <Btn
            type="button"
            text="Sponsor Now"
            width="250px"
            textColor="primary.main"
            bg="primary.light"
            backgroundColor="primary.light"
          />
          <Btn
            type="button"
            text="View Sponsor Pages"
            width="250px"
            marginTop="2px"
            textColor="primary.dark"
            bg="secondary.contrastText"
            backgroundColor="secondary.contrastText"
          />
          <Grid p={2}>
            {initialValue.email ? (
              <Typography display="flex" gap={1} p={0.5}>
                <MailIcon />
                <MuiLink
                  underline="none"
                  sx={{
                    color: "secondary.contrastText",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                  href="mailto:someone@example.com"
                >
                  {initialValue.email}
                </MuiLink>
              </Typography>
            ) : (
              "tets"
            )}
            {initialValue.profileUrl ? (
              <Typography display="flex" gap={1} p={0.5}>
                <LinkIcon />
                <MuiLink
                  underline="none"
                  sx={{
                    color: "secondary.contrastText",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                  href="mailto:someone@example.com"
                >
                  {initialValue.profileUrl}
                </MuiLink>
              </Typography>
            ) : (
              ""
            )}
            {initialValue.city ? (
              <Typography display="flex" gap={1} p={0.5}>
                <PlaceIcon />
                <MuiLink
                  underline="none"
                  sx={{
                    color: "secondary.contrastText",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                  href="mailto:someone@example.com"
                >
                  {initialValue.city}
                </MuiLink>
              </Typography>
            ) : (
              ""
            )}

            {initialValue.personalWebsite ? (
              <Typography display="flex" gap={1} p={0.5}>
                <LanguageIcon />
                <MuiLink
                  underline="none"
                  sx={{
                    color: "secondary.contrastText",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                  href="mailto:someone@example.com"
                >
                  {initialValue.personalWebsite}
                </MuiLink>
              </Typography>
            ) : (
              ""
            )}
          </Grid>
        </Grid>
        <Grid
          item={true}
          container
          xs={12}
          md={9}
          sm={12}
          display="flex"
          alignItems="center"
          marginBottom={1}
        >
          <Grid
            item={true}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item={true} xs={12} sm={12} md={12}>
              <Grid
                container
                item={true}
                xs={12}
                bgcolor="secondary.main"
                gap={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Grid container item={true} xs={12}>
                  <Typography pt={3} pl={6} color="primary.dark" variant="h4">
                    Sponsor&nbsp;{initialValue.firstName}&nbsp;{initialValue.lastName}
                  </Typography>
                </Grid>

                <Grid
                  item={true}
                  xs={10}
                  sm={10}
                  md={10}
                  lg={5}
                  sx={{ width: "100%" }}
                  display="flex"
                  alignItems="center"
                >
                  <Radio
                    checked={selectedValue === "a"}
                    onChange={handleChange}
                    value="a"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                  />
                  <Typography align="center">One Time</Typography>
                  <Radio
                    checked={selectedValue === "b"}
                    onChange={handleChange}
                    value="b"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "B" }}
                  />
                  <Typography align="center">Monthly</Typography>
                </Grid>
                <Grid
                  item={true}
                  xs={10}
                  sm={10}
                  md={10}
                  lg={5}
                  sx={{ width: "100%", fontSize: "10px" }}
                >
                  <TextField
                    fullWidth
                    id="email"
                    name="email"
                    placeholder="Pay platform fee for"
                    size="small"
                    focused
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          sx={{
                            borderRight: "1px solid",
                            borderColor: "primary.main",
                            p: "20px 1px",
                            ml: -1.4,
                            bgcolor: "secondary.contrastText",
                            borderRadius: 1,
                          }}
                        >
                          <Switch {...label} defaultChecked />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid
                  item={true}
                  xs={10}
                  sm={10}
                  md={10}
                  lg={5}
                  sx={{ width: "100%" }}
                >
                  <TextField
                    fullWidth
                    id="email"
                    name="email"
                    placeholder="10"
                    size="small"
                    focused
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          sx={{
                            borderRight: "1px solid",
                            borderColor: "primary.main",
                            p: "20px 1px",
                            ml: -1.4,
                            width: 40,
                            bgcolor: "secondary.contrastText",
                            borderRadius: 1,
                          }}
                        >
                          <Typography variant="body2" ml={1}>
                            $
                          </Typography>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid
                  item={true}
                  xs={10}
                  sm={10}
                  md={10}
                  lg={5}
                  sx={{ width: "100%" }}
                >
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" focused>
                      Tip crowdfunding 5%
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Tip crowdfunding 5%"
                      size="small"
                    >
                      <MenuItem value={10}>Tip crowdfunding 0%</MenuItem>
                      <MenuItem value={20}>Tip crowdfunding 5%</MenuItem>
                      <MenuItem value={30}>Tip crowdfunding 15%</MenuItem>
                      <MenuItem value={30}>Tip crowdfunding 30%</MenuItem>
                      <MenuItem value={30}>Tip crowdfunding 45%</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid
                  item={true}
                  xs={10}
                  sm={10}
                  md={10}
                  lg={5}
                  sx={{ width: "100%" }}
                >
                  <TextField
                    sx={{ width: "100%" }}
                    color="primary"
                    name="message"
                    placeholder="Message"
                    focused
                    multiline
                    rows={5}
                  />
                </Grid>
                <Grid
                  item={true}
                  xs={10}
                  sm={10}
                  md={10}
                  lg={5}
                  sx={{ width: "100%" }}
                >
                  <Typography
                    align="center"
                    fontWeight={550}
                    variant="subtitle2"
                  >
                    Sponsorship: $10.00
                  </Typography>
                  <Typography
                    align="center"
                    fontWeight={550}
                    variant="subtitle2"
                  >
                    Fee + Tip: $1.00
                  </Typography>
                  <Typography
                    align="center"
                    fontWeight={550}
                    variant="subtitle2"
                  >
                    Total: $ 11.00
                  </Typography>
                </Grid>
                <Grid
                  item={true}
                  xs={10}
                  sm={10}
                  md={10}
                  lg={5}
                  sx={{ width: "100%" }}
                >
                  <TextField
                    fullWidth
                    id="email"
                    name="email"
                    size="small"
                    placeholder="Share your contact with"
                    focused
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          sx={{
                            borderRight: "1px solid",
                            borderColor: "primary.main",
                            p: "20px 1px",
                            ml: -1.4,
                            bgcolor: "secondary.contrastText",
                            borderRadius: 1,
                          }}
                        >
                          <Switch {...label} defaultChecked />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid
                  item={true}
                  xs={10}
                  sm={10}
                  md={10}
                  lg={5}
                  mb="20px"
                  sx={{ width: "100%" }}
                >
                  <Btn
                    type="button"
                    text="Sponsor Now"
                    width="100%"
                    textColor="secondary.main"
                    bg="primary.main"
                    backgroundColor="primary.main"
                    height="70px"
                    fontSize="18px"
                  />
                  <Grid
                    container
                    item={true}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Box display="flex">
                      SHARE THIS:
                      <SocialMediaLink />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item={true}
                bgcolor="secondary.main"
                xs={12}
                sm={12}
                md={12}
                height={200}
                sx={{
                  height: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
                }}
              >
                <Grid container justifyContent="left" alignItems="left">
                  <Typography p={1} variant="subtitle2">
                    Mini Bio:
                  </Typography>
                </Grid>
                <Typography variant="body1" p={1}>
                  {initialValue.miniBio}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export const getServerSideProps = async (context:any) => {
  const id = context.query.index
  try {
    const response = await Axios.get(`/feature-profile/${id}`);
    const data = response.data.profileDetail;
  return {
    props: { data: data }
  } 
  } catch (error) {
    return {
      props: { data: [] }
    } 
  }
  }

export default MyProfileDetails;
