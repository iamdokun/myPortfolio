import { useState } from "react";
import Topbar from "./component/topbar/Topbar";
import Intro from "./component/intro/Intro";
import Portfolio from "./component/portfolio/Portfolio";
import Works from "./component/about/About";
import Testimonials from "./component/testimonials/Testimonials";
import Contact from "./component/contact/Contact";
import "./app.scss"
import Menu from "./component/menu/menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
     <Topbar setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
     <Menu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
    <div className="sections">
       <Intro menuOpen={menuOpen} />
       <Works />
       {/* <Testimonials /> */}
       <Portfolio />
       <Contact />
    </div>
    </div>
  );
}

export default App;
