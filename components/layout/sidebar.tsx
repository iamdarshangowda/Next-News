import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import LanguageIcon from "@mui/icons-material/Language";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MuiDrawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import {
  Box,
  CssBaseline,
  CSSObject,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { Topbar } from "./topbar";

const drawerWidth = 230;

const openedMixin = (theme: Theme): CSSObject => ({
  maxWidth: drawerWidth,
  backgroundColor: theme.palette.background.default,
  border: "none",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  border: "none",
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  backgroundColor: theme.palette.background.default,
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

interface Props {
  props: any;
}
export const Sidebar: React.FunctionComponent<Props> = ({ props }) => {
  const router = useRouter();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };

  const DrawerDataTop = [
    {
      link: "/topstories?tab=All",
      title: "Top Stories",
      icon: <HomeIcon />,
    },
    {
      link: "/aroundtheworld?tab=All",
      title: "Around The World",
      icon: <LanguageIcon />,
    },
    {
      link: "/business",
      title: "Business",
      icon: <BusinessCenterIcon />,
    },
    {
      link: "/health",
      title: "Health",
      icon: <HealthAndSafetyIcon />,
    },
  ];

  const DrawerDataCenter = [
    {
      link: "/covid19",
      title: "Covid 19",
      icon: <LocalHospitalIcon />,
    },
  ];

  const DrawerDataBottom = [
    {
      link: "/entertainment",
      title: "Entertainment",
      icon: <LocalMoviesIcon />,
    },
    {
      link: "/sports",
      title: "Sports",
      icon: <SportsBaseballIcon />,
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* <Topbar
        open={open}
        drawerWidth={drawerWidth}
        handleDrawer={handleDrawer}
      /> */}

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Box
            flexDirection={"row"}
            alignItems={"center"}
            gap={2}
            mr={1}
            sx={{ display: open ? "flex" : "none" }}
          >
            <Image src="/news.png" width={30} height={35} alt="next news" />
            <Typography
              fontSize={18}
              fontWeight={700}
              color={(theme: Theme) => theme.palette.secondary.main}
              lineHeight={"21px"}
            >
              Next News
            </Typography>
          </Box>
          <IconButton
            onClick={handleDrawer}
            sx={{
              mt: 1,
              display: open ? "block" : "none",
            }}
          >
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
            sx={{
              mr: "4px",
              display: open ? "none" : "block",
            }}
          >
            <MenuIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {DrawerDataTop.map((item: any, index: number) => (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <Link href={item.link} legacyBehavior>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                  selected={router.pathname == item.link}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      color: (theme: Theme) => theme.palette.primary.main,
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    sx={{
                      opacity: open ? 1 : 0,
                      color: (theme: Theme) => theme.palette.primary.main,
                      fontWeight: 400,
                      fontSize: "15px",
                      lineHeight: "18px",
                    }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {DrawerDataCenter.map((item: any, index: number) => (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <Link href={item.link} legacyBehavior>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                  selected={router.pathname == item.link}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      color: (theme: Theme) => theme.palette.primary.main,
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    sx={{
                      opacity: open ? 1 : 0,
                      color: (theme: Theme) => theme.palette.primary.main,
                      fontWeight: 400,
                      fontSize: "15px",
                      lineHeight: "18px",
                    }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {DrawerDataBottom.map((item: any, index: number) => (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <Link href={item.link} legacyBehavior>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                  selected={router.pathname == item.link}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      color: (theme: Theme) => theme.palette.primary.main,
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    sx={{
                      opacity: open ? 1 : 0,
                      color: (theme: Theme) => theme.palette.primary.main,
                      fontWeight: 400,
                      fontSize: "15px",
                      lineHeight: "18px",
                    }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" width="100%">
        {props.children}
      </Box>
    </Box>
  );
};
