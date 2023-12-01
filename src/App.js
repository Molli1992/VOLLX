import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./componentes/header/header";
import Footer from "./componentes/footer/footer";
import Inicio from "./componentes/inicio/inicio";
import Contacto from "./componentes/contacto/contacto";
import Nosotros from "./componentes/nosotros/nosotros";
import "@fontsource/poppins";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/contact" element={<Contacto />} />
          <Route path="/us" element={<Nosotros />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
