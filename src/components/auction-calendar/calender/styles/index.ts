import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledDayHeaderStack = styled(Stack)(({ theme }) => ({
  width: "100%",
  height: "155px",
  borderRight: `1px solid ${theme.palette.grey[600]}`,
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));
export const StyledDayNumberTypography = styled(Typography)<{
  sameDate?: boolean;
}>(
  ({ theme, sameDate }) => `
    font-weight:700;
        font-size:62px;
        color: ${
          sameDate ? theme.palette.primary.main : theme.palette.grey[400]
        }

  `
);
export const StyledWeekDayTypography = styled(Typography)(({ theme }) => ({
  fontWeight: "700",
  fontSize: "18px",
  color: theme.palette.grey[400],
}));

export const StyledActionEventStack = styled(Stack)<{
  empty?: boolean;
}>(
  ({ theme, empty }) => `
  width: 100%;
  height: 177px;
  background: ${empty ? theme.palette.grey[700] : "white"};
  padding: 20px 13px;
  border: 1px solid ${theme.palette.grey[600]};
  border-top: 0px;
  border-left: 0px;
  ${theme.breakpoints.down("md")} {
    width:100%;
    align-items:center;
  }


  `
);
export const StyledActionDateTypography = styled(Typography)(({ theme }) => ({
  fontWeight: "700",
  fontSize: "12px",
  opacity: "0.7",
  marginBottom: "9px",
  color: theme.palette.grey[400],
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
  "&:hover": {
    textDecoration: "underline",
    color: theme.palette.primary.main,
    cursor: "pointer",
  },
}));
export const StyledActionTitleTypography = styled(Typography)(({ theme }) => ({
  fontWeight: "500",
  fontSize: "17px",
  marginBottom: "9px",
  color: theme.palette.grey[500],
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
  "&:hover": {
    textDecoration: "underline",
    color: theme.palette.primary.main,
    cursor: "pointer",
  },
}));
export const StyledActionTypeTypography = styled(Typography)(({ theme }) => ({
  fontWeight: "600",
  fontSize: "14px",
  marginBottom: "9px",
  color: theme.palette.grey[300],
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
  "&:hover": {
    textDecoration: "underline",
    color: theme.palette.primary.main,
    cursor: "pointer",
  },
}));
export const StyledItemsCountStack = styled(Stack)(({ theme }) => ({
  padding: "8px 13px",
  maxWidth: "95px",
  background: theme.palette.grey[100],
  alignItems: "center",
  color: "white",
  justifyContent: "center",
  borderRadius: "18px",
  "&:hover": {
    background: theme.palette.primary.main,
    cursor: "pointer",
  },
}));
export const StyledCountTypography = styled(Typography)({
  fontSize: "12px",
  fontWeight: "700",
  color: "white",
});
