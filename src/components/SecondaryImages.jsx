import img1 from '/12.jpg';
import img2 from '/33.jpg';
import Styles from './SecondaryImages.module.css';

export const SecondaryImages = () => {
  return (
    <div className={Styles.imageSecondaryContainer}>
      <div className={Styles.imageCont1}>
        <img src={img1} alt="" />
      </div>
      <div className={Styles.imageCont2}>
        <img src={img2} alt="" />
      </div>

    </div>
  );
};
