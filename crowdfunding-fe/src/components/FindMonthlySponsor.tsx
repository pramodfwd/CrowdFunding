import { Box, Divider, Grid, Hidden, IconButton, InputBase, Paper, Typography } from '@mui/material';
import Link from 'next/link';

const FindMonthlyFeSponsor = () => {
  return (
    <><Typography
      color="primary"
      bgcolor="secondary.light" 
      textAlign={"center"}
      pt={8}
      width={"100%"}
      sx={{ typography: { sm: "h3", xs: "h5" }, }}>
      Find Monthly Sponsors </Typography>
      <Grid
        container
        bgcolor="secondary.light" 
        direction="column"
        pt={2}
        pb={8}
        alignItems="center"
        justifyContent="center"
      >
        <Hidden smDown>
          <Paper
            sx={{ display: 'flex', flexWrap: 'wrap', width: { lg: 600 }, borderRadius: 10, alignItems: 'center', }}
          >
            <InputBase
              sx={{ fontSize: '25px', minWidth: 350, fontWeight: 550, ml: 4, flex: 1 }}
              placeholder="gofundher.com/your name "
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <Box>
              <Link href='/join' legacyBehavior>
              <IconButton
                sx={{
                  display: "inline-flex",
                  m: .5,
                  fontWeight: 600, fontSize: "20px", height: '60px', width: '180px',
                  textTransform: "capitalize", borderRadius: "40px", backgroundColor: 'primary.main',
                  "&:hover": { backgroundColor: 'primary.main', color: "white" },
                }}               
              >
                Start my page
              </IconButton>
              </Link>
            </Box>
          </Paper>
        </Hidden>
        <Hidden smUp>
          <Paper
            sx={{ display: 'flex', flexWrap: 'wrap', width: "80%", borderRadius: 10, alignItems: 'center', }}
          >
            <InputBase
              sx={{ fontSize: { xs: 20, sm: 25}, width: '100%', fontWeight: 550, ml: 2, }}
              placeholder="gofundher.com/your name"
            />
          </Paper>
          <Link href='/join' legacyBehavior>
          <IconButton
            sx={{
              display: "inline-flex",
              m: 1.5,
              fontWeight: 500, fontSize: 18, height: { xs: 40, sm: 50, md: 60, }, width: '80%',
              textTransform: "capitalize", borderRadius: "40px", backgroundColor: 'primary.main',
              "&:hover": { backgroundColor: 'primary.main', color: "white" },
            }}
          >
            Start my Page
          </IconButton>
          </Link>
        </Hidden>
      </Grid>
    </>
  )
}
export default FindMonthlyFeSponsor;