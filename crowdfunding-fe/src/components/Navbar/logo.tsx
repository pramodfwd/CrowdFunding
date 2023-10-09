import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Box>
      <Link href="/" legacyBehavior>
        <Typography
          variant="h6"
          color="primary.main"
          ml={{ xs: -2, md: 0 }}
          sx={{ display: { xs: "flex", md: "flex" }, cursor:"pointer" }}
          fontSize="35px"
          fontWeight="fontWeightBold"
          lineHeight={1.2}
          >
          CrowdFunding
        </Typography>
      </Link>
    </Box>
  );
};

export default Logo;
