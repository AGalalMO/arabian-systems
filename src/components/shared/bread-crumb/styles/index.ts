import { Breadcrumbs, Link, styled } from "@mui/material";

export const StyledBreadCrumbContainer = styled(Breadcrumbs)({
  marginTop: "50px",
  marginBottom: "18px",
  paddingLeft: "70px",
});
export const StyledBreadCrumbLink = styled(Link)({
  fontSize: "14px",
  color: "inherit",
});
export const StyledActiveBreadCrumbLink = styled(StyledBreadCrumbLink)(
  ({ theme }) => ({
    color: theme.palette.grey[400],
  })
);
