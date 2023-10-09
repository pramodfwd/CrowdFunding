import css from '../styles/CrowdFundingFeWorldwide.module.css'
import { Grid, Typography } from '@mui/material';
import Btn from './genericComponent/Btn';


const CrowdFundingFeWorldWide = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      className={`${css.main} ${css.backgroundImage}`}
    >
      <Grid item xs={3}>
        <Typography color="primary" align='center' sx={{ typography: { sm: 'h2', xs: 'h5' }, p:2 }} component="h1" gutterBottom>CrowdFundingFe Worldwide</Typography>
        <Typography variant="body2" lineHeight={'30px'} align='center'>For Corporations and Charity Foundations, GoFundHer.com helps you find and <br></br> send money directly to women anywhere in the world.
        </Typography>
        <Typography align='center' p={4}>
          <Btn href='/sponsors' text="Sponsor with us" />
        </Typography>
      </Grid>
    </Grid>
  )
}

export default CrowdFundingFeWorldWide;

