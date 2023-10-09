import { SectionIdEnum } from "types";
import { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Button,
  Dialog,
  Hidden,
  IconButton,
  Slide,
  ListItemButton,
  ListItemText,
  Collapse,
  List,
} from "@mui/material";
import MuiLink from "@mui/material/Link";
import { ExpandMore, Menu } from "@mui/icons-material";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";
import { NavButton } from "@/styles/theme/lightTheme";
import { useRouter } from "next/router";
import ArrowCircleUpTwoToneIcon from "@mui/icons-material/ArrowCircleUpTwoTone";
import { useSelector, useDispatch } from "react-redux";
import { loginStatus } from "Redux/IsloginSlice";
import { RootState } from "Redux/Store";
import Link from "next/link";
const navigationItems = [
  {
    text: "Profiles",
    to: SectionIdEnum.Profiles,
  },
  {
    text: "Search",
    to: SectionIdEnum.Search,
  },
  {
    text: "Sponsors",
    to: SectionIdEnum.Sponsors,
  },
  {
    text: "Start",
    to: SectionIdEnum.Start,
  },
];
const Transition = React.forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement<any>;
    },
    ref: React.Ref<unknown>
  ) => {
    return <Slide direction="down" ref={ref} {...props} />;
  }
);
Transition.displayName = 'Transition';
const Navigation: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const loginIn = useSelector((state: RootState) => state.auth.value);
  const router = useRouter();
  const dispatch = useDispatch();

  const HiddenHandler = () => setOpen(!open);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 1900) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
useEffect(()=>{
  if(localStorage.getItem("token")){
    dispatch(loginStatus(true));
  }
}, [])
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    return () => {
      window.addEventListener("scroll", toggleVisible);
    };
  }, []);

  const MapItems = navigationItems.map(({ to, text }) => {
    return (
      <Box key={to}>
      <Button sx={{ width: "100%", textAlign: "start" }}>
        <Link href={`/${to}`} legacyBehavior>
        <MuiLink
          key={to}
          underline="none"
          sx={NavButton}
          color={`${
            router.pathname === `/${to}` ? "primary.main" : "primary.dark"
          }`}
          width="100%"
        >
          {text}
        </MuiLink>
        </Link>
      </Button>
    </Box>
    );
  });
  return (
    <>
      <Hidden mdDown>
        <Grid container>
          <Box display="flex" gap={{ md: 2.8, lg: 4 }} pr={3}>
            {MapItems}
            {loginIn === true ? <ProfileSection /> : <OtherSection />}
          </Box>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <IconButton onClick={HiddenHandler}>
          <Menu
            sx={{
              borderRadius: 2,
              color: "primary.light",
              fontSize: 40,
              mr: -2,
              backgroundColor: "primary.main",
            }}
          />
        </IconButton>
        <Box>
          <Button
            onClick={scrollToTop}
            sx={{
              display: visible ? "inline" : "none",
              position: "absolute",
              marginTop: 70,
            }}
          >
            <ArrowCircleUpTwoToneIcon
              sx={{ fontSize: 50, color: "secondary.contrastText" }}
            />
          </Button>
        </Box>

        <Dialog
          open={open}
          fullScreen
          sx={{
            mt: { xs: 7.45, sm: 8.25 },
          }}
          hideBackdrop
          TransitionComponent={Transition}
          PaperProps={{
            sx: {
              boxShadow: "none",
              backgroundColor: "secondary.main",
            },
          }}
        >
          <Box onClick={HiddenHandler}
            sx={{ display: "flex", flexDirection: "column" }}
            mt={3}
            pl={2}
            width="100%"
          >
            {MapItems}
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: "column" }}
            pl={2}
            width="100%"
          >
            {loginIn === true ? <ProfileSection HiddenHandler={HiddenHandler} /> : <OtherSection HiddenHandler={HiddenHandler} />}
          </Box>
        </Dialog>
      </Hidden>
    </>
  );
};

export default Navigation;

const ProfileSection = ({HiddenHandler}:any) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const logout = () => {
    localStorage.clear();
    router.push("/login");
    dispatch(loginStatus(false));
  };

  return (
    <Box display="flex">
      <List
        onMouseLeave={() => setOpen(false)}
        onMouseEnter={() => setOpen(true)}
      >
        <ListItemButton sx={{ mt: "-5px", color: "primary.dark" }}>
          <Grid fontWeight={900} ml={-1} fontSize="18px">
            My profile
          </Grid>
          <ExpandMore />
        </ListItemButton>
        <Collapse in={open}>
          <List
            component="div"
            sx={{
              color: "primary.dark",
              bgcolor: "secondary.main",
              position: "absolute",
              zIndex: 1,
            }}
          >
            <Link href="/dashboard" legacyBehavior>
              <ListItemText  onClick={HiddenHandler} primary="Dashboard" sx={{padding:"2px 7px", "&:hover": {
              color:"primary.main"},cursor:"pointer"}} />
            </Link>
            <Link href="/dashboard/money/received" legacyBehavior>
              <ListItemText  onClick={HiddenHandler} primary="View My Money" sx={{padding:"2px 7px", "&:hover": {
              color:"primary.main"},cursor:"pointer"}} />
            </Link>
            <Link href="/dashboard/my-sponsor-pages" legacyBehavior>
              <ListItemText  onClick={HiddenHandler} primary="My Sponsor Page" sx={{padding:"2px 5px", "&:hover": {
              color:"primary.main"},cursor:"pointer"}} />
            </Link>
            <Link href="/dashboard/get-paid-now" legacyBehavior>
              <ListItemText  onClick={HiddenHandler} primary="Get Paid" sx={{padding:"2px 7px", "&:hover": {
              color:"primary.main"},cursor:"pointer"}} />
            </Link>
            <Box onClick={logout}>
              <ListItemText  onClick={HiddenHandler} primary="Logout" sx={{padding:"2px 7px", "&:hover": {
              color:"primary.main"}, cursor:"pointer"}} />
            </Box>
          </List>
        </Collapse>
      </List>
    </Box>
  );
};
const OtherSection = ({HiddenHandler}:any) => {
  const router = useRouter();
  return (
    <>
      <Box>
        <Button sx={{ width: "100%", textAlign: "start" }}>
          <Link href={`/login`} legacyBehavior>
          <MuiLink
            underline="none"
            sx={NavButton}
            color={`${
              router.pathname === `/login` ? "primary.main" : "primary.dark"
            }`}
            width="100%"
            onClick={HiddenHandler}
          >
            Login
          </MuiLink>
          </Link>
        </Button>
      </Box>
      <Box>
        <Button sx={{ width: "100%", textAlign: "start" }}>
          <Link href={`/join`} legacyBehavior>
          <MuiLink
            underline="none"
            sx={NavButton}
            color={`${
              router.pathname === `/join` ? "primary.main" : "primary.dark"
            }`}
            width="100%"
            onClick={HiddenHandler}
          >
            Join
          </MuiLink>
          </Link>
        </Button>
      </Box>
    </>
  );
};
