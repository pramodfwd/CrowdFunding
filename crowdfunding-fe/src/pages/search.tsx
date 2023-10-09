import React, { useEffect } from "react";
import SearchBar from "@/components/SearchBar/Searchbar";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Box, CardMedia, Grid, Paper, Typography } from "@mui/material";
import { useState } from "react";
import Btn from "@/components/genericComponent/Btn";
import Pagination from "@/components/Pagination";
import SocialMediaLink from "@/components/genericComponent/SocialMediaLink";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import { useSelector } from "react-redux";
import { RootState } from "Redux/Store";
import Axios from "@/Axios";
import Link from "next/link";

export function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="buffer" valueBuffer={100} {...props} />
      </Box>
      <Box>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const catagory = [
  {
    label: "All",
  },
  {
    label: "Community",
  },
  {
    label: "Business",
  },
  {
    label: "Personal",
  },
];

const Funded = [
  {
    label: "All",
  },
  {
    label: "New",
  },
  {
    label: "50%-75%",
  },
  {
    label: "75%-100%",
  },
  {
    label: "Above 100% Funded",
  },
];

const Search = ({data}:any) => {
  const searchData = useSelector((state: RootState) => state.search.value);
  const [showPerPage, setShowPerPage] = useState(9);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });
  const [initialValue, setInitialValue] = useState<any>([]);
  const total = initialValue.length;

  const filterItem = (catItems: any) => {
    if (catItems === "All") {
      return setInitialValue(data);
    } else {
      const updatedItem = searchData.filter((currentElem: any) => {
        return currentElem.sponsorPageCategory === catItems;
      });
      setInitialValue(updatedItem);
    }
  };
const dataLength=data.length===searchData.length
  useEffect(() => {
    
    if (searchData.length >= 1 ) {
      if(searchData.length >= 1 && dataLength){
        setInitialValue(data);
      }else{
        setInitialValue(searchData);
      }
    }else if (searchData.length === 0) {
      setInitialValue([]);
    }
  }, [showPerPage, searchData]);
  const PaginationChange = (start: number, end: number) => {
    setPagination({ start, end });
  };
  return (
    <>
      <Box
        minHeight={90}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography mt={4} color="primary.main" variant="h3" fontWeight="700">
          Looking for funding?{" "}
        </Typography>
      </Box>
      <SearchBar search="fuzzy-search" />
      <Grid
        component="form"
        minHeight={"100px"}
        display="flex"
        alignItems="center"
        justifyContent={"center"}
        sx={{
          "& .MuiTextField-root": {
            m: { xs: 1, sm: 1, md: 4, lg: 4 },
            width: "20ch",
          },
          textAlignLast: "center",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-select-currency"
          select
          label="CATEGORY"
          defaultValue="All"
          size="small"
        >
          {catagory.map((option) => (
            <MenuItem
              key={option.label}
              value={option.label}
              onClick={() => filterItem(`${option.label}`)}
            >
              <Typography>{option.label} </Typography>
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency"
          select
          label="%FUNDED"
          defaultValue="All"
          size="small"
        >
          {Funded.map((option) => (
            <MenuItem key={option.label} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid container sx={{ mt: { xs: -3, sm: 0, md: 0, lg: -6 }}} boxSizing="border-box" width="100%" justifyContent="center" alignItems="center">
      <Grid container sx={{ m: { xs: 3, sm: 0, md: 0, lg: 6 }}}
      boxSizing="border-box" justifyContent="flex-start" >
        {initialValue
          .slice(pagination.start, pagination.end)
          .map((step: any, index: any) => (
            <Grid key={index}>
              <Paper
                elevation={3}
                sx={{
                  width: { xs: "91vw", sm: "46vw", md: "46vw", lg: "27.4vw" },
                  margin: 1.5,
                  height: "38em",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ height: 257, objectFit: "cover" }}
                  image={step.uploadImage}
                />
                <Link href={`/MySponsorPageDetails/${step._id}`} legacyBehavior>
                  <Typography
                    paddingTop={1}
                    paddingLeft={1.5}
                    sx={{
                      cursor: "pointer",
                      typography: { sm: "subtitle2", xs: "body1" },
                      "&:hover": { color: "primary.main" },
                      overflow: "hidden",
                    }}
                    component="div"
                  >
                    {step.sponsorPageName}
                  </Typography>
                </Link>
                <Typography
                  variant="body1"
                  color="primary.contrastText"
                  pl={1.5}
                >
                  by{" "}
                  <Box component="span" color="primary.main">
                    {step.profileId?.firstName}{" "}
                  </Box>
                </Typography>
                <Typography
                  minHeight={50}
                  variant="body1"
                  sx={{
                    display: "-webkit-box",
                    overflow: "hidden",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                  color="primary.contrastText"
                  pl={1.5}
                  pr={1.5}
                >
                  {step.sponsorPageCaption}
                </Typography>
                <Typography component="div" mt={3} p={1}>
                  <Typography fontSize={"10px"}>
                    {" "}
                    <Box
                      component="span"
                      fontSize={"12px"}
                      fontWeight={700}
                      color="Black"
                    >
                      ${step.amount}
                    </Box>{" "}
                    USD
                  </Typography>
                  <LinearProgressWithLabel color="success" value={index} />
                </Typography>
                <Typography align="center" mb={2}>
                  <Btn href={`/money/${step.category}`} text="Sponsor Now" />
                </Typography>
                <Typography
                  display="flex"
                  pt={1}
                  justifyContent={"center"}
                  variant="body1"
                >
                  {" "}
                  SHARE THIS:
                  <SocialMediaLink />
                </Typography>
              </Paper>
            </Grid>
          ))}
      </Grid>
      </Grid>
      <Box sx={{ textAlign: "center", fontSize: 45, width: "100%" }}>
        <Pagination
          showPerPage={showPerPage}
          onPaginationChange={PaginationChange}
          total={total}
        />
      </Box>
    </>
  );
};
export const getServerSideProps = async () => {
  try {
    const response = await Axios.get("/search");
      const data = response.data.searchDetail;
  return {
    props: { data: data }
  } 
  } catch (error) {
    return {
      props: { data: [] }
    } 
  }
  }
export default Search;
