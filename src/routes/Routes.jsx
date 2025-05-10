import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Landing from "../pages/Landing/Landing";
import LandingError from "../pages/RouteError/RouteError";
import { RoutesValues } from "../models/RoutesValues";
import Layout from "../components/Layout/Layout";
export const router = createBrowserRouter([
  {
    path: RoutesValues.landing,
    element: <Landing />,
    errorElement: <LandingError />,
  },
  {
    //si se confirma el cambio de este componente a Layout, se debe cambiar el nombre del Element al nuevo que corresponda
    path: RoutesValues.app,
    element: <Layout />,
    children: [
      {
        index: true, // Esto hace que HomePage sea la ruta por defecto para "/"element: <HomePage />,
        element: <Home />,
      },
    ],
  },
]);
