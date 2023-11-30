import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./componentes/header/header";
import Footer from "./componentes/footer/footer";
import Inicio from "./componentes/inicio/inicio";
import "@fontsource/poppins";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Inicio />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
