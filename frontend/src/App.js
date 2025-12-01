import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import CorporateScreening from "@/pages/CorporateScreening";
import DigitalPlatform from "@/pages/DigitalPlatform";
import Benefits from "@/pages/Benefits";
import About from "@/pages/About";
import Careers from "@/pages/Careers";
import Partnerships from "@/pages/Partnerships";
import Contact from "@/pages/Contact";
import HealthAudits from "@/pages/HealthAudits";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/corporate-screening" element={<CorporateScreening />} />
          <Route path="/digital-platform" element={<DigitalPlatform />} />
          <Route path="/health-audits" element={<HealthAudits />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
