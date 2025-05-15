import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RoutesValues } from "../../models/RoutesValues";
import "./Landing.css";

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let timerId;

    const startTimer = () => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        navigate(RoutesValues.app);
      }, 5000);
    };

    const handleInteraction = () => {
      startTimer();
    };

    const events = ["click", "keydown"];
    events.forEach((ev) => window.addEventListener(ev, handleInteraction));

    startTimer();

    return () => {
      clearTimeout(timerId);
      events.forEach((ev) => window.removeEventListener(ev, handleInteraction));
    };
  }, [navigate]);

  return (
    <div className="landing">
      <h1 className="landing__text">
        Bienvenidos a Relatos de Papel, tu lugar de confianza para comprar todos
        los libros.
      </h1>
    </div>
  );
};

export default Landing;
