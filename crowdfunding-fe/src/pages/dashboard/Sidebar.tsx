import { Box, Button, Dialog, Grid, Hidden, Slide } from "@mui/material";
import React, { useEffect, useState } from "react";
import { TransitionProps } from "@mui/material/transitions";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useRouter } from "next/router";
import Link from "next/link";

const Transition = React.forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement<any>;
    },
    ref: React.Ref<unknown>
  ) => {
    return <Slide direction="right" ref={ref} {...props} />;
  }
);
Transition.displayName = 'Transition';
const SideBar = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const HiddenHandler = () => setOpen(!open);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 1900) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

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

  return (
    <>
      <Hidden mdDown>
        <SidebarContant />
      </Hidden>
      <Hidden mdUp>
        <Grid container>
          <Button
            onClick={HiddenHandler}
            sx={{
              color: "secondary.main",
              fontSize: 20,
              backgroundColor: "primary.main",
              "&:hover": {
                backgroundColor: "primary.main",
                color: "secondary.main",
              },
            }}
          >
            Dashboard Menu
          </Button>
        </Grid>
        <Box>
          <Button
            onClick={scrollToTop}
            sx={{
              display: visible ? "inline" : "none",
              position: "absolute",
              marginTop: 70,
            }}
          ></Button>
        </Box>
        <Dialog
          open={open}
          fullScreen
          sx={{
            width: 205,
            mt: { xs: 12, sm: 12 },
          }}
          hideBackdrop
          TransitionComponent={Transition}
        >
          <SidebarContant />
        </Dialog>
      </Hidden>
    </>
  );
};

export default SideBar;

