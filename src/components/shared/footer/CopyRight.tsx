/* eslint-disable @next/next/no-img-element */
import { Divider } from "@mui/material";
import {
  StyledCopyRightStack,
  StyledIconsStack,
  StyledPreFooterImage,
  StyledTypography,
} from "./styles";
export const CopyRight = () => {
  return (
    <>
      <Divider />
      <StyledCopyRightStack>
        <StyledIconsStack>
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
        </StyledIconsStack>
        <StyledTypography size={12}>
          2022 © Emirates Auction LLC
        </StyledTypography>
      </StyledCopyRightStack>
    </>
  );
};
