import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { ActionBar } from "./action-bar";
import { BreadCrumb } from "./bread-crumb";
import MainNavBar from "./main-nav-bar";
import MenuIcon from "@mui/icons-material/Menu";

export const Header = () => {
  return (
    <>
      <ActionBar />
      <MainNavBar />
      <BreadCrumb />
    </>
  );
};
