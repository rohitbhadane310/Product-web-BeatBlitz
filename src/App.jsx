import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Features from "./components/Features";
import Product from "./components/Product";

const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="features">
          <Features />
        </div>

        <div id="product">
          <Product />
        </div>
      </main>
    </div>
  );
};

export default App;
