import { Stack } from "@mui/material";
import { CopyRight } from "./CopyRight";
import { MainFooter } from "./MainFooter";
import { PreFooter } from "./PreFooter";

export const Footer = () => {
  return (
    <Stack mt={'100px'}>
      <PreFooter />
      <MainFooter />
      <CopyRight />
    </Stack>
  );
};
