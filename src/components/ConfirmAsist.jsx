import { FaHeart } from 'react-icons/fa';
import styles from './ConfirmAsist.module.css';

export const ConfirmAsist = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hola, escribo para confirmar mi asistencia al XV de Carolina, Mi nombre es: ");
    window.open(`https://wa.me/5493782439037?text=${message}`, '_blank');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Confirma tu ASISTENCIA</h1>
      
      <button className={styles.whatsappButton} onClick={handleWhatsAppClick}>
        WHATSAPP
      </button>
      
      <FaHeart className={styles.heartIcon} />
      
      <p className={styles.message}>
        Los mejores momentos de la vida merecen ser compartidos.
      </p>

      <p className={styles.signature}>Carolina</p>
    </div>
  );
};
