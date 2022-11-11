import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
import { skills } from "../../constants/skills"
import Resume from '../../constants/resume.pdf';
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;  
  return (
    <div className="experience px-4 pt-8 pb-4" id='experience'>
      <div className="w-full flex flex-col md:space-x-4 md:flex-row md:justify-between">
        <div className="w-full md:w-1/3 flex flex-col">
          <div style={{ color: darkMode ? "white" : "" }} className="section-title">Skills & Experience</div>
          <span className="text-sm text-gray-500">
          Since beginning my journey as a front-end developer nearly 4 years ago, I’ve collaborated with talented people to create web products for both business and consumer use.
          I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps and coding interactive layouts.

          </span>
          <div className="mt-4">
          <a type="button" href={Resume} download className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Download Resume</a>
          </div>
          
        </div>
        <div className="w-full md:w-2/3 flex flex-col md:mt-8">
          {skills.map((data, i) => {
            return (
              <div className="flex flex-col w-full mb-4" key={i}>

                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium dark:text-white">{data.name}</span>
                  <span className="text-xs font-medium  dark:text-white">{`${data.value}%`}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-0.5 dark:bg-gray-700">
                  <div className="bg-yellow-500 h-0.5 rounded-full" style={{
                    width: `${data.value}%`, animation: "progress 1500ms ease-in 1",
                  }}></div>
                </div>

              </div>
            )
          })}

        </div>
      </div>

    </div>
  );
};

export default Experience;
