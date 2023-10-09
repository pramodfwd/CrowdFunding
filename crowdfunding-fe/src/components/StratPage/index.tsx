import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import PhotoCameraBackRoundedIcon from "@mui/icons-material/PhotoCameraBackRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import CardGiftcardRoundedIcon from "@mui/icons-material/CardGiftcardRounded";
import lightTheme from "@/styles/theme/lightTheme";
import Story from "./Story";
import BasicInformation from "./BasicInfo";
import ImageAndVideos from "./ImageAndVideos";
import Faq from "./Faq";
import Rewards from "./Rewards";
import Axios from "@/Axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IValue {
  basicInfoSection: {
    sponsorPageName: string;
    sponsorPageURL: string;
    sponsorPageCaption: string;
    sponsorPageCategory: string;
    sponsorPageLocation: string;
    amount: number;
    textField: string;
    videoUrl: string;
    uploadImage: string;
    imageChange: boolean;
  };
  faqSection: Array<{ question: string; answer: string }>;
  rewardSection: Array<{
    rewardTitle: string;
    rewardType: string;
    youtubeVideoLink: string;
    rewardImage: string;
    sponsorshipAmount: 0;
    rewardDescription: string;
    rewardImageChange: boolean,
  }>;
}
let initialValues: IValue = {
  basicInfoSection: {
    sponsorPageName: "",
    sponsorPageURL: "",
    sponsorPageCaption: "",
    sponsorPageCategory: `Business`,
    sponsorPageLocation: "",
    amount: 0,
    textField: "",
    videoUrl: "",
    uploadImage: "",
    imageChange: false,
  },
  faqSection: [{ question: "", answer: "" }],
  rewardSection: [
    {
      rewardTitle: "",
      rewardType: "Monthly",
      youtubeVideoLink: "",
      rewardImage: "",
      sponsorshipAmount: 0,
      rewardDescription: "",
      rewardImageChange: false,
    },
  ],
};

