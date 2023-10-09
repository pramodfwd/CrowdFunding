import React from 'react'
import { LinkedIn, YouTube } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import MuiLink from "@mui/material/Link";

const SocialMediaLink = () => {
    return (
        <>
            <MuiLink href="https://mui.com/">
                <FacebookIcon sx={{ color: "#3b5998" }} />
            </MuiLink>
            <MuiLink href="https://mui.com/">
                <InstagramIcon sx={{ color: " #e95950" }} />
            </MuiLink>
            <MuiLink href="https://mui.com/">
                <TwitterIcon sx={{ color: "#1DA1F2" }} />
            </MuiLink>

            <MuiLink href="https://mui.com/">
                <LinkedIn sx={{ color: "#0077b5" }} />
            </MuiLink>
            <MuiLink href="https://mui.com/">
                <YouTube sx={{ color: "red" }} />
            </MuiLink></>
    )
}

export default SocialMediaLink;