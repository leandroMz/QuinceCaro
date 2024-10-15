import styles from './DressCode.module.css';

export const DressCode = () => {
    return (
        <div className={styles.dressCodeContainer}>
            <div className={styles.iconContainer}>
                <img src="/ropa.png" alt="Celebración" className={styles.iconImage} />
            </div>
            <h2 className={styles.title}>DRESS CODE</h2>
            <p className={styles.subtitle}>¡Elegantes!</p>            
        </div>
    );
};
