import { Card, CardContent, Grid, Typography } from "@mui/material"
import { CardMedia } from "@mui/material";
import css from "../styles/SponsorDreamsMonthly.module.css";
import Axios from "@/Axios";
import { useEffect, useState } from "react";

const SponsorDreamsMonthly = () => {
  const [getData, setGetData] = useState([]);
  useEffect(() => {
    Axios.get('/sponsor-dreams-monthly')
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
        color="primary"
        align="center"
        bgcolor="secondary.light"
        p={2.6}
        width={"100%"}
        sx={{ typography: { sm: "h3", xs: "h5" } }}
      >
        Sponsor CrowdFundingFe Dreams Monthly
      </Typography>
      <Grid>
        <Grid container>
          {getData.map((step: any, index) => (
            <Grid
              item
              m={{ xs: 0.5, sm: 0, md: 0, lg: 0 }}
              xs={5.5}
              sm={3}
              md={3}
              lg={3}
              key={index}
              className={css.container}
            >
              <Card>
                <CardMedia
                  component="img"
                  sx={{ height: { xs: 150, sm: 180, md: 205, lg: 230 } }}
                  className={css.imgMedia}
                  image={step.imgPath}
                />
                <Card>
                  <Typography
                    bgcolor="primary.main"
                    color={"white"}
                    className={css.top}
                  >
                    {step.title}
                  </Typography>
                </Card>
                <CardContent className={css.middle}>
                  <Typography
                    sx={{ typography: { sm: "body1", xs: "subtitle1" } }}
                    variant="inherit"
                    color={"white"}
                  >
                    {step.details}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};
export default SponsorDreamsMonthly;
