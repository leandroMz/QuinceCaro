import { useState, useRef } from 'react';
import Styles from './MainImage.module.css';

export const MainImage = () => {
    const images = [
        { src: '/2.png', alt: 'Quinceañera 1' },
        { src: '/3.png', alt: 'Quinceañera 2' },
        { src: '/4.png', alt: 'Quinceañera 3' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const startX = useRef(null);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToImage = (index) => {
        setCurrentIndex(index);
    };

    const handleTouchStart = (e) => {
        startX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        if (startX.current !== null) {
            const currentX = e.touches[0].clientX;
            if (startX.current - currentX > 50) {
                nextImage();
                startX.current = null;
            } else if (currentX - startX.current > 50) {
                prevImage();
                startX.current = null;
            }
        }
    };

    return (
        <div className={Styles.mainContainer} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
            <div className={Styles.imageContainer}>
                <img src={images[currentIndex].src} alt={images[currentIndex].alt} className={Styles.mainImage} />
            </div>
            <div className={Styles.navigation}>
                <button onClick={prevImage} className={Styles.navButton}>❮</button>
                <button onClick={nextImage} className={Styles.navButton}>❯</button>
            </div>
            <div className={Styles.dotsContainer}>
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`${Styles.dot} ${currentIndex === index ? Styles.activeDot : ''}`}
                        onClick={() => goToImage(index)}
                    />
                ))}
            </div>
        </div>
    );
};
