import { Box, Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const Btn = (props: any) => {
  return (
    <Box>
       <Button
        variant={props.variant}
        type={props.type}
        onClick={props.onClick}
        sx={{
          width: props.width,
          height: props.height,
          borderRadius: props.borderRadius,
          textTransform: props.textTransform,
          fontSize: props.fontSize,
          pl: props.pl,
          pr: props.pr,
          marginTop: props.marginTop ? props.marginTop : 2,
          marginBottom: props.marginBottom ? props.marginBottom : 2,
          color: props.textColor,
          backgroundColor: props.bg,
          "&:hover": {
            color: props.color,
            backgroundColor: props.backgroundColor,
          },
        }}
      >
        {props.text}
      </Button>
    </Box>
  );
};

export const MediaBtn = (props: any) => {
  return (
    <Button
      variant={props.variant}
      sx={{
        width: props.width,
        borderRadius: props.borderRadius,
        color: props.color,
        borderColor: props.color,
        textTransform: props.textTransform,
        "&:hover": {
          backgroundColor: props.color,
          color: props.borderColor,
          borderColor: props.borderColor,
        },
      }}
      startIcon={props.icon}
    >
      {props.text}
    </Button>
  );
};
export default Btn;

export const LinkBtn = (props: any) => {
  return (
    <Link href={props.href} legacyBehavior>
      <Button
        variant={props.variant}
        type={props.type}
        onClick={props.onClick}
        sx={{
          width: props.width,
          height: props.height,
          borderRadius: props.borderRadius,
          textTransform: props.textTransform,
          fontSize: props.fontSize,
          pl: props.pl,
          pr: props.pr,
          marginTop: props.marginTop ? props.marginTop : 2,
          marginBottom: props.marginBottom ? props.marginBottom : 2,
          color: props.textColor,
          backgroundColor: props.bg,
          "&:hover": {
            color: props.color,
            backgroundColor: props.backgroundColor,
          },
        }}
      >
        {props.text}
      </Button>
    </Link>
  );
};
