import Styles from './MainImage.module.css';

export const MainImage = () => {
    return (
        <div className={Styles.mainContainer} >
            <div className={Styles.imageContainer}>
                <img src='/head.png'  className={Styles.mainImage} />

            </div>
        </div>
    );
};
