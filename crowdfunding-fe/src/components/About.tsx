import * as React from "react";
import Typography from "@mui/material/Typography";
import css from "../styles/About.module.css";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, Grid, List, ListItem, ListItemText } from "@mui/material";
import WifiTetheringErrorIcon from "@mui/icons-material/WifiTetheringError";
import Axios from "@/Axios";
import { useEffect, useState } from "react";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import BoltIcon from "@mui/icons-material/Bolt";
import LanguageIcon from "@mui/icons-material/Language";

const listData = [
  {
    icon: <SentimentSatisfiedAltIcon />,
    text: "Raise Money For Anything",
  },
  {
    icon: <FlashOnIcon />,
    text: "Fast 4 Minute Setup",
  },
  {
    icon: <FavoriteIcon />,
    text: "Open to everyone, Available Worldwide",
  },
  {
    icon: <WifiTetheringErrorIcon />,
    text: "Coaching from City Girls Big Dreams",
  },
];

export default function About() {
  const [getData, setGetData] = useState([]);
  useEffect(() => {
    Axios.get("/about")
      .then((response) => {
        setGetData(response.data.data);
      })
      .catch((error) => {});
  }, []);
  return (
    <Grid
      container
      sx={{
        width: { xs: "92%", sm: "92%", md: "92%", lg: 1180 },
        pt: { xs: 3, sm: 3, md: 7, lg: 8 },
        pb: { xs: 3, sm: 3, md: 6, lg: 6 },
      }}
      justifyContent="center"
      className={`${css.backgroundImage}`}
    >
      {getData.map((item: any, ind) => (
       <Grid key={ind} container justifyContent="center">
          <Grid
            item
            xs={11}
            sm={11}
            md={10.5}
            lg={7}
            sx={{ pr: 1, height: { xs: 230, sm: 310, md: 470, lg: 385 } }} >
            <iframe
              width="100%"
              height="100%"
              src={item.video}
              title="YouTube video player"
            />
          </Grid>
          <Grid item xs={11} sm={11} md={10.5} lg={5} justifyContent="center">
            <Typography color="primary" align="center" variant="h2" mb={3}>
              {item.heading}
            </Typography>
            <Grid p={1}>
              <Typography variant="body2" align="center">
                {item.details1}
              </Typography>
              <Typography p={1} variant="body2" align="center">
                {item.details2}
              </Typography>
              <Box p={1}>
                <List>
                  <ListItem sx={{ padding: 0, color: "primary.main" }}>
                   <TagFacesIcon />
                    <ListItemText
                      style={{ marginLeft: 4 }}
                      secondary={item.iconDetail1}
                    />
                  </ListItem>
                  <ListItem sx={{ padding: 0, color: "primary.main" }}>
                  <BoltIcon />
                    <ListItemText
                      style={{ marginLeft: 4 }}
                      secondary={item.iconDetail2}
                    />
                  </ListItem>
                  <ListItem sx={{ padding: 0, color: "primary.main" }}>
                   <FavoriteIcon />
                    <ListItemText
                      style={{ marginLeft: 4 }}
                      secondary={item.iconDetail3}
                    />
                  </ListItem>
                  <ListItem sx={{ padding: 0, color: "primary.main" }}>
                    <LanguageIcon />
                    <ListItemText
                      style={{ marginLeft: 4 }}
                      secondary={item.iconDetail4}
                    />
                  </ListItem>
                </List>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}
