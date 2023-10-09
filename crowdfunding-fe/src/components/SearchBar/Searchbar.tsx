import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import { Button, InputAdornment, TextField } from "@mui/material";
import Axios from "@/Axios";
import { useDispatch } from "react-redux";
import { searchdata } from "Redux/searchSlice";
import { profileData } from "Redux/profileSlice";


export default function PrimarySearchAppBar( {search}:any) {
  const [showClearIcon, setShowClearIcon] = useState("none");
  const [inputWidth, setInputWidth] = useState(200);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const inputValue = event.target.value;
    setQuery(inputValue);
    setShowClearIcon(inputValue === "" ? "none" : "flex");
    setInputWidth(inputValue.length * 6 + 200);
  };
  const getData = async () => {
    try {
      const response = await Axios.get(`/search/${search}?q=${query}`);
      const allData = response.data.data;
      if(search == "fuzzy-search"){
        dispatch(searchdata(allData));
      }else  if(search == "fuzzy-profile"){
      dispatch(profileData(allData));
    }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleClick = (): void => {
    getData();
  };
  React.useEffect(() => {
    getData();
  }, [query]);

  return (
    <Box mt={2}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "primary.main",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: 85,
        }}
      >
        <Toolbar>
          <SearchIcon
            fontSize="large"
            sx={{
              color: "secondary.main",
            }}
          />
          <TextField
            sx={{
              input: { color: "secondary.main" },
              "& fieldset": { border: "none" },
              width: inputWidth,
            }}
            variant="outlined"
            onChange={handleChange}
            placeholder="Search"
            InputProps={{
              style: { fontSize: 28 },
              endAdornment: (
                <InputAdornment
                  position="end"
                  onClick={handleClick}
                  sx={{ display: showClearIcon }}
                >
                  <Button
                    variant="outlined"
                    sx={{
                      fontSize: 20,
                      width: 100,
                      lineHeight: 1.3,
                      color: "white",
                      border: "1px solid",
                      borderColor: "primary.ligth",
                      textTransform: "capitalize;",
                      "&:hover": {
                        bgcolor: "primary.light",
                        color: "primary.dark",
                      },
                    }}
                  >
                    Search
                  </Button>
                </InputAdornment>
              ),
            }}
          ></TextField>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export async function getServerSideProps() {
 
  const response = await Axios.get("/dashboard")
  const data = response.data
return {
  props:{
    data:data,
  },
}
}