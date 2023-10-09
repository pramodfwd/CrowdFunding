import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Axios from "@/Axios";

const YoutubeVideos = () => {
  const [getData, setGetData] = useState([]);
  const [showPerPage, setShowPerPage] = useState(3);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });
  const PaginationChange = (start: number, end: number) => {
    setPagination({ start, end });
  };

  useEffect(() => {
    Axios.get('/youtube-videos')
      .then(response => {
        setGetData(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <Typography
        bgcolor="secondary.light"
        color="primary"
        sx={{
          typography: { sm: "h3", xs: "h5" },
          p: 2.6,
          textAlign: "center",
          width: "100%",
        }}
      >
        Youtube Videos
      </Typography>
      <Grid
        container
        direction="column"
        bgcolor="secondary.light"
        alignItems="center"
        justifyContent="center"
        sx={{ borderRadius: 2 }}
      >
        <Grid container justifyContent="center">
          {getData
            .slice(pagination.start, pagination.end)
            .map((step: any, index) => (
              <Grid key={index} sx={{ m: 1.3 }}>
                <Box sx={{ width: { xs: 350, sm: 350, md: 310, lg: 352 } }}>
                  <iframe
                    src={step.videoUrl}
                    width="100%"
                    height="200"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  />
                </Box>
              </Grid>
            ))}
        </Grid>
      </Grid>
    </>
  );
};

export default YoutubeVideos