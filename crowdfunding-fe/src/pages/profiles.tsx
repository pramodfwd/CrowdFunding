import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import SearchBar from "@/components/SearchBar/Searchbar";
import PaginationData from "@/components/pagination/PaginationData";
import Axios from "@/Axios";

function Profiles({data}:any) {
  return (
    <Box position="static" my={12}>
      <Box
        minHeight={40}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography color="primary.main" variant="h3" fontWeight="700">
          Looking for funding?
        </Typography>
      </Box>
      <SearchBar search = "fuzzy-profile" />
      <PaginationData data={data}         />
    </Box>
  );
}
export const getServerSideProps = async () => {    
  try {
    const response = await Axios.get("/feature-profile");
    const data = response.data.featureprofile;
  return {
    props: { data: data }
  } 
  } catch (error) {
    return {
      props: { data: [] }
    } 

  }
}
export default Profiles
