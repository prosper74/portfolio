import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import "./intro.scss";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backSpeed: 60,
      backDelay: 2000,
      strings: ["Developer", "Designer", "Content Creator"]
    });
  }, []);

  return (
    <div id="intro" className="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/prospernew.png" alt="" />
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <h3>Hi there, I'm</h3>
          <h1>Prosper Atu</h1>
          <h3>
            a freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <ExpandMoreOutlinedIcon className="downArrow" />
        </a>
      </div>
    </div>
  );
}

export default Intro;
