import React from "react";
import Home from "./pages/Home/Home";
import Navbar from "./shared/Navbar/Navbar";
import Footer from "./shared/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery";
import AboutUs from "./pages/AboutUs";
import LinksComponent from "./pages/Links";
import Contacts from "./pages/Contacts";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/links" element={<LinksComponent />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
