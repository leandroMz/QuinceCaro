import Styles from './Header.module.css';

export const Header = () => {
  return (
    <div className={Styles.textContainer}>
      <h2 className={Styles.eventTitle}>¡Estás Invitado!</h2>
      <p className={Styles.invitationText}>
        {/* Me encantaría que seas parte de este momento tan especial para mí, ¡falta poco! */}
        Me haría muy feliz que me acompañes en esta ocasión tan única, ¡ya casi llega!
      </p>
    </div>
  )
}