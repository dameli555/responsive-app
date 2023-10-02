import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Contacting from "./routes/contact";
import Faq from "./routes/faq";
import Pricing from "./routes/pricing";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/price" element={<Pricing />} />
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contacting />} />
      </Routes>
    </>
  );
}

export default App;
