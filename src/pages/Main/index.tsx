import React from "react";
import {Container} from "@mui/material";
import ShipsList from "../../components/ShipsList";

const Main: React.FC = () => {
  return (
    <main className="main">
      <Container maxWidth="lg">
        <ShipsList />
      </Container>
    </main>
  )
};

export default Main;