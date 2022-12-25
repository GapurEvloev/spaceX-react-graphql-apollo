import React from 'react';
import './App.css';
import Header from "./components/Header";
import Main from "./pages/Main";
import {Route, Routes} from "react-router-dom";
import ShipPage from "./pages/ShipPage";
import MainLayout from "./layouts/MainLayout";
import Launches from "./pages/Launches/Launches";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route path="/" element={<Main/>} />
          <Route path="/ship/:id" element={<ShipPage />} />
          <Route path="/launches" element={<Launches/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
