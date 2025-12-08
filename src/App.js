import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/base/_global.scss";

// Components
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";

import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ChatBot from "./components/ChatBot/ChatBot";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />

      {/* ChatBot - appears as floating button */}
      <ChatBot />
    </div>
  );
}

export default App;
