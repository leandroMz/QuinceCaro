import Styles from './Header.module.css';

export const Header = () => {
  return (
    <div className={Styles.textContainer}>
      <h2 className={Styles.eventTitle}>¡Estás Invitado!</h2>
      <p className={Styles.invitationText}>
        Me encantaría que seas parte de este momento tan especial para mí, ¡falta poco!
      </p>
    </div>
  )
}