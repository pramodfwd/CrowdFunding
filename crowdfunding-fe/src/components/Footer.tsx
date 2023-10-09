import LanguageIcon from "@mui/icons-material/Language";
import MailIcon from "@mui/icons-material/Mail";
import MuiLink from "@mui/material/Link";
import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import SocialMediaLink from "./genericComponent/SocialMediaLink";
import Footerlink from "./genericComponent/Search";
import { useFormik } from "formik";
import { JoinOurNewsletter } from "@/Schemas";

const initialValues = {
    email: "",
}

const Footer = () => {
    const { handleBlur, handleChange, values, errors, touched, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: JoinOurNewsletter,

        onSubmit: (values, action) => {
            action.resetForm();
        }
    })
    return (
        <Container>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <Box borderRadius={2} p={3}>
                        <Container component="main" >
                            <Typography color="primary" variant="h4" component="h6">
                                CrowdFundingFe </Typography>
                            <Typography color="primary" component="h1">
                                We believe the best way to support girls and women is with direct deposits.
                            </Typography>
                            <Typography display='flex'>
                                <MailIcon />
                                <MuiLink color="primary" href="mailto:someone@example.com" >
                                    mailto:someone@example.com   </MuiLink>
                            </Typography>
                            <Typography display='flex'>
                                <LanguageIcon />
                                <MuiLink color="primary" href="mailto:someone@example.com" >
                                    Build Your Network with City Girls Big Dreams      </MuiLink>
                            </Typography>
                            <Typography>
                                <SocialMediaLink />
                            </Typography>
                            <Typography
                                color="primary"
                                variant="h6"
                                component="h1"
                                gutterBottom
                            >
                                Download Mobile App
                            </Typography>
                            <Button variant="contained">Play Store</Button>
                        </Container>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <Box borderRadius={2} p={3}>
                        <Container
                            component="main"
                        >
                            <Typography color="primary" variant="h5" component="h1" gutterBottom>
                                Start Now
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                    <Footerlink text="Search" to='search' />
                                    <Footerlink text="Start" to='start' />
                                    <Footerlink text="Events" to='events' />
                                    <Footerlink text="Contact Us" to='contact' />
                                    <Footerlink text="Join/Login" to='join' />
                                </Grid>
                            </Typography>
                            <Typography color="primary" variant="h5" component="h1" gutterBottom>
                                Information
                            </Typography>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Footerlink text="About us" to='AboutUs' />
                                <Footerlink text="Supported countries" to='Supported' />
                                <Footerlink text="Blog" to='Blog' />
                                <Footerlink text="How it works" to='How' />
                                <Footerlink text="Jobs & Internship" to='Jobs' />
                                <Footerlink text="Help Center" to='Help' />
                                <Footerlink text="Press Center" to='Press' />
                                <Footerlink text="Privacy Policy" to='privacy' />
                                <Footerlink text="Terms of Use" to='Term' />
                            </Grid>
                            <Typography variant="h5" component="h2" gutterBottom>
                            </Typography>
                        </Container>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <Box p={3} borderRadius={2} >
                        <Container
                            component="form"
                            onSubmit={handleSubmit}
                        >
                            <Typography
                                color="primary"
                                variant="h5"
                                component="h1"
                                gutterBottom
                            >
                                Join Our Newsletter
                            </Typography>  
                                <Typography variant="h5" component="h2" gutterBottom >
                                    <TextField
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        name="email"
                                        type="email"
                                        size="small"
                                        label="Enter your email address"
                                        error={Boolean(errors.email && touched.email)}
                                        helperText={errors.email && touched.email ? errors.email : null}
                                    />
                                  </Typography>
                                <Button  type="submit" sx={{
                                    backgroundColor: 'primary.main', color: "secondary.main",
                                    "&:hover": {
                                        color: 'primary.main',
                                        backgroundColor: 'secondary.main',
                                    }
                                }}
                                    variant="contained">
                                    Subscribe Now
                                </Button>
                        </Container>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Footer;
