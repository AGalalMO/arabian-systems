import { Stack } from "@mui/material";
import { StyledActionBarContainer, StyledTypography } from "./styles";
export const ActionBar = () => {
  return (
    <StyledActionBarContainer>
      <Stack direction={"row"} spacing={2}>
        <StyledTypography>About EA</StyledTypography>
        <StyledTypography>Auction Calendar</StyledTypography>
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <StyledTypography>Support</StyledTypography>
        <StyledTypography>Contact Us</StyledTypography>
        <StyledTypography>العربية</StyledTypography>
      </Stack>
    </StyledActionBarContainer>
  );
};
