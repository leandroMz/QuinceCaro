import Styles from './Header.module.css';

export const Header = () => {
  return (
    <div className={Styles.textContainer}>
      <h2 className={Styles.eventTitle}>¡Estás Invitado!</h2>
      <p className={Styles.invitationText}>
        Nos encantaría que seas parte de este momento tan especial para nosotros, ¡falta poco!
      </p>
    </div>
  )
}