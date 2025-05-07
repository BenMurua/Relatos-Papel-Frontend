import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <main>
        <Outlet />
        <p>a</p>
      </main>
    </>
  );
}

export default App;
