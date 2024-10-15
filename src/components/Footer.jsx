import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <a href="https://www.instagram.com/ibera.web" target="_blank" rel="noopener noreferrer">
        <img src="/ibera.png" alt="Ibera Logo" className={styles.logo} />
      </a>
    </div>
  );
}
