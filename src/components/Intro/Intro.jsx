import React, { useContext } from "react";
import "./Intro.css";
import developer from "../../img/dev-1.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import OutLook from "../../img/outlook.png";
import { themeContext } from "../../Context";
const Intro = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="intro">
      <div className="w-full px-4 md:px-8 flex flex-col md:flex-row space-y-7 md:space-y-0 md:justify-between">
       <div className="flex relative flex-col  md:w-1/3">
          <div className="flex flex-col">

            <span className="text-xl font-bold" style={{ color: darkMode ? "white" : "" }}>Hie! I Am</span>
            <span className="text-2xl font-bold ">Emmaculate Kudzanayi Kuyele</span>
            <span className="text-sm text-slate-500 dark:text-slate-200">
              I am a front-end developer with 4+ years of hands on experience. I am experienced working with
              teams to produce impactful, leading-edge websites that engage customers and deliver business
              results. Well-versed in design standards and user preferences.
            </span>
          </div>

        
          <div className="flex flex-row space-x-8 mt-12">
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
        <div className="flex justify-start">
            <img src={developer} alt="" className="h-80" />
          </div>

      </div>

    </div>
  );
};

export default Intro;
