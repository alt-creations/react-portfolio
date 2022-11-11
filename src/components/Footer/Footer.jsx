import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Github from "../../img/github-white.png";
import LinkedIn from "../../img/linkedin-white.png";
import OutLook from "../../img/outlook-white.png";

const Footer = () => {
  return (
    
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }}  className="h-40"/>
      <div className="f-content">      
      <div className="flex flex-row space-x-8">
            <a href="https://github.com/orgs/alt-creations/repositories" >
              <img src={Github} alt="" className="h-10"/>

            </a>
            <a href="https://www.linkedin.com/in/emmaculate-kuyele-560044115/">
              <img src={LinkedIn} alt="" className="h-10"/>

            </a>
            <a  href="mailto:emmykuyele@outlook.com">
              <img src={OutLook} alt="" className="h-10"/>

            </a>

          </div>
      </div>
    </div>
  );
};

export default Footer;
