import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.jsx";
import { ThemeProvider } from "./context/themeContext.jsx";
import { BookCardProvider } from "./context/bookCardContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <BookCardProvider>
        <RouterProvider router={router} />
      </BookCardProvider>
    </ThemeProvider>
  </StrictMode>
);
