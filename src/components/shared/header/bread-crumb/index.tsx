import {
  StyledActiveBreadCrumbLink,
  StyledBreadCrumbContainer,
  StyledBreadCrumbLink,
} from "./styles";

export const BreadCrumb = () => {
  return (
    <StyledBreadCrumbContainer>
      <StyledBreadCrumbLink underline='hover' href='/'>
        Home
      </StyledBreadCrumbLink>
      <StyledBreadCrumbLink underline='hover' href='/'>
        Won Auctions
      </StyledBreadCrumbLink>
      <StyledActiveBreadCrumbLink underline='hover'>
        Auction Calender
      </StyledActiveBreadCrumbLink>
    </StyledBreadCrumbContainer>
  );
};
