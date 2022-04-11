import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Form from "../form/index.jsx";

export default function NewsAppBar() {
  const [navbar, setNavbar] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const BurgerClick = () => {
    setNavbar(true);
  };
  const CloseClick = () => {
    setNavbar(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={BurgerClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            World Latest News
          </Typography>
          <Button
            variant="contained"
            color="warning"
            style={{ fontWeight: "bold" }}
            onClick={handleClickOpen}
          >
            Login
            <LoginIcon style={{ margin: "0px 4px" }} />
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogActions>
              <CloseIcon id="back-arrow" onClick={handleClose} />
            </DialogActions>
            <DialogContent>
              <Form />
            </DialogContent>
          </Dialog>
        </Toolbar>
      </AppBar>
      {navbar ? (
        <div className="navbar-burger-menu">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={CloseClick}
          >
            <CloseIcon />
          </IconButton>
          <header className="navbar-menu">
            <a className="navbar-menu-link" href="/ind">
              India
            </a>
            <a className="navbar-menu-link" href="/aus">
              Australia
            </a>
            <a className="navbar-menu-link" href="/us">
              United State
            </a>
            <a className="navbar-menu-link" href="/ru">
              Russia
            </a>
            <a className="navbar-menu-link" href="/ua">
              Ukraine
            </a>
            <a className="navbar-menu-link" href="/ca">
              Canada
            </a>
            <a className="navbar-menu-link" href="/cn">
              China
            </a>
            <a className="navbar-menu-link" href="/jp">
              Japan
            </a>
            <a className="navbar-menu-link" href="/nz">
              NewZealand
            </a>
            <a className="navbar-menu-link" href="/gb">
              United Kingdom
            </a>
            <a className="navbar-menu-link" href="/tr">
              Turnkey
            </a>
            <a className="navbar-menu-link" href="/za">
              South Africa
            </a>
          </header>
        </div>
      ) : null}
    </Box>
  );
}
