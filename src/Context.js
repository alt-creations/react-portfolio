import { createContext, useReducer } from "react";

export const themeContext = createContext();

const initialState = { darkMode: false, active:'home' };

const themeReducer = (state, action) => {
  switch (action.type) {
    case "toggle":
        return { ...state, darkMode: !state.darkMode };

        case "setActiveLink":
        return { ...state, active: action.payload };
      default:
        return state;
  }
};

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    <themeContext.Provider value={{state, dispatch}}>{props.children}</themeContext.Provider>
  );
};
