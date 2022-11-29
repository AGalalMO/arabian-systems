import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { AppBar, Box, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledBarContainer = styled(Stack)(({ theme }) => ({
  background: "white",
  width: "100%",
  padding: "16px 70px 16px 70px",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}));
export const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[300],
  fontSize: 16,

  "&:hover": {
    color: theme.palette.primary.main,
    cursor: "pointer",
  },
}));
export const StyledCountSpan = styled("span")(({ theme }) => ({
  padding: "3px 5px 3px 5px",
  borderRadius: "10px",
  color: "white",
  marginLeft: "8px",
  marginRight: "8px",
  background: theme.palette.grey[400],
  "&:hover": {
    background: theme.palette.primary.main,
    cursor: "pointer",
  },
}));
export const NavigationElementStack = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  paddingRight: "24px",
  borderColor: `${theme.palette.grey[600]} !important`,
}));
export const StyledNavigationStack = styled(NavigationElementStack)<{
  withBorder?: boolean;
}>`
  border-right: ${(props) => (props.withBorder == false ? "0px" : "1px solid")};
`;
export const StyledExpandIcon = styled(KeyboardArrowDownOutlinedIcon)(
  ({ theme }) => ({
    color: theme.palette.grey[400],
  })
);

export const StyledAppBar = styled(AppBar)({
  background: "white",
  boxShadow: "none",
  position: "relative",
});
export const StyledWebStack = styled(Stack)(({ theme }) => ({
  width: "100%",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
export const StyledNavContainer = styled(Container)({
  padding: "0px !important",
});
export const StyledMobileBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "flex",
  },
}));
