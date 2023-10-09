import { NextPage } from "next";
import { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import SponsorButton from "./SponsorButton";
import Pagination from "@/components/Pagination";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "Redux/Store";

const PaginationData = ({data}:any) => {
  const searchData = useSelector((state: RootState) => state.profile.value);
  const [showPerPage, setShowPerPage] = useState(12);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });
  const [initialValue, setInitialValue] = useState<any>([]);
  const total = initialValue.length;

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
  }, [searchData]);
  const PaginationChange = (start: number, end: number) => {
    setPagination({ start, end });
  };

  return (
    <>

      <Grid container  boxSizing="border-box" width="100%" justifyContent="center" alignItems="center">
      <Grid container
       sx={{
        m: { xs: 3, sm: 3, md: 3, lg: 5 }}}
         boxSizing="border-box" justifyContent="flex-start" >
          {initialValue
            .slice(pagination.start, pagination.end)
            .map((step: any) => (
              <Grid m={1.5} key={step._id}
              sx={{
                maxWidth: { xs: "94vw", sm: "41vw", md: "43vw", lg: 260 },
                minWidth: { xs: "94vw", sm: "41vw", md: "43vw", lg: 260 },
              }}
              >
                <Card
                  sx={{
                    height: "470px",
                    paddingTop: 0.7,
                    "&:hover": {
                      color: "primary.main",
                      transition: "all 0.4s",
                      paddingTop: "0px",
                      height: 467,
                      "& .MuiTypography-root": {
                        color: "initial",
                      },
                      "& .MuiTypography-root.MuiTypography-subtitle2": {
                        color: "primary.main",
                      },
                    },
                    "&:hover .MuiCardMedia-root": {
                      filter: "grayscale(700%)",
                      transition: "all 0.4s",
                    },
                  }}
                >
                  <Box
                    component="div"
                  >
                    <CardMedia
                      component="img"
                      height="260"
                      image={step.image}
                      alt="green iguana"
                    />
                    <Grid
                      display="flex"
                      gap={1.5}
                      mt={-2}
                      color={"secondary.main"}
                      bgcolor="primary.main"
                      py={0.5}
                      px={4}
                      sx={{
                        clipPath: "polygon(0% 0%, 70% 0%, 76% 100%, 0% 100%)",
                      }}
                    >
                      <FacebookIcon />
                      <InstagramIcon />
                      <GoogleIcon />
                    </Grid>
                    <CardContent>
                      <Link
                        href={`/MyProfileDetails/${step._id}`}
                        legacyBehavior
                      >
                        <Typography gutterBottom variant="h6" component="h1">
                          {step.firstName}&nbsp;{step.lastName}
                        </Typography>
                      </Link>
                      <Box sx={{ minHeight: 80 }}>
                        <Typography
                          variant="body1"
                          sx={{
                            color: "primary.contrastText",
                            display: "-webkit-box",
                            overflow: "hidden",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          {step.miniBio}
                        </Typography>
                      </Box>
                      <Box>
                        <SponsorButton />
                      </Box>
                    </CardContent>
                  </Box>
                </Card>
              </Grid>
            ))}
        </Grid>
        <Box sx={{ textAlign: "center", fontSize: 45, width: "100%" }}>
          <Pagination
            showPerPage={showPerPage}
            onPaginationChange={PaginationChange}
            total={total}
          />
        </Box>
      </Grid>
    </>
  );
};
export default PaginationData;
