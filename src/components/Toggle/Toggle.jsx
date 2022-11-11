import React, { useContext } from "react";
import "./Toggle.css";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import { themeContext } from "../../Context";

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = () => {
    theme.dispatch({ type: "toggle" });
  };
  return (
    <button onClick={handleClick} className={'flex items-center text-xs font-medium focus:z-10 focus:outline-none hover:text-blue-700 '+(darkMode?'dark:bg-gray-800 dark:text-gray-400':'bg-white text-gray-700')}>
      {darkMode ? <Sun /> : <Moon />}
    </button>

  );
};

export default Toggle;
