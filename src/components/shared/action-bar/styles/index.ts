import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledActionBarContainer = styled(Stack)(({ theme }) => ({
  background: theme.palette.grey[200],
  width: "100%",
  padding: "16px 70px 16px 70px",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}));
export const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[400],
  fontSize: 14,
  "&:hover": {
    textDecoration: "underline",
    color: theme.palette.primary.main,
    cursor: "pointer",
  },
}));
