import React from 'react';
import './App.css';
import Header from "./components/Header";
import Main from "./pages/Main";
import {Route, Routes} from "react-router-dom";
import ShipPage from "./pages/ShipPage";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/ship/:id" element={<ShipPage />} />
      </Routes>
    </div>
  );
}

export default App;
