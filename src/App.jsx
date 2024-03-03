import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-black/90 min-h-screen">
        <Navbar />
        <Hero />
      </div>
    </BrowserRouter>
  );
};

export default App;
