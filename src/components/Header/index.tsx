import React from "react";
import {AppBar, Container, Toolbar} from "@mui/material";
import logo from "../../assets/logo.svg";
import {Link} from "react-router-dom";

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Link to={`/`}>
            <img height={70} src={logo} alt=""/>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header;