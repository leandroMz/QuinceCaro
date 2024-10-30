import Styles from './MainImage.module.css';

export const MainImage = () => {
    return (
        <div className={Styles.mainContainer} >
            <div className={Styles.imageContainer}>
                <img src='/img1.jpg'  className={Styles.mainImage} />
            </div>
        </div>
    );
};
