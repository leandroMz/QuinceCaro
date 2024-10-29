import { useState } from 'react';
import styles from './Envelope.module.css';

export const Envelope = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    if (onOpen) {
      onOpen();
    }
  };

  return (
    <div className={styles.envelopeContainer} onClick={handleOpen}>
      <div className={`${styles.envelope} ${isOpen ? styles.open : ''}`}>
        <div className={styles.envelopeLeftFlap}></div>
        <div className={styles.sealContainer}>
          <div className={styles.seal}>Abrir</div>
        </div>
        <div className={styles.envelopeRightFlap}></div>
      </div>
    </div>
  );
};
