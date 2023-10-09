import { Box, Button } from "@mui/material";
import React from "react";

const SponsorButton = () => {
  return (
    <Box>
            
      <Button sx={{ color:'secondary.main',
      "&:hover": {
            color:'primary.main',
            backgroundColor:'white',
          } }} fullWidth variant="contained">
        Sponsor Now
      </Button>
    </Box>
  );
};
export default SponsorButton;
