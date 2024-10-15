import { useState, useEffect } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
import Styles from './Time.module.css';

export const Time = () => {
  const targetDate = new Date('2024-11-23T21:00:00'); 

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // const handleSetReminder = () => {
  //   toast.success('Recordatorio programado para el 23 de noviembre a las 21:00 en tu hora local.', {
  //     autoClose: 3000,
  //   });
  // };

  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.countdownContainer}>
        <div className={Styles.circle}>
          <p>{timeLeft.days}</p>
          <span>Días</span>
        </div>
        <div className={Styles.circle}>
          <p>{timeLeft.hours}</p>
          <span>Horas</span>
        </div>
        <div className={Styles.circle}>
          <p>{timeLeft.minutes}</p>
          <span>Minutos</span>
        </div>
        <div className={Styles.circle}>
          <p>{timeLeft.seconds}</p>
          <span>Segundos</span>
        </div>
      </div>
      {/* <button className={Styles.reminderButton} onClick={handleSetReminder}>
        🗓️ Agendar Recordatorio
      </button>
      <ToastContainer /> */}
    </div>
  );
};

