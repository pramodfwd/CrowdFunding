import { loginSponsors } from '@/Schemas';
import { Box, Button, Card, CardMedia, Container, Grid, Paper, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { useFormik } from 'formik';
import React, { useState } from 'react'

const initialValues = {
  name: "",
  email: "",
  message: "",
}

const Sponsors = () => {
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);
  const [isShown5, setIsShown5] = useState(false);
  const { handleBlur, handleChange, values, errors, touched, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: loginSponsors,

    onSubmit: (values, action) => {
      action.resetForm();
    }
  })
  function scrollToSponsorSection() {
    const sectionTwo: any = document.getElementById('SponsorSection');
    sectionTwo.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <Container sx={{textAlign: 'justify'}} >
      <Typography mt={13} mb={1} variant="h4">Check Out Our Sponsors:</Typography>
      <Typography pb={2} variant="h4" sx={{wordSpacing:0.5, lineHeight:1.4}} gutterBottom>
        Simple Retro and GoFundHer Join Forces to Empower Female Entrepreneurs
      </Typography><br />
      <Grid container sx={{height:{ xs: "400px", sm: "400px", md: "460px", lg: "550px"} }}>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/TxbE79-1OSI" title="YouTube video player" />
      </Grid>
      <Grid container justifyContent="center"  >
        <Typography variant="body1" gutterBottom lineHeight={1.5} pt={5} pb={2} >New York, NY, May 2021 –
          New York City-based womenswear brand, Simple Retro, is pleased to announce its latest
          partnership with City Girls Big Dreams INC and GoFundHer.com, a digital financial platform
          empowering women
          to connect with sponsors worldwide to help turn their dreams into reality.</Typography>
      </Grid >
      <Grid >
        <Typography variant="body1" gutterBottom lineHeight={1.5} pb={4} >On a mission to empower women,
          Simple Retro has teamed up with GoFundHer and City Girls Big Dreams INC to showcase
          the inspiring women on the platform through a campaign shot in New York City. A diverse group
          of eight women with bold ideas for the future are spotlighted in the campaign debuting the latest
          release from Simple Retro’s spring collection. Simple Retro will also be sponsoring ten of GoFundHer’s
          female leaders across the country, helping them to dress for success as they prepare
          to present their ideas to potential investors through the platform.
        </Typography>
      </Grid><br />
      <Grid container justifyContent="center">
      <Card
          sx={{
            width: { xs: 360, sm: 200, md: 250, lg: 350 },
            margin: 1.5,
          }}>
          <CardMedia
            component="img"
            sx={{height:{ xs: "25em", sm: "20em", md: "28em", lg: "31em" }}}
            image="https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"
          />
        </Card>
        <Card
          sx={{
            width: { xs: 360, sm: 200, md: 250, lg: 350 },
            margin: 1.5,
          }}>
          <CardMedia
            component="img"
            sx={{height:{ xs: "25em", sm: "20em", md: "28em", lg: "31em" }}}
            image="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250"
          />
        </Card>
        <Card
          sx={{
            width: { xs: 360, sm: 200, md: 250, lg: 350 },
            margin: 1.5,
          }}>
          <CardMedia
            component="img"
            sx={{height:{ xs: "25em", sm: "20em", md: "28em", lg: "31em" }}}
            image="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
          />
        </Card>
      </Grid ><br /><br />
      <Grid >
        <Typography variant="body1" gutterBottom lineHeight={1.5} pb={4} > With a shared
          mission to empower women and eliminate inequality, Simple Retro and GoFundHer will
          be hosting a virtual event on June 18th, 2021 to celebrate GoFundHer’s 2-year anniversary.
          The event will take place on Zoom, inviting female entrepreneurs from across the country to
          connect and creating a supportive atmosphere for exchanging ideas for a brighter future.
          The event will be open to guests interested in supporting the GoFundHer campaigns, giving
          potential donors deeper insight into the visions these female leaders have and how they hope
          to use funds raised through the platform to build a better tomorrow.<br /><br />
          As a woman-owned business, Simple Retro seeks to empower women universally with an inclusive approach
          to design, offering timeless garments at an attainable price point. Aiming to create a wardrobe that
          allows for self-expression, Simple Retro strives to broaden their vision by incorporating diverse
          perspectives of women throughout the design process.<br /><br />
          “Real empowerment starts by enhancing the confidence of female entrepreneurs and this begins with the
          bank account,” says Tracy Garley, CEO of GoFundHer.com and founder of City Girls Big Dreams.
          “We believe the best way to support women-owned businesses is through direct deposit – if you
          believe in her, go fund her.”<br /><br />
          Those interested in joining the GoFundHer X CityGirlsBigDreams 2 Year Anniversary Celebration
          on June 18th 2021, can request access by RSVPing to Info@GoFundHer.com or visiting CityGirlsBigDreams.com.
        </Typography>
      </Grid>
      <Grid>
        <Paper elevation={1}>
          <CardMedia
            component="img"
            sx={{ height: { xs: 250, sm: 450, md: 450, lg: 640 } }}
            image="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202206/istockphoto-1282691087-170667a-sixteen_nine.jpg?size=948:533"
          />
        </Paper>
      </Grid >
      <Grid >
        <Typography component='div' variant="body1" gutterBottom lineHeight={1.5} pb={4} >
          <br /><Box component="span" fontWeight='bold'>About Simple Retro:</Box> <br /> <br />
          On a mission to deliver fresh designs inspired by iconic vintage silhouettes, Simple Retro is a
          female-founded business launched in 2015 to bring some of the most sought after classic styles
          to women around the globe at an attainable price point. Seeking inspiration from decades passed,
          Simple Retro explores the history of fashion, carefully curating design concepts that revisit the
          most popular style periods with each weekly-released capsule collection.
          Simple Retro’s design ethos focuses on creating pieces that are effortless and which transcend
          seasonal trends, fitting seamlessly within any modern wardrobe. As a woman-owned brand, Simple Retro
          seeks to empower women universally with a deep commitment to a price-inclusive approach when creating
          the brand’s timeless designs.<br /><br />
          <Typography align='center'>
            For more information on Simple Retro, please visit  <Box component="span" color='primary.main'  > www.SimpleRetro.com</Box>.
          </Typography>
          <br /><br /><Box component="span" fontWeight='bold'>About City Girls Big Dreams:</Box> <br /> <br />
          City Girls Big Dreams is a holistic social networking platform designed to build up and validate
          girls and women. The platform was created to enlighten, empower, and inspire women’s dreams to come true.
          City Girls Big Dreams, in partnership with GoFundHer.com, combines the best of financial sponsorship with
          a powerful mentoring ecosystem. The sister organizations allow users gain knowledge and live more fulfilling,
          financially sound lives.<br /><br />
          <Typography align='center'>
            For more information on City Girls Big Dreams, please visit <Box component="span" color='primary.main'  > www.CityGirlsBigDreams.com</Box>.
          </Typography>
        </Typography>
        <Box
          justifyContent='center'
          alignItems="center"
          display='flex'
          id="SponsorSection"
        >
          <Stack
            component="form"
            alignItems='center'
            onSubmit={handleSubmit}
            sx={{ width: { xs: '100%', sm: '80%', md: '65%', lg: '55%' }, mt: 2 }}
          >
            <Typography component='h4' pb={1} mt={4} variant='h3' align='center' color='primary.main' > Become a Yearly Sponsor</Typography>
            <TextField
              sx={{ width: '100%', mt: 2 }}
              color='primary'
              focused
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              name="name"
              placeholder='Name'
              error={Boolean(errors.name && touched.name)}
              helperText={errors.name && touched.name ? errors.name : null}
            />
            <TextField
              sx={{ width: '100%', mt: 2 }}
              color='primary'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              name="email"
              placeholder='Email Address'
              focused
              error={Boolean(errors.email && touched.email)}
              helperText={errors.email && touched.email ? errors.email : null}
            />
            <TextField
              sx={{ width: '100%', mt: 2 }}
              color='primary'
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              name="message"
              placeholder='Message'
              focused
              error={Boolean(errors.message && touched.message)}
              helperText={errors.message && touched.message ? errors.message : null}
              multiline
              rows={5}
            />
            <Button
              type="submit"
              sx={{ mt: 2, borderRadius: 7, color: "secondary.main", p: 1, width: { xs: '30%', sm: '20%', md: '20%', lg: '20%' }, "&:hover": { backgroundColor: 'primary.main' } }}
              variant="contained"
              color="primary" >
              Send
            </Button>
          </Stack>
        </Box>
      </Grid>
      <Stack alignItems='center' mt={3}>
        <Typography component='div' onClick={() => setIsShown1(!isShown1)}
          sx={{
            width: { xs: '100%', sm: '95%', md: '80%', lg: '85%' }, mb: 3, p: 1, cursor: 'pointer', color: 'primary.main', backgroundColor: 'secondary.light',
            "&:hover": {
              backgroundColor: 'primary.main', color: 'secondary.main',
            }
          }}
        >
          <Typography component="span" variant='h5'>$ 5,000,000+ Yearly</Typography>
        </Typography>
        {isShown1 ? (
          <Typography align='center' mb={3}
            sx={{ color: 'primary.main' }}
          >
            <Typography onClick={scrollToSponsorSection} component="span" sx={{ cursor: 'pointer' }} variant='h4'>  &gt;  Contact Us</Typography>
          </Typography>
        ) : ""}
        <Typography onClick={() => setIsShown2(!isShown2)}
          sx={{
            width: { xs: '100%', sm: '95%', md: '80%', lg: '85%' }, mb: 3, p: 1, cursor: 'pointer', color: 'primary.main', backgroundColor: 'secondary.light',
            "&:hover": {
              backgroundColor: 'primary.main', color: 'secondary.main',
            }
          }}
        >
          <Typography component="span" variant='h5'>$ 1,000,000+ Yearly</Typography>
        </Typography>
        {isShown2 ? (
          <Typography align='center' mb={3}
            sx={{ color: 'primary.main' }}
          >
            <Typography onClick={scrollToSponsorSection} component="span" sx={{ cursor: 'pointer' }} variant='h4'>  &gt;  Contact Us</Typography>
          </Typography>
        ) : " "}
        <Typography onClick={() => setIsShown3(!isShown3)}
          sx={{
            width: { xs: '100%', sm: '95%', md: '80%', lg: '85%' }, mb: 3, p: 1, cursor: 'pointer', color: 'primary.main', backgroundColor: 'secondary.light',
            "&:hover": {
              backgroundColor: 'primary.main', color: 'secondary.main',
            }
          }}
        >
          <Typography component="span" variant='h5'>$ 500,000+ Yearly</Typography>
        </Typography>
        {isShown3 ? (
          <Typography align='center' mb={3}
            sx={{ color: 'primary.main' }}
          >
            <Typography onClick={scrollToSponsorSection} component="span" sx={{ cursor: 'pointer' }} variant='h4'>  &gt;  Contact Us</Typography>
          </Typography>
        ) : " "}
        <Typography onClick={() => setIsShown4(!isShown4)}
          sx={{
            width: { xs: '100%', sm: '95%', md: '80%', lg: '85%' }, mb: 3, p: 1, cursor: 'pointer', color: 'primary.main', backgroundColor: 'secondary.light',
            "&:hover": {
              backgroundColor: 'primary.main', color: 'secondary.main',
            }
          }}
        >
          <Typography component="span" variant='h5'>$ 250,000+ Yearly</Typography>
        </Typography>
        {isShown4 ? (
          <Typography align='center' mb={3}
            sx={{ color: 'primary.main' }}
          >
            <Typography onClick={scrollToSponsorSection} component="span" sx={{ cursor: 'pointer' }} variant='h4'>  &gt;  Contact Us</Typography>
          </Typography>
        ) : " "}
        <Typography onClick={() => setIsShown5(!isShown5)}
          sx={{
            width: { xs: '100%', sm: '95%', md: '80%', lg: '85%' }, mb: 3, p: 1, cursor: 'pointer', color: 'primary.main', backgroundColor: 'secondary.light',
            "&:hover": {
              backgroundColor: 'primary.main', color: 'secondary.main',
            }
          }}
        >
          <Typography component="span" variant='h5'>$ 100,000+ Yearly</Typography>
        </Typography>
        {isShown5 ? (
          <Typography align='center' mb={3}
            sx={{ color: 'primary.main' }}
          >
            <Typography onClick={scrollToSponsorSection} component="span" sx={{ cursor: 'pointer' }} variant='h4'>  &gt;  Contact Us</Typography>
          </Typography>
        ) : " "}
      </Stack>
    </Container>
  );
}

export default Sponsors