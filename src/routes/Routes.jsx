import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Landing from "../pages/Landing/Landing";
import LandingError from "../pages/ErrorPages/LandingError/LandingError";
import { RoutesValues } from "../models/RoutesValues";
export const router = createBrowserRouter([
  {
    path: RoutesValues.landing,
    element: <Landing />,
    errorElement: <LandingError />,
  },
  {
    //si se confirma el cambio de este componente a Layout, se debe cambiar el nombre del Element al nuevo que corresponda
    path: RoutesValues.home,
    element: <Home />,
  },
]);
