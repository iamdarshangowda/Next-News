import React, { useState } from "react";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Chip,
  IconButton,
  styled,
  Theme,
  Toolbar,
  Typography,
} from "@mui/material";
import { CustomInputFeild } from "../common/input-feilds/custom-input-feild";
import { PrimaryButton } from "../common/buttons/primaryButton";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface TopBarProps {
  drawerWidth: number;
  open: boolean;
  handleDrawer: any;
}

export const Topbar: React.FunctionComponent<TopBarProps> = ({
  drawerWidth,
  open,
  handleDrawer,
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleCovidNews = () => {};

  interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
  }

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })<AppBarProps>(({ theme, open }) => ({
    backgroundColor: theme.palette.background.default,
    boxShadow: "none",
    color: theme.palette.secondary.main,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawer}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Box
          display={"flex"}
          gap={4}
          width="100%"
          justifyContent={"space-between"}
        >
          <CustomInputFeild
            placeholder="Search for news.."
            sx={{ maxWidth: "495px", height: "48px" }}
            icon={<SearchIcon />}
          />
          <PrimaryButton
            text="Latest news on"
            subText="Covid 19"
            loading={loading}
            variant={"outlined"}
            onclick={handleCovidNews}
            sx={{
              maxWidth: "256px",
              height: "46px",
              borderRadius: "8px",
              background: (theme: Theme) => theme.palette.background.default,
            }}
            icon={<ArrowForwardIcon />}
            textColor={(theme: Theme) => theme.palette.primary.main}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
