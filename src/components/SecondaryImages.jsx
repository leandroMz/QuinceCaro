import img1 from '/img3.jpg';
import img2 from '/img2.jpg';
import img3 from '/3.png';
import Styles from './SecondaryImages.module.css';

export const SecondaryImages = () => {
  return (
    <div className={Styles.imageSecondaryContainer}>
      <>
        <div className={Styles.headSecondary}>
          <img src={img1} alt="Quinceañera 1" className={Styles.image2} />
          <img src={img2} alt="Quinceañera 2" className={Styles.image2} />
        </div>
        <img src={img3} alt="Quinceañera 3" className={Styles.image} />
      </>
    </div>
  );
};
