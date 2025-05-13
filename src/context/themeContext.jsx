import { createContext, useState, useEffect } from "react";
import { THEMES } from "../models/constants";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("app-theme") || THEMES.LIGHT // Recuperar tema del localStorage
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme); // Cambia el atributo del HTML
    localStorage.setItem("app-theme", theme); // Guarda el tema en el localStorage
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
