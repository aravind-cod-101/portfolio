import "./App.css";
import NavBar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
function App() {
  return (
    <div className="App">
      <div id="home-section">
        <NavBar />

        <Home />
      </div>
      <div id="about-section">
        <About />
      </div>

      <div id="skills-section">
        <Skills />
      </div>
      <div id="contact-section">
        <Contact />
      </div>
    </div>
  );
}

export default App;
