/* eslint-disable @next/next/no-img-element */
import { Divider, Stack } from "@mui/material";
import {
  StyledCopyRightStack,
  StyledInfoIcon,
  StyledLightTypography,
  StyledMailIcon,
  StyledMainFooterHeadTypography,
  StyledMainFooterStack,
  StyledPreFooterImage,
  StyledResponsiveStack,
  StyledTypography,
} from "./styles";
export const CopyRight = () => {
  return (
    <>
      <Divider />
      <StyledCopyRightStack>
        <StyledResponsiveStack>
          <StyledPreFooterImage
            width={64}
            height={24}
            alt='verifiedBy'
            src={"assets/MasterCard.png"}
          />
          <StyledPreFooterImage
            width={64}
            height={24}
            alt='verifiedBy'
            src={"assets/masterSecure.png"}
          />
          <StyledPreFooterImage
            width={64}
            height={24}
            alt='verifiedBy'
            src={"assets/SSL.png"}
          />
          <StyledPreFooterImage
            width={64}
            height={24}
            alt='verifiedBy'
            src={"assets/Verified.png"}
          />
          <StyledPreFooterImage
            width={64}
            height={24}
            alt='verifiedBy'
            src={"assets/Visa.png"}
          />
          <StyledPreFooterImage
            width={64}
            height={24}
            alt='verifiedBy'
            src={"assets/verify2.png"}
          />
          <StyledPreFooterImage
            width={64}
            height={24}
            alt='verifiedBy'
            src={"assets/McAfee.png"}
          />
        </StyledResponsiveStack>
        <StyledTypography size={12}>
          2022 © Emirates Auction LLC
        </StyledTypography>
      </StyledCopyRightStack>
    </>
  );
};
