import { ReactNode } from "react";
import { Footer } from "../footer";
import { Header } from "../header/Header";
import { StyledStack } from "./style";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <StyledStack>{children}</StyledStack>
      <Footer />
    </>
  );
};