const Start = ({ id }: any) => {
  const [data, setData] = useState(initialValues);
  const [currentStep, setCurrentStep] = useState(0);
  const [isToken, setIsToken] = useState("");
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setIsToken(storedToken);
    }
  }, []);

  const getData = async () => {
    try {
      const response = await Axios.get(`/sponsor/${id}`);
      const allData = response.data;
      const { success, message, ...all } = allData;
      setData(all);
    } catch (error) {}
  };
  
    useEffect(() => {
      if(id){
      getData();
    }
    }, []);
  
  const makeRequest = async (formData: any) => {
    try {
      const response = await Axios.post("/sponsor", {
        formData,
      });
      toast(response.data.message, {
        position: toast.POSITION.BOTTOM_CENTER,
        type: toast.TYPE.SUCCESS,
      });
    } catch (error: any) {
      toast(error.response?.data.message, {
        position: toast.POSITION.BOTTOM_CENTER,
        type: toast.TYPE.ERROR,
      });
    }
  };

  const updateSponsorData = async (formData: any) => {
    try {
      const response = await Axios.put(`sponsor/update/${id}`, {
        formData,
      });
      toast(response.data.message, {
        position: toast.POSITION.BOTTOM_CENTER,
        type: toast.TYPE.SUCCESS,
      });
    } catch (error: any) {
      toast(error.message, {
        position: toast.POSITION.BOTTOM_CENTER,
        type: toast.TYPE.ERROR,
      });
    }
  };
  const handleNextStep = (newData: any, final = false) => {
    setData((prev: any) => ({ ...prev, ...newData }));
    if (isToken) {
      if (final && id) {
        updateSponsorData(newData);
        return;
      } else if (final) {
        makeRequest(newData);
        return;
      }
      setCurrentStep((prev) => prev + 1);
    } else {
      toast("Please login first then try again ", {
        position: toast.POSITION.BOTTOM_CENTER,
        type: toast.TYPE.ERROR,
        style: { backgroundColor: "#faa6a0", color: "white" },
      });
    }
  };

  const handlePrevStep = (newData: any) => {
    setData((prev: any) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const cardSteps = [
    <BasicInformation
      next={handleNextStep}
      prev={handlePrevStep}
      data={data}
      key={data.basicInfoSection.uploadImage}
    />,
    <Story next={handleNextStep} prev={handlePrevStep} data={data} key={data.basicInfoSection.uploadImage} />,
    <ImageAndVideos next={handleNextStep} prev={handlePrevStep} data={data} key={data.basicInfoSection.uploadImage}/>,
    <Faq next={handleNextStep} prev={handlePrevStep} data={data} key={data.basicInfoSection.uploadImage}/>,
    <Rewards next={handleNextStep} prev={handlePrevStep} data={data} key={data.basicInfoSection.uploadImage} />,
  ];

  const steps = [
    {
      label: 1,
      title: "Basic Information",
      icon: "𝐢",
    },
    {
      label: 2,
      title: "Story",
      icon: <BorderColorIcon />,
    },
    {
      label: 3,
      title: "Picture @ Videos",
      icon: <PhotoCameraBackRoundedIcon />,
    },
    {
      label: 4,
      title: `FAQ${"'"}s`,
      icon: <HelpOutlineRoundedIcon />,
    },
    {
      label: 5,
      title: "Rewards",
      icon: <CardGiftcardRoundedIcon />,
    },
  ];
  const maxSteps = steps.length;
  return (
    <Grid container alignItems="center" justifyContent="center" display="flex">
      <Grid
        item
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={2}
      >
        <Grid item>
          <Typography
            component="h1"
            variant="h3"
            fontWeight={900}
            color="primary.main"
            mt={3}
            mb={-2}
            textAlign="center"
          >
            Start Your Sponsor Page
          </Typography>
        </Grid>
        <Grid item maxWidth={600} m={1} mb={-0.5}>
          <Typography
            component="h1"
            variant="h6"
            fontSize={21}
            textAlign="center"
            lineHeight={1}
            mb={1}
          >
            Your sponsor page will be in “Draft mode” after completing your
            sponsor page details.
          </Typography>
        </Grid>
        <Grid
          item
          container
          display="flex"
          justifyContent="space-around"
          bgcolor="secondary.main"
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
          fontSize="0.875rem"
          p={1.5}
          width="90%"
          marginLeft={{ xs: 10, sm: 0 }}
          marginRight={{ xs: 10, sm: 0 }}
          borderRadius={1.5}
        >
          <Grid
            item
            lineHeight={1.5}
            xs={12}
            sm={6}
            md={6}
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Typography
              component="h1"
              variant="h6"
              fontWeight="bold"
              textAlign={{ xs: "center", sm: "left", md: "left" }}
              marginLeft={{ xs: -1, sm: 4 }}
              fontSize={20}
            >
              To accept money:
            </Typography>
            <Grid
              width="100%"
              textAlign="left"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              marginTop={-1}
              fontSize={16}
            >
              <ol>
                <li>
                  Go-to <b>My Profile</b>
                </li>
                <li>
                  Click <b>My Sponsor Page</b>
                </li>
                <li>
                  Set sponsor page to <b>“Active”</b>
                </li>
              </ol>
            </Grid>
          </Grid>
          <Grid
            item
            lineHeight={1.5}
            xs={12}
            sm={6}
            md={6}
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Typography
              component="h1"
              variant="h6"
              fontWeight="bold"
              textAlign={{ xs: "center", sm: "left", md: "left" }}
              marginLeft={{ xs: -5, sm: 1.5 }}
              fontSize={20}
            >
              To get paid:
            </Typography>
            <Grid
              width="100%"
              textAlign="left"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              marginTop={-1}
              marginLeft={{ xs: -1, sm: -4 }}
              fontSize={16}
            >
              <ol>
                <li>
                  Go-to <b> My Profile</b>
                </li>
                <li>
                  Click <b>“Get Paid Now”</b>
                </li>
                <li>
                  Choose <b>Stripe</b> or <b>PayPal</b>
                </li>
              </ol>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        mt={4}
        gap={0.5}
        width="100%"
      >
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <Box
              borderRadius={1.5}
              height={110}
              width={210}
              boxShadow={8}
              bgcolor={
                steps[currentStep].label === step.label
                  ? "primary.main"
                  : "secondary.main"
              }
              color={
                steps[currentStep].label === step.label
                  ? "secondary.main"
                  : "primary.dark"
              }
              pt={2}
              m={1}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Typography component="h1" variant="h5" fontWeight={800}>
                {step.icon}
              </Typography>
              <Box fontSize={20} fontWeight="500">
                {step.title}
              </Box>
              {steps[currentStep].label === step.label ? (
                <Box
                  mt={2.7}
                  sx={{
                    borderStyle: "solid",
                    borderWidth: "15px 12px 0 12px",
                    borderColor: `${lightTheme.palette.primary.main} transparent`,
                  }}
                ></Box>
              ) : (
                ""
              )}
            </Box>
          </React.Fragment>
        ))}
      </Grid>
      <Grid
        item
        maxWidth="71.5rem"
        width="100%"
        marginTop={{ xs: 2, sm: 2, md: 4 }}
        marginBottom={{ xs: 2, sm: 2, md: 4 }}
        padding={{ xs: 0, sm: 0, md: 3 }}
        bgcolor="secondary.main"
        boxShadow={5}
        borderRadius={1.5}
      >
        <Grid>{cardSteps[currentStep]}</Grid>
      </Grid>
    </Grid>
  );
};

export default Start;
