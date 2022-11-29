import {
  StyledPreFooterIconStack,
  StyledPreFooterImage,
  StyledPreFooterStack,
  StyledPreFooterTypography,
} from "./styles";

export const PreFooter = () => {
  return (
    <StyledPreFooterStack>
      <StyledPreFooterTypography>
        DOWNLOAD EMIRATES AUCTIONS FREE APP Get access to exclusive offers!
      </StyledPreFooterTypography>
      <StyledPreFooterIconStack>
        <StyledPreFooterImage src={"assets/Hawawei.png"} />
        <StyledPreFooterImage src={"assets/GooglePlay.png"} />
        <StyledPreFooterImage src={"assets/AppStore.png"} />
      </StyledPreFooterIconStack>
    </StyledPreFooterStack>
  );
};
