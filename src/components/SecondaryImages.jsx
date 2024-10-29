import { useEffect, useState, useRef } from 'react';
import Styles from './SecondaryImages.module.css';

export const SecondaryImages = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className={Styles.imageSecondaryContainer}>
      {isVisible && (
        <>
        <div className={Styles.headSecondary}>
          <img src="/img1.jpg" alt="Quinceañera 1" className={Styles.image} />
          <img src="/img2.jpg" alt="Quinceañera 2" className={Styles.image} />
          </div>
          <img src="/img3.jpg" alt="Quinceañera 3" className={Styles.image} />
        </>
      )}
    </div>
  );
};
