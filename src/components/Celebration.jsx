import Styles from './Celebration.module.css';

export const Celebration = () => {
  const handleLocationClick = () => {
    window.open("https://maps.app.goo.gl/qhE5gtBdkEdHDWNn6", "_blank", "noopener,noreferrer");
  };

  return (
    <div className={Styles.celebrationContainer}>
      <div className={Styles.iconContainer}>
        <img src="/toast1.gif" alt="Celebración" className={Styles.gifImage} />
      </div>
      <h2 className={Styles.title}>CELEBRACIÓN</h2>
      <p className={Styles.subtitle}>La celebración será en Senda Antigua Eventos</p>
      <div className={Styles.info}>
        <p>23 NOV</p>
        <p className={Styles.separator}>|</p>
        <p>
        9:00<span className={Styles.spanText}> P.M.</span>
        </p>
      </div>
      <p className={Styles.address}>Dirección 123, Ciudad</p>
      <button 
        className={Styles.locationButton} 
        onClick={handleLocationClick}>
        VER UBICACIÓN
      </button>
    </div>
  );
};
