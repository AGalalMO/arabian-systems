/* eslint-disable @next/next/no-img-element */
import { Stack } from "@mui/material";
import {
  StyledInfoIcon,
  StyledLightTypography,
  StyledMailIcon,
  StyledMainFooterHeadTypography,
  StyledMainFooterStack,
  StyledResponsiveStack,
  StyledTypography,
} from "./styles";
export const MainFooter = () => {
  return (
    <StyledMainFooterStack>
      <Stack spacing={1}>
        <StyledMainFooterHeadTypography>
          Emirates Auction:
        </StyledMainFooterHeadTypography>
        <StyledTypography size={14}>About us</StyledTypography>
        <StyledTypography size={14}>Terms and conditions</StyledTypography>
        <StyledTypography size={14}>Privacy and policy</StyledTypography>
        <StyledTypography size={14}>Sell with us</StyledTypography>
      </Stack>
      <Stack spacing={1}>
        <StyledMainFooterHeadTypography>
          Support:
        </StyledMainFooterHeadTypography>

        <Stack>
          <StyledTypography size={20}>
            We ‘re always here to help.
          </StyledTypography>
          <StyledMainFooterHeadTypography size={14}>
            Reach out to us through any of these support channels
          </StyledMainFooterHeadTypography>
        </Stack>
        <StyledResponsiveStack>
          <Stack direction={"row"}>
            <StyledInfoIcon />
            <Stack>
              <StyledMainFooterHeadTypography size={12}>
                HELP CENTER
              </StyledMainFooterHeadTypography>
              <StyledTypography size={14}>
                support.emiratesauction.com
              </StyledTypography>
            </Stack>
          </Stack>
          <Stack direction={"row"}>
            <StyledMailIcon />
            <Stack>
              <StyledMainFooterHeadTypography size={12}>
                EMAIL SUPPORT
              </StyledMainFooterHeadTypography>
              <StyledTypography size={14}>
                cs@emiratesauction.com
              </StyledTypography>
            </Stack>
          </Stack>
        </StyledResponsiveStack>
      </Stack>

      <Stack spacing={1}>
        <img src='assets/LogoWhite.png' width={200} />
        <StyledLightTypography size={16}>
          Connect with us{" "}
        </StyledLightTypography>
        <Stack direction={"row"} spacing={1}>
          <img alt={'social-icon'} src='assets/facebook.png' width={34} height={34} />
          <img alt={'social-icon'} src='assets/twitter.png' width={34} height={34} />
          <img alt={'social-icon'} src='assets/instagram.png' width={34} height={34} />
          <img alt={'social-icon'} src='assets/youtube.png' width={34} height={34} />
          <img alt={'social-icon'} src='assets/linkedin.png' width={34} height={34} />
          <img alt={'social-icon'} src='assets/tiktok.png' width={34} height={34} />
          <img alt={'social-icon'} src='assets/snapchat.png' width={34} height={34} />
        </Stack>
          </Stack>
    </StyledMainFooterStack>
  );
};
