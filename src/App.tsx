import { BrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Feedbacks from "./components/Feedbacks";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Tech from "./components/Tech";
import Works from "./components/Works";
import StarsCanvas from "./components/canvas/Stars";
import { useState, useEffect } from "react";

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    window.addEventListener("load", () => {
      setTimeout(() => {
        setLoader(!loader);
      }, 4000);
    });
  }, []);
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <div
          className="wrapper_loader"
          style={{ display: loader ? "block" : "none" }}
        >
          <div className="loader"></div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
