import { Grid, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react'
import MuiLink from "@mui/material/Link";
import { ArrowForward, ArrowBack } from '@mui/icons-material';

export interface IPaginationChange {
  onPaginationChange: (start: number, end: number) => void;
  showPerPage: number,
  total: number,
}

const PaginationFunction = ({ showPerPage, onPaginationChange, total }: IPaginationChange) => {
  const [counter, setCounter] = useState(1);
  const [noOfButtons, setNoOfButtons] = useState(Math.ceil(total / showPerPage))
  
  useEffect(() => {
    setNoOfButtons(Math.ceil(total / showPerPage)
  );
  }, [showPerPage, total]);
  
  useEffect(() => {
    const value = showPerPage * counter;
    const startValue = value - showPerPage;
    const endValue = value;
    onPaginationChange(startValue, endValue);
  }, [counter]);

  const onButtonClick = (type: string) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (noOfButtons === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };

  return (
    <>
      <Grid sx={{ display: "-webkit-inline-box " }}>
        <IconButton color="primary" onClick={() => onButtonClick("prev")} aria-label="Previous button">
          <ArrowBack />
        </IconButton>
        {new Array(noOfButtons).fill("").map((el, index) => {
          return (
            <MuiLink
              underline='none'
              component="button"
              variant='button'
              key={index}
              sx={{
                m: 1.5, fontSize: 12, borderRadius: .5, p: .4,
                '&:hover': {
                  transition: "ease-in-out 0.5s",
                  backgroundColor: "#9aa3d6",
                  color: "white"
                },
              }}
              onClick={() => setCounter(index + 1)}
            >
              {index + 1}
            </MuiLink>
          )
        })}
        <IconButton color="primary" onClick={() => onButtonClick("next")} aria-label="Next button">
          <ArrowForward />
        </IconButton>
      </Grid>
    </>
  )
}

export default PaginationFunction;