export const SidebarContant = () => {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Grid
      container
      item={true}
      bgcolor="secondary.main"
      md={2}
      display="flex"
      alignItems="center"
      flexDirection="column"
      marginBottom={1}
    >
      <List
        sx={{
          borderBottom: "2px solid",
          borderColor: "secondary.contrastText",
        }}
        component="nav"
        subheader={
          <ListSubheader
            component="h1"
            id="nested-list-subheader"
            style={{
              textAlign: "center",
              fontSize: "20px",
            }}
          >
            MY ACCOUNT
          </ListSubheader>
        }
      >
        <Link href="/dashboard" legacyBehavior>
          <ListItemButton
            sx={{
              backgroundColor: `${
                router.pathname === `/dashboard`
                  ? "primary.main"
                  : "sacondary.main"
              }`,
              color: `${
                router.pathname === `/dashboard`
                  ? "secondary.main"
                  : "primary.dark"
              }`,
              "&:hover": { color: "primary.dark" },
              borderBottom: "2px solid",
              borderColor: "secondary.contrastText",
            }}
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary=" Dashboard" />
          </ListItemButton>
        </Link>

        <Link href="/dashboard/my-sponsor-pages" legacyBehavior>
          <ListItemButton
            sx={{
              backgroundColor: `${
                router.pathname === `/dashboard/my-sponsor-pages`
                  ? "primary.main"
                  : "sacondary.main"
              }`,
              color: `${
                router.pathname === `/dashboard/my-sponsor-pages`
                  ? "secondary.main"
                  : "primary.dark"
              }`,
              "&:hover": { color: "primary.dark" },
              borderBottom: "2px solid",
              borderColor: "secondary.contrastText",
            }}
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="My Sponsor Page" />
          </ListItemButton>
        </Link>
        <Link href="/dashboard/my-link" legacyBehavior>
          <ListItemButton
            sx={{
              backgroundColor: `${
                router.pathname === `/dashboard/my-link`
                  ? "primary.main"
                  : "sacondary.main"
              }`,
              color: `${
                router.pathname === `/dashboard/my-link`
                  ? "secondary.main"
                  : "primary.dark"
              }`,
              "&:hover": { color: "primary.dark" },
              borderBottom: "2px solid",
              borderColor: "secondary.contrastText",
            }}
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="My Link" />
          </ListItemButton>
        </Link>

        <ListItemButton
          onClick={handleClick}
          sx={{
            borderBottom: "2px solid",
            borderColor: "secondary.contrastText",
          }}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="View My Money" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link href="/dashboard/money/received" legacyBehavior>
              <ListItemButton
                sx={{
                  backgroundColor: `${
                    router.pathname === `/dashboard/money/received`
                      ? "primary.main"
                      : "sacondary.main"
                  }`,
                  color: `${
                    router.pathname === `/dashboard/money/received`
                      ? "secondary.main"
                      : "primary.dark"
                  }`,
                  "&:hover": { color: "primary.dark" },
                  pl: 4,
                  borderBottom: "2px solid",
                  borderColor: "secondary.contrastText",
                }}
              >
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText primary=" Money In" />
              </ListItemButton>
            </Link>
            <Link href="/dashboard/money/sent" legacyBehavior>
              <ListItemButton
                sx={{
                  backgroundColor: `${
                    router.pathname === `/dashboard/money/sent`
                      ? "primary.main"
                      : "sacondary.main"
                  }`,
                  color: `${
                    router.pathname === `/dashboard/money/sent`
                      ? "secondary.main"
                      : "primary.dark"
                  }`,
                  "&:hover": { color: "primary.dark" },
                  pl: 4,
                  borderBottom: "2px solid",
                  borderColor: "secondary.contrastText",
                }}
              >
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText primary=" Money Out" />
              </ListItemButton>
            </Link>
          </List>
        </Collapse>
        <Link href="/dashboard/my-profiles" legacyBehavior>
          <ListItemButton
            sx={{
              backgroundColor: `${
                router.pathname === `/dashboard/my-profiles`
                  ? "primary.main"
                  : "sacondary.main"
              }`,
              color: `${
                router.pathname === `/dashboard/my-profiles`
                  ? "secondary.main"
                  : "primary.dark"
              }`,
              "&:hover": { color: "primary.dark" },
              borderBottom: "2px solid",
              borderColor: "secondary.contrastText",
            }}
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="My Profile" />
          </ListItemButton>
        </Link>
        <Link href="/dashboard/get-paid-now" legacyBehavior>
          <ListItemButton
            sx={{
              backgroundColor: `${
                router.pathname === `/dashboard/get-paid-now`
                  ? "primary.main"
                  : "sacondary.main"
              }`,
              color: `${
                router.pathname === `/dashboard/get-paid-now`
                  ? "secondary.main"
                  : "primary.dark"
              }`,
              "&:hover": { color: "primary.dark" },
              borderBottom: "2px solid",
              borderColor: "secondary.contrastText",
            }}
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Get Paid" />
          </ListItemButton>
        </Link>
        <Link href="/dashboard/change-password" legacyBehavior>
          <ListItemButton
            sx={{
              backgroundColor: `${
                router.pathname === `/dashboard/change-password`
                  ? "primary.main"
                  : "sacondary.main"
              }`,
              color: `${
                router.pathname === `/dashboard/change-password`
                  ? "secondary.main"
                  : "primary.dark"
              }`,
              "&:hover": { color: "primary.dark" },
              borderBottom: "2px solid",
              borderColor: "secondary.contrastText",
            }}
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Change Password" />
          </ListItemButton>
        </Link>
        <Link href="/dashboard/change-email" legacyBehavior>
          <ListItemButton
            sx={{
              backgroundColor: `${
                router.pathname === `/dashboard/change-email`
                  ? "primary.main"
                  : "sacondary.main"
              }`,
              color: `${
                router.pathname === `/dashboard/change-email`
                  ? "secondary.main"
                  : "primary.dark"
              }`,
              "&:hover": { color: "primary.dark" },
              borderBottom: "2px solid",
              borderColor: "secondary.contrastText",
            }}
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Change Email" />
          </ListItemButton>
        </Link>
        <Link href="/dashboard/dream-session" legacyBehavior>
          <ListItemButton
            sx={{
              backgroundColor: `${
                router.pathname === `/dashboard/dream-session`
                  ? "primary.main"
                  : "sacondary.main"
              }`,
              color: `${
                router.pathname === `/dashboard/dream-session`
                  ? "secondary.main"
                  : "primary.dark"
              }`,
              "&:hover": { color: "primary.dark" },
              borderBottom: "2px solid",
              borderColor: "secondary.contrastText",
            }}
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Dream Session" />
          </ListItemButton>
        </Link>
        <Link href="/dashboard/delete-account" legacyBehavior>
          <ListItemButton
            sx={{
              backgroundColor: `${
                router.pathname === `/dashboard/delete-account`
                  ? "primary.main"
                  : "sacondary.main"
              }`,
              color: `${
                router.pathname === `/dashboard/delete-account`
                  ? "secondary.main"
                  : "primary.dark"
              }`,
              "&:hover": { color: "primary.dark" },
            }}
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Delete account" />
          </ListItemButton>
        </Link>
      </List>
    </Grid>
  );
};
