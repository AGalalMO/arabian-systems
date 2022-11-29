import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Badge,
  Stack,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  StyledAppBar,
  StyledBarContainer,
  StyledCountSpan,
  StyledExpandIcon,
  StyledMobileBox,
  StyledNavContainer,
  StyledNavigationStack,
  StyledTypography,
  StyledWebStack,
} from "./styles";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GavelIcon from "@mui/icons-material/Gavel";
const pages = [
  { name: "Motors", count: 325 },
  { name: "Numbers", count: 1000 },
  { name: "Properties", count: 1000 },
  { name: "Surplus", count: 1000 },
];

function MainNavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <StyledAppBar>
        <StyledNavContainer maxWidth='xl'>
          <Toolbar disableGutters>
            <StyledWebStack>
              <StyledBarContainer>
                <img src='assets/Logo.png' height={"48px"} width={"186px"} />
                <Stack direction={"row"} alignItems={"center"} spacing={2}>
                  {pages.map((item) => (
                    <NavigationElement
                      key={item.name}
                      count={item.count}
                      label={item.name}
                    />
                  ))}
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
            </StyledWebStack>

            <StyledMobileBox>
              <IconButton
                size='large'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='default'>
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}>
                {pages.map((item) => (
                  <MenuItem key={item.name}>
                    <NavigationElement
                      count={item.count}
                      label={item.name}
                      withBorder={false}
                    />
                  </MenuItem>
                ))}
                <Stack direction={"column"} alignItems={"center"} mt={"20px"}>
                  <Stack direction={"row"} spacing={3}>
                    <SearchIcon color='action' />
                    <Badge badgeContent={3} color={"error"}>
                      <GavelIcon color='action' />
                    </Badge>
                    <ShoppingCartIcon color='action' />
                    <PersonIcon color='action' />
                  </Stack>
                </Stack>
              </Menu>
            </StyledMobileBox>
          </Toolbar>
        </StyledNavContainer>
      </StyledAppBar>
    </>
  );
}
export default MainNavBar;

const NavigationElement = ({
  label,
  count,
  withBorder,
}: {
  label: string;
  count: number;
  withBorder?: boolean;
}) => {
  return (
    <StyledNavigationStack withBorder={withBorder}>
      <StyledTypography>{label}</StyledTypography>
      <StyledCountSpan>{count}</StyledCountSpan>
      <StyledExpandIcon />
    </StyledNavigationStack>
  );
};
