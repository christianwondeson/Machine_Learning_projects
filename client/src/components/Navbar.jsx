import React from "react";
import {
  LightModeOutline,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutline,
  ArrowDropDownOutlined,
} from "@mui/icons-material";

import {
  AppBar,
  IconButton,
  InputBase,
  Toolbar,
  useTheme,
} from "@mui/material";
import FlexBetween from "./FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "state";
import profileImage from "assets/me_ai.jpg";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* left side of our dashboard */}
        <FlexBetween>
          <IconButton onClick={() => console.log("open/close sidebar")}>
            <MenuIcon />
          </IconButton>
          <FlexBetween
            background={theme.palette.background.alt}
            borderRadius={"9px"}
            gap={"3rem"}
            p="0.1rem 1.5rem"
          >
            <InputBase placeholder="Search ..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
