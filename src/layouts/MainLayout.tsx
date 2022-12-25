import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import Header from "../components/Header";

const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main className="main">
      <Container maxWidth="lg">
        <Outlet />
      </Container>
    </main>
    </>
  );
};

export default MainLayout;