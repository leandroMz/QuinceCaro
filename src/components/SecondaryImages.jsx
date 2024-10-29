import Styles from './SecondaryImages.module.css';

export const SecondaryImages = () => {
  return (
    <div className={Styles.imageSecondaryContainer}>
        <>
        <div className={Styles.headSecondary}>
          <img src="/img1.jpg" alt="Quinceañera 1" className={Styles.image} />
          <img src="/img2.jpg" alt="Quinceañera 2" className={Styles.image} />
          </div>
          <img src="/img3.jpg" alt="Quinceañera 3" className={Styles.image} />
        </>
    </div>
  );
};
