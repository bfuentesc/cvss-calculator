import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { DarkMode, LightMode } from "@mui/icons-material";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

const pages = [
  { name: "Quick CVSS Calculator", path: "/quick" },
  { name: "Full CVSS Calculator", path: "/full" },
  { name: "CVSS Vector Input", path: "/vector-input" },
];

export interface NavBarProps {
  darkMode: boolean;
  handleDarkModeChange: (value: boolean) => void;
}

const NavBar = ({ darkMode, handleDarkModeChange }: NavBarProps) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navigate = useNavigate(); // Hook para obtener la función de navegación

  // Función de flecha para navegar
  const handleNavigate = (path: string) => {
    navigate(path); // Navegar al path especificado
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            CVSS Calculator
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
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
              }}
            >
              {pages.map(({ name, path }) => (
                <MenuItem key={name} onClick={() => handleNavigate(path)}>
                  <Typography textAlign="center">{name}</Typography>
                </MenuItem>
              ))}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  py: "6px",
                }}
              >
                <ToggleButtonGroup
                  color="primary"
                  size="small"
                  value={darkMode}
                  exclusive
                  onChange={(event, value: boolean) => {
                    console.log(value);
                    if (value === null) return;
                    handleDarkModeChange(value);
                  }}
                  aria-label="text selection"
                >
                  <ToggleButton value={false}>
                    <LightMode fontSize="small" />
                  </ToggleButton>
                  <ToggleButton value={true}>
                    <DarkMode fontSize="small" />
                  </ToggleButton>
                </ToggleButtonGroup>
              </Box>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            CVSS Calculator
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map(({ name, path }) => (
              <Button
                key={name}
                onClick={() => handleNavigate(path)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {name}
              </Button>
            ))}

            <IconButton
              onClick={() => handleDarkModeChange(!darkMode)}
              sx={{ my: 2, color: "white", display: "block", ml: "auto" }}
            >
              {darkMode ? (
                <DarkMode fontSize="small" />
              ) : (
                <LightMode fontSize="small" />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
