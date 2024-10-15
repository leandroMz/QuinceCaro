import styles from './Aditional.module.css';

export const Aditional = () => {
    return (
        <div className={styles.coolerContainer}>
            <img src="/cooler2.png" alt="Conservadora" className={styles.coolerImage} />
            <p className={styles.coolerText}>¡Vení con conservadora!</p>
        </div>
    )
}