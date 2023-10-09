import {
  Avatar,
  Box,
  CardMedia,
  Grid,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Tab from "@mui/material/Tab";
import Btn from "@/components/Button/Button";
import SocialMediaLink from "@/components/genericComponent/SocialMediaLink";
import Link from "next/link";
import { LinearProgressWithLabel } from "@/components/SponsorPageMax";
import VideocamIcon from "@mui/icons-material/Videocam";
import CollectionsIcon from "@mui/icons-material/Collections";
import PlaceIcon from "@mui/icons-material/Place";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PersonIcon from "@mui/icons-material/Person";
import LanguageIcon from "@mui/icons-material/Language";
import UpdateIcon from "@mui/icons-material/Update";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Axios from "@/Axios";
import { useRouter } from "next/router";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const MySponsorPageDetails: React.FC = (props:any) => {
  const [value, setValue] = React.useState(0);
  const initialValue = props.data;
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChangeAccordion =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Grid
      container
      sx={{ padding: { xs: 1, sm: 1, md: 7, lg: 7 } }}
      justifyContent="space-between"
      display="flex"
    >
      <Grid
        container
        item={true}
        lg={7.9}
        md={12}
        sm={12}
        xs={12}
        sx={{ boxShadow: 2 }}
      >
        <Typography variant="h2" fontWeight={800} color="primary.main">
          {initialValue?.sponsorSearchData?.sponsorPageName}
        </Typography>
        <Grid container item={true} mt={1} gap={2}>
          <Grid item={true} display="flex">
            <PersonIcon />
            <Typography
              variant="body2"
              fontWeight={600}
              color="primary.main"
              sx={{ cursor: "pointer" }}
            >
              {initialValue?.sponsorSearchData?.sponsorPageLocation}
            </Typography>
          </Grid>
          |
          <Grid item={true} display="flex">
            <LocalOfferIcon />
            <Typography fontWeight={600} variant="body2">
              {initialValue?.sponsorSearchData?.sponsorPageCategory}
            </Typography>
          </Grid>
          |
          <Grid display="flex" item={true}>
            <PlaceIcon />
            <Typography fontWeight={600} variant="body2">
            {initialValue?.sponsorSearchData?.sponsorPageLocation}
            </Typography>
          </Grid>
        </Grid>
        <Grid container item={true} mt={3} justifyContent="space-between">
          <Grid
            item={true}
            borderBottom="2px solid "
            borderColor="primary.main"
            mt={3}
            textAlign="center"
            xs={6}
            sm={2}
          >
            <Link href="/SponsorFaq" legacyBehavior>
              <Box
                sx={{ color: "primary.main", cursor: "pointer" }}
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={0.5}
              >
                <CollectionsIcon />
                <Typography variant="h4">Image</Typography>
              </Box>
            </Link>
          </Grid>
          <Box mt={1} display="flex">
            SHARE THIS:
            <SocialMediaLink />
          </Box>
        </Grid>
        <Grid item={true} lg={12} md={12} sm={12} xs={12} mt={1}>
          <CardMedia
            component="img"
            sx={{
              height: "500px",
              width: "100%",
              bgcolor: "ActiveBorder",
            }}
            image={initialValue?.sponsorSearchData?.uploadImage}
          />
        </Grid>
        <Grid
          item={true}
          borderBottom="2px solid "
          borderColor="primary.main"
          mt={3}
          textAlign="center"
          xs={6}
          sm={2}
        >
          <Link href="/SponsorFaq" legacyBehavior>
            <Box
              sx={{ color: "primary.main", cursor: "pointer" }}
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap={0.5}
            >
              <VideocamIcon />
              <Typography variant="h4"> Video</Typography>
            </Box>
          </Link>
        </Grid>
        <Grid item={true} lg={12} md={12} sm={12} xs={12} mt={1}>
          <iframe
            width="100%"
            height="500px"
            src={initialValue?.sponsorSearchData?.videoUrl}
            title="YouTube video player"
          />
        </Grid>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                icon={<LanguageIcon />}
                iconPosition="start"
                sx={{
                  fontSize: { xs: "14px", sm: "16px", md: "20px", lg: "24px" },
                  fontWeight: "600",
                }}
                label="About"
                {...a11yProps(0)}
              />
              <Tab
                icon={<HelpOutlineIcon />}
                iconPosition="start"
                sx={{
                  fontSize: { xs: "14px", sm: "16px", md: "20px", lg: "24px" },
                  fontWeight: "600",
                }}
                label="FAQ"
                {...a11yProps(1)}
              />
              <Tab
                icon={<UpdateIcon />}
                iconPosition="start"
                sx={{
                  fontSize: { xs: "14px", sm: "16px", md: "20px", lg: "24px" },
                  fontWeight: "600",
                }}
                label="Updates"
                {...a11yProps(2)}
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            {/* <Grid item={true}> */}
            About&nbsp;{initialValue?.sponsorSearchData?.sponsorPageName}!
            {/* <Typography variant="body2" mt={1}>
                {initialValue?.sponsorSearchData?.TextField}
              </Typography> */}
            {/* </Grid> */}
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Grid item={true}>
              <Typography variant="h3" fontWeight={500}>
                FAQ
              </Typography>
              <div>
                {initialValue?.faqSearchData.map((step: any, index: any) => (
                  <Accordion
                    key={index}
                    expanded={expanded === `panel${index}`}
                    onChange={handleChangeAccordion(`panel${index}`)}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography>{step.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>{step.answer}</Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </div>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={2}>
            Rewards
          </TabPanel>
        </Box>

        <Grid
          item={true}
          p={2}
          sx={{
            borderBottom: "2px solid ",
            borderColor: "secondary.contrastText",
          }}
        >
          <Typography variant="h3" fontWeight={500}>
            One Time Reward
          </Typography>
          <Grid
            container
            item={true}
            mt={2}
            pl={3}
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="body1" fontWeight={600}>
                Sponsor $ 500 or more
              </Typography>
              <Typography fontWeight={600} variant="body1">
                Reward
              </Typography>
            </Box>
            <Btn
              text="Sponsor"
              textTransform="capitalize"
              fontSize="14px"
              bg="primary.main"
              pl="20px"
              pr="20px"
              borderRadius="20px"
              textColor="secondary.main"
              backgroundColor="primary.main"
              color="secondary.main"
              marginTop="0"
              marginBottom="0"
            />
          </Grid>
          <Typography variant="body1" pl={3}>
            Free Outfit of your choosing from NazimaKnits !(Valued at $75) & One
            HandMade Crochet Item (Valued at $35)
          </Typography>
        </Grid>
        <Grid item={true} xs={12} sm={12} md={12} lg={12} m={2}>
          <Typography variant="h3" fontWeight={500} mb={1}>
            Comment Post
          </Typography>
          <TextField
            fullWidth
            color="primary"
            focused
            multiline
            rows={5}
            name="comment"
            placeholder="write a comment "
          />
          <Grid item mt={2} md={12}>
            <Btn
              text="Post Comment"
              textTransform="capitalize"
              fontSize="20px"
              bg="primary.main"
              pl="20px"
              pr="20px"
              borderRadius="20px"
              textColor="secondary.main"
              backgroundColor="primary.main"
              color="secondary.main"
              marginTop="0"
              marginBottom="0"
            />
          </Grid>
          <Typography mt={2} variant="h3" fontWeight={500}>
            Recent Comments
          </Typography>
          <Grid
            container
            item={true}
            gap={2}
            mt={2}
            sx={{
              borderBottom: "2px solid",
              borderColor: "secondary.contrastText",
            }}
          >
            <Grid
              container
              item={true}
              sx={{
                borderBottom: "1px solid",
                borderColor: "secondary.contrastText",
              }}
              display="flex"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Grid item={true} xs={2} sm={1} md={1} lg={1}>
                <Avatar
                  alt="Remy Sharp"
                  src=""
                  sx={{ width: 56, height: 56, mb: 1 }}
                />
              </Grid>
              <Grid item={true} xs={10} sm={11} md={11} lg={11}>
                <Grid
                  item={true}
                  display="flex"
                  md={11}
                  lg={11}
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle2" fontWeight={600}>
                    Gail Bryant
                  </Typography>
                  <Typography fontSize="12px">Jul 19, 2022 4:45 PM</Typography>
                </Grid>

                <Typography>
                  This sounds like such a wonderful and valuable service, one
                  that I am proud to support!
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item={true}
        container
        lg={3.9}
        md={12}
        sm={12}
        xs={12}
        display="flex"
        style={{
          top: "15%",
          position: "sticky",
          height: "40vh",
        }}
      >
        <Grid item={true} xs={12} sm={12} md={12}>
          <Typography variant="h2">
            ${initialValue?.sponsorSearchData?.amount}
          </Typography>

          <Typography variant="subtitle2">
            received of{" "}
            <Box component="span" fontWeight={700} color="Black">
              $5,000.00{" "}
            </Box>
            goal
          </Typography>
          <LinearProgressWithLabel color="primary" value={70} />
          <Grid
            container
            item={true}
            mt={1}
            mb={1}
            justifyContent="space-between"
          >
            <Typography variant="subtitle2">34 Sponsors</Typography>
            <Typography variant="subtitle2">47.22%</Typography>
          </Grid>
          <Btn
            text="Sponsor Now"
            width="100%"
            textTransform="capitalize"
            fontSize="26px"
            bg="primary.main"
            textColor="secondary.main"
            backgroundColor="primary.main"
            color="secondary.main"
            marginTop="0"
            marginBottom="0"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
export const getServerSideProps = async (context:any) => {
  const id = context.query.index
  try {
    const response = await Axios.get(`/search/${id}`);
    const data = response.data.searchDetail;
  return {
    props: { data: data }
  } 
  } catch (error) {
    return {
      props: { data: [] }
    } 
  }
  }
export default MySponsorPageDetails;
