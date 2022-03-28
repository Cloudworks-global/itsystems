import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Services } from "../pages/Services";
import { Clients } from "../pages/Clients";
import { Carrers } from "../pages/Carrers";
import { Contact } from "../pages/Contact";
import { ReviewsAwards } from "../pages/ReviewsAwards";

export const AppRouter = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/careers" element={<Carrers />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/reviews-awards" element={<ReviewsAwards />} />
    </Routes>
  );
};
