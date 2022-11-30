import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
export const StyledHeaderStack = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: "36px",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));
export const StyledHeaderTypography = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  color: theme.palette.grey[400],
}));
export const StyledControlsStack = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "center",
  color: theme.palette.grey[300],
}));
export const StyledControlsTypography = styled(Typography)(({ theme }) => ({
  fontWeight: "700",
  fontSize: "18px",
  marginLeft: "16px",
  marginRight: "16px",
  alignItems: "center",
}));
export const StyledCalenderContainerStack = styled(Stack)(({ theme }) => ({
  borderRadius: 6,
  background: theme.palette.grey["700"],
  boxShadow: `0px 3px 6px #4E4E4E29`,
  flexDirection: "row",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));
export const StyledChevronLeftOutlinedIcon = styled(ChevronLeftOutlinedIcon)({
  cursor: "pointer",
});
export const StyledChevronRightOutlinedIcon = styled(ChevronRightOutlinedIcon)({
  cursor: "pointer",
});
