import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Radio,
  Select,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import InputAdornment from "@mui/material/InputAdornment";

const label = { inputProps: { "aria-label": "Switch demo" } };

const Money = () => {
  const [selectedValue, setSelectedValue] = React.useState("a");
  const [age, setAge] = React.useState("");

  const handleChange1 = (event: any) => {
    setAge(event.target.value as string);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  return (
    <>
      <Box
        minHeight={90}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          align="center"
          mt={4}
          color="primary.main"
          variant="h3"
          fontWeight="700"
        >
          Support thisSponsor Page
        </Typography>
      </Box>
      <Grid
        item={true}
        xs={10}
        mt="30px"
        mb="30px"
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Button
          sx={{
            fontSize: "30px",
            minHeight: 100,
            backgroundColor: "secondary.light",
            width: { xs: "95%", sm: "95%", md: "95%", lg: "70%" },
            color: "primary.main",
            "&:hover": {
              backgroundColor: "secondary.light",
              color: "primary.main",
            },
          }}
        >
          The Baby Bond: Birth & Beyond
        </Button>
      </Grid>
      <Grid
        item={true}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item={true}
          xs={12}
          minHeight="100px"
          sx={{ maxWidth: { xs: "95%", sm: "95%", md: "95%", lg: "58%" } }}
        >
          <Grid
            container
            item={true}
            xs={12}
            bgcolor="#fcf5fc"
            mb="50px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Grid container item={true} xs={12}>
              <Checkbox defaultChecked />
              <Typography color="primary.main" variant="h3">
                Sponsor
              </Typography>
            </Grid>
            <Grid
              item={true}
              xs={10}
              sm={10}
              md={5}
              lg={5}
              sx={{ width: "100%", m: 1 }}
              display="flex"
              alignItems="center"
            >
              <Radio
                checked={selectedValue === "a"}
                onChange={handleChange}
                value="a"
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
              />
              <Typography align="center">One Time</Typography>
              <Radio
                checked={selectedValue === "b"}
                onChange={handleChange}
                value="b"
                name="radio-buttons"
                inputProps={{ "aria-label": "B" }}
              />
              <Typography align="center">Monthly</Typography>
            </Grid>
            <Grid
              item={true}
              xs={10}
              sm={10}
              md={5}
              lg={5}
              sx={{ width: "100%", m: 1, fontSize: "10px" }}
            >
              <TextField
                fullWidth
                id="email"
                name="email"
                placeholder="Pay platform fee for One Million Girls"
                size="small"
                focused
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      sx={{
                        borderRight: "1px solid",
                        borderColor: "primary.main",
                        p: "20px 1px",
                        ml: -1.4,
                        bgcolor: "secondary.contrastText",
                        borderRadius: 1,
                      }}
                    >
                      <Switch {...label} defaultChecked />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid
              item={true}
              xs={10}
              sm={10}
              md={5}
              lg={5}
              sx={{ width: "100%", m: 1 }}
            >
              <TextField
                fullWidth
                id="email"
                name="email"
                placeholder="10"
                size="small"
                focused
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      sx={{
                        borderRight: "1px solid",
                        borderColor: "primary.main",
                        p: "20px 1px",
                        ml: -1.4,
                        bgcolor: "secondary.contrastText",
                        borderRadius: 1,
                      }}
                    >
                      <Switch {...label} defaultChecked />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid
              item={true}
              xs={10}
              sm={10}
              md={5}
              lg={5}
              sx={{ width: "100%", m: 1 }}
            >
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Tip crowdfunding 5%
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Tip crowdfunding 5%"
                  size="small"
                  onChange={handleChange1}
                >
                  <MenuItem value={10}>Tip crowdfunding 0%</MenuItem>
                  <MenuItem value={20}>Tip crowdfunding 5%</MenuItem>
                  <MenuItem value={30}>Tip crowdfunding 15%</MenuItem>
                  <MenuItem value={30}>Tip crowdfunding 30%</MenuItem>
                  <MenuItem value={30}>Tip crowdfunding 45%</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item={true}
              xs={10}
              sm={10}
              md={5}
              lg={5}
              sx={{ width: "100%", m: 1 }}
            >
              <TextField
                sx={{ width: "100%" }}
                color="primary"
                name="message"
                placeholder="Message"
                focused
                multiline
                rows={5}
              />
            </Grid>
            <Grid
              item={true}
              xs={10}
              sm={10}
              md={5}
              lg={5}
              sx={{ width: "100%", m: 1 }}
            >
              <Typography align="center" fontWeight={550} variant="subtitle2">
                Sponsorship: $10.00
              </Typography>
              <Typography align="center" fontWeight={550} variant="subtitle2">
                Fee + Tip: $1.00
              </Typography>
              <Typography align="center" fontWeight={550} variant="subtitle2">
                Total: $ 11.00
              </Typography>
            </Grid>
            <Grid
              item={true}
              xs={10}
              sm={10}
              md={5}
              lg={5}
              mb="20px"
              sx={{ width: "100%", m: 1 }}
            >
              <TextField
                fullWidth
                id="email"
                name="email"
                size="small"
                placeholder="Share your contact information with Bianca Bee"
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      sx={{
                        borderRight: "1px solid",
                        borderColor: "primary.main",
                        p: "20px 1px",
                        ml: -1.4,
                        bgcolor: "secondary.contrastText",
                        borderRadius: 1,
                      }}
                    >
                      <Switch {...label} defaultChecked />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid
              item={true}
              xs={10}
              sm={10}
              md={5}
              lg={5}
              mb="20px"
              sx={{ width: "100%", m: 1 }}
            >
              <IconButton
                sx={{
                  display: "inline-flex",
                  fontWeight: 500,
                  height: "40px",
                  width: "100%",
                  mb: "3px",
                  textTransform: "upercase",
                  borderRadius: "40px",
                  color: "white",
                  backgroundColor: "primary.main",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    color: "white",
                  },
                }}
              >
                Sponsor
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Money;
