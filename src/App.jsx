import React, { useState } from "react";
import Topbar from "./component/topbar/Topbar";
import Menu from "./component/menu/Menu";
import Intro from "./component/intro/Intro";
import Portfolio from "./component/portfolio/Portfolio";
import Work from "./component/work/Work";
import Testimonials from "./component/testimonials/Testimonials";
import Contact from "./component/contact/Contact";
import "./app.scss";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Work />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
