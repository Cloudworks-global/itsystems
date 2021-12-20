import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Services } from "../pages/Services";
import { Clients } from "../pages/Clients";
import { Carrers } from "../pages/Carrers";
import { Awards } from "../pages/Awards";
import { Contact } from "../pages/Contact";

export const AppRouter = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/carrers" element={<Carrers />} />
      <Route path="/awards" element={<Awards />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};
