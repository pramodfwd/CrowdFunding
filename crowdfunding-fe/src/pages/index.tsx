import * as React from "react";
import Box from "@mui/material/Box";
import Head from "@/components/Head";
import About from "@/components/About";
import FeturedProfiles from "@/components/FeturedProfiles";
import SponsorDreamsMonthly from "@/components/SponsorDreamsMonthly";
import SponsorPages from "@/components/SponsorPages";
import YoutubeVideos from "@/components/YoutubeVideos";
import OurMission from "@/components/OurMission";
import FindMonthlySponsor from "@/components/FindMonthlySponsor";
import CrowdFundingFeWorldWide from "@/components/CrowdFundingFeWorldWide";


export default function Home() {
  return (
        <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
      <Head />
      <About />
      <FeturedProfiles />
      <SponsorDreamsMonthly />
      <SponsorPages />
      <YoutubeVideos />
      <OurMission />
      <FeturedProfiles />
      <FindMonthlySponsor />
      <CrowdFundingFeWorldWide />
      </Box>
  );
}
