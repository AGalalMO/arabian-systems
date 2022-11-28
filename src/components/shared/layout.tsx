import { Box } from "@mui/material";
import { ReactNode } from "react";
import { ActionBar } from "./action-bar";
import { BreadCrumb } from "./bread-crumb";
import { MainNavBar } from "./main-nav-bar";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ActionBar />
      <MainNavBar />
      <BreadCrumb />
      <Box ml={"70px"} mr={"70px"}>
        {children}
      </Box>
    </>
  );
};
