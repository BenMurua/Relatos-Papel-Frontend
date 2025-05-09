import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      {/* 
      TODO : REVISAR CON EL EQUIPO, NO ES BUENA PRACTICA ARMAR EL LAYOUT EN EL APP.JSX
      DEBERIA SER UN COMPONENTE QUE SE LLAME LAYOUT Y QUE este componente contenga la estructura de nuestra app
      Y QUE SE USE EN EL ROUTER;
    */}
      <Outlet />
    </>
  );
}

export default App;
