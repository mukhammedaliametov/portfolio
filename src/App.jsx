import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-black/90 min-h-screen">
        <Navbar />
        <h1>Hello World</h1>
      </div>
    </BrowserRouter>
  );
};

export default App;
