import { Grid } from '@mui/material'
import MuiLink from "@mui/material/Link";
import css from '../../styles/Footer.module.css'
import React from 'react'
import Link from 'next/link';


const Footerlink = ({ text, to }: any) => {
    return (
        <>
            <Grid item className={css.grid} xs={6}>
                <Link href={to} legacyBehavior>
                <MuiLink sx={{ textDecoration: "none", cursor:"pointer" }} >
                    &gt; {text}
                </MuiLink>
                </Link>
            </Grid>
        </>
    )
}

export default Footerlink;