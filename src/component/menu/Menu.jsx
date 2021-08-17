import React from "react";
import "./menu.scss";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul onClick={() => setMenuOpen(false)}>
        <li>
          <a href="#intro">Home</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#work">Projects</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="container">
        <div className="itemContainer">
          <PhoneIphoneIcon className="icon" />
          <span>(234)803 428 5512</span>
        </div>
        <div className="itemContainer">
          <MailOutlineIcon className="icon" />
          <span>atu.prosper@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

export default Menu;
