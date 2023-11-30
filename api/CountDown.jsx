import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/time.css"
import gifFlores from "../assets/gifFlores.gif"

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2023-12-22T21:30:00'); // Cambia esta fecha a tu objetivo
    const now = new Date();

    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return {
        days,
        hours,
        minutes,
        seconds
      };
    } else {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);

  return (

 
   
<section className="container">
    <img  className="gifFlores"  src={gifFlores} alt="Mi GIF" />
    <img  className="gifFlores"  src={gifFlores} alt="Mi GIF" />
<div className="countdown">
  <div className="position">
    <span className="reloj">{timeLeft.days}</span>
    <span>Días</span>
  </div>
  <div className="position">
  <span className="reloj">{timeLeft.hours}</span>
  <span>Horas</span>
  </div>
  <div className="position">
  <span className="reloj">{timeLeft.minutes}</span>
  <span>Minutos</span>
  </div>
  <div className="position">
    <span className="reloj">{timeLeft.seconds} </span>
    <span>Segundos</span>
  </div>
</div>
</section>
       

  );
};

export default Countdown;

