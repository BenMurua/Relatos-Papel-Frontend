import "./App.css";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./context/themeContext";
import { BookCardProvider } from "./context/bookCardContext";

function App() {
  return (
    <ThemeProvider>
      <BookCardProvider>
        <Outlet />
      </BookCardProvider>
    </ThemeProvider>
  );
}

export default App;
