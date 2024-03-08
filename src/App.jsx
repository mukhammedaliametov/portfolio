import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import SinglePage from "./pages/SinglePage";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Hero />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path='/portfolio/:slug' element={<SinglePage />} /> 
          <Route path='/contact' element={<Contact />} /> 
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
