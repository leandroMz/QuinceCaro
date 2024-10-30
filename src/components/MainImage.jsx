import Styles from './MainImage.module.css';

export const MainImage = () => {
    return (
        <div className={Styles.mainContainer}>
            <div className={Styles.imageContainer}>
                <img src='/img1.jpg' alt="Main" className={Styles.mainImage} />
            </div>
            <div className={Styles.overlay}></div> {/* Elemento de overlay */}
        </div>
    );
};
