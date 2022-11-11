import React, { useState, useContext } from "react";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";
import { themeContext } from "../../Context";
import { menus } from "../../constants/menus";

const Navbar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [active, setActive] = useState('home')
  const [show, showMenu] = useState(false);
  const handleClick = (value) => {    
    theme.dispatch({ type: "setActiveLink", payload: value });
    setActive(value)
  };
  return (
    <div className="z-10   flex flex-col">
      <div className={'h-16 md:h-13 fixed top-0 left-0 right-0 pt-4 shadow w-full flex flex-col ' + (darkMode === false ? 'bg-white' : 'bg-black border-b border-gray-600 dark')}>
        <div className="px-4 md:px-8 max-w-7xl mx-auto  flex justify-between w-full">
          <div className="flex flex-1 flex-row items-center space-x-2 md:space-x-8">
            <div className="font-bold text-2xl">Emmaculate</div>
            <Toggle />
          </div>
          <div className="flex flex-1 items-center justify-end font-normal">
            <div className="hidden lg:flex">
              <div className="list-none space-x-4 flex flex-row">
                {menus.map((element) =>   <Link to={element.linkId} spy={true} smooth={true}  key={element.id} className={'cursor-pointer hover:text-yellow-500 ' + (active === element.linkId ? 'text-yellow-500' : '')} onClick={(() => handleClick(element.linkId))}>
                    {element.title}
                  </Link>)}

              </div>
            </div>
            <div className="flex lg:hidden">
              <button data-collapse-toggle="mobile-menu" type="button" onClick={() => showMenu(!show)} className="inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden focus:outline-none text-gray-400 hover:bg-black" aria-controls="mobile-menu" aria-expanded="false">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>
            </div>
          </div>

        </div>
        {
          show && <div className={'transition-all ease-out duration-700 z-10 w-full flex flex-col px-3 border-t pb-3 border-b'} style={{ background: (darkMode === false ? 'white' : 'black') }}>
            {menus.map((element) => <Link key={element.id} to={element.linkId} spy={true} smooth={true} className={'px-4 py-2 cursor-pointer hover:bg-yellow-500 ' + (active === element.linkId ? 'bg-yellow-500 rounded' : '')}  onClick={(() => {showMenu(!show);handleClick(element.linkId);})}>
                {element.title}
              </Link>)}
          </div>
        }


      </div>
      <div id="Navbar">

      </div>
    </div>
  );
};

export default Navbar;
