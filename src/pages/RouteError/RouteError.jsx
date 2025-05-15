import { useRouteError } from "react-router-dom";
import "./RouteError.css";

const RouteError = () => {
  const error = useRouteError();

  return (
    <div className="route-error">
      <h1 className="route-error__title">Uy!</h1>
      <p className="route-error__message">
        Ha ocurrido un error! lo lamentamos
      </p>
      <p className="route-error__details">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default RouteError;
