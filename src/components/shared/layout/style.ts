import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
export const StyledStack = styled(Stack)(({ theme }) => ({
  marginLeft: "70px",
  marginRight: "70px",
  [theme.breakpoints.down("md")]: {
   margin:'0px'
  },
}));
