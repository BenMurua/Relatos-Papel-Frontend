import { useRouteError } from "react-router-dom";
import "./RouteError.css";

const RouteError = () => {
  const error = useRouteError();

  return (
    <div className="error-page">
      <h1>Uy!</h1>
      <p>Ha ocurrido un error! lo lamentamos</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default RouteError;
