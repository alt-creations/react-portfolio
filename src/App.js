import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import "./App.css";
import "./styles/index.css";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="flex flex-col w-full overflow-hidden" style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}>
      <div
        className="relative flex flex-col w-full max-w-7xl mx-auto overflow-hidden">
        <Navbar />
        <div className=" flex flex-col w-full">
          <Intro />
          <Experience />
          <Works />
          <Testimonial />
          <Contact />
        </div>

      </div>
        <Footer />
    </div>

  );
}

export default App;
