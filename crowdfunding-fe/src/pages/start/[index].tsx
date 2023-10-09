import Axios from "@/Axios";
import StartPage from "@/components/StratPage";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import React from "react";

const Start = () => {
  const router = useRouter();
  const id = router.query.index;
  return (
    <Box bgcolor="secondary.light">
      <StartPage id={id} />
    </Box>
  );
};

export default Start;
