import { Badge, Stack } from "@mui/material";
import {
  StyledBarContainer,
  StyledCountSpan,
  StyledExpandIcon,
  StyledNavigationStack,
  StyledTypography,
} from "./styles";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GavelIcon from "@mui/icons-material/Gavel";
export const MainNavBar = () => {
  return (
    <StyledBarContainer>
      <img src='assets/Logo.png' height={"48px"} width={"186px"} />
      <Stack direction={"row"} alignItems={"center"} spacing={2}>
        <NavigationElement count={325} label={"Motors"} />
        <NavigationElement count={1000} label={"Numbers"} />
        <NavigationElement count={1000} label={"Properties"} />
        <NavigationElement count={1000} label={"Surplus"} withBorder={false} />
      </Stack>
      <Stack direction={"row"} spacing={3}>
        <SearchIcon color='action' />

        <Badge badgeContent={3} color={"error"}>
          <GavelIcon color='action' />
        </Badge>
        <ShoppingCartIcon color='action' />
        <PersonIcon color='action' />
      </Stack>
    </StyledBarContainer>
  );
};

const NavigationElement = ({
  label,
  count,
  withBorder,
}: {
  label: string;
  count: number;
  withBorder?:boolean
}) => {
  return (
    <StyledNavigationStack withBorder={withBorder}>
      <StyledTypography>{label}</StyledTypography>
      <StyledCountSpan>{count}</StyledCountSpan>
      <StyledExpandIcon />
    </StyledNavigationStack>
  );
};
