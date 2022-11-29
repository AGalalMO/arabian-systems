import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
export const StyledPreFooterStack = styled(Stack)(({ theme }) => ({
  background: theme.palette.grey[200],
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: "16px 70px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    spacing: 1,
    padding: "16px",
  },
}));
export const StyledMainFooterStack = styled(StyledPreFooterStack)(
  ({ theme }) => ({
    padding: "40px 70px",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "row",
    background: theme.palette.grey[900],
  })
);
export const StyledPreFooterTypography = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: "500",
  maxWidth: "385px",
  color: theme.palette.grey[400],
}));
export const StyledPreFooterIconStack = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));
export const StyledPreFooterImage = styled("img")<{
  width?: number;
  height?: number;
}>(({ theme, width, height }) => ({
  width: `${width ? width : 128}px`,
  height: `${height ? height : 38}px`,
  marginLeft: "8px",
  [theme.breakpoints.down("md")]: {
    marginLeft: "0px",
    marginBottom: "8px",
  },
}));

export const StyledMainFooterHeadTypography = styled(Typography)<{
  size?: number;
}>(
  ({ theme, size }) => `
        font-size:${size ? size : 18}px;
        color: ${theme.palette.grey[300]}

  `
);
export const StyledTypography = styled(Typography)<{
  size?: number;
}>(
  ({ theme, size }) => `
        font-size:${size}px;
        color: ${theme.palette.grey[800]}

  `
);
export const StyledLightTypography = styled(Typography)<{
  size?: number;
}>(
  ({ theme, size }) => `
        font-size:${size}px;
        color: ${theme.palette.grey[100]}

  `
);
export const StyledInfoIcon = styled(InfoOutlinedIcon)(({ theme }) => ({
  color: theme.palette.grey[300],
  marginRight: "8px",
}));
export const StyledMailIcon = styled(EmailOutlinedIcon)(({ theme }) => ({
  color: theme.palette.grey[300],
  marginRight: "8px",
}));
export const StyledResponsiveStack = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    paddingBottom: "8px",
  },
}));
export const StyledIconsStack = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  [theme.breakpoints.down('md')]: {
    paddingBottom: '8px',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  }
}))
export const StyledCopyRightStack = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  background: theme.palette.grey[900],
  padding: "20px 70px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));
