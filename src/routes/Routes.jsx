import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Landing from "../pages/Landing/Landing";
import LandingError from "../pages/RouteError/RouteError";
import { RoutesValues } from "../models/RoutesValues";
import Layout from "../components/Layout/Layout";
import CartDetail from "../pages/CartDetail/CartDetail";
import Checkout from "../pages/Checkout/Checkout";
export const router = createBrowserRouter([
  {
    path: RoutesValues.landing,
    element: <Landing />,
    errorElement: <LandingError />,
  },
  {
    path: RoutesValues.app,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: RoutesValues.cart,
        element: <CartDetail />,
      },
      { path: RoutesValues.checkout, element: <Checkout /> },
    ],
  },
]);
