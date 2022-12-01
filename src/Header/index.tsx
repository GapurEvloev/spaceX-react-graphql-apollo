import React from "react";
import {AppBar, Container, Toolbar} from "@mui/material";
import logo from "../assets/logo.svg";

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <img height={70} src={logo} alt=""/>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header;