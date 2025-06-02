import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Services from "./Components/Services/Services";
import Qualifications from "./Components/Qualifications/Qualifications";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <Home />
        <About/>
        <Skills/>
        <Services/>
        <Qualifications/>
        <Contact/>
        <Footer/>
      </main>
    </div>
  );
};

export default App;
