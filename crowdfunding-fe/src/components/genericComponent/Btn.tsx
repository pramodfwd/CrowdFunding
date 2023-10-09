import { Button } from '@mui/material';
import Link from 'next/link';
import React from 'react'

const Btn = (props: any) => {
  return (
    <Link href={props.href} legacyBehavior>
        <Button sx={{
          minInlineSize: { xs: 150, sm: 197, md: 197, lg: 197 },
          padding: { xs: 1, sm: 1.8, md: 1.8, lg: 1.8 },
          marginRight: { xs: 1, sm: 2, md: 2, lg: 2 },
          marginLeft: { xs: 1, sm: 2, md: 2, lg: 2 },
          borderColor: "white",
          borderRadius: '40px',
          fontSize: '22px',
          fontWeight: '700',
          textTransform: 'capitalize',
          color: `${props.textColor ? props.textColor : 'white'}`,
          backgroundColor: `${props.bg ? props.bg : 'primary.main'}`,
          "&:hover": {
            borderColor: `${props.hoverColor ? props.hoverColor : 'primary.main'}`,
            color: `${props.hoverColor ? props.hoverColor : 'primary.main'}`,
            backgroundColor: `${props.hoverBg ? props.hoverBg : 'white'}`,
          }
        }} variant="outlined"  >{props.text}</Button>
        </Link>
  )
}

export default Btn;