/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import { Aditional } from "../components/Aditional";
import { Celebration } from "../components/Celebration";
import { ConfirmAsist } from "../components/ConfirmAsist";
import { DressCode } from "../components/DressCode";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainImage } from "../components/MainImage";
import { SecondaryImages } from "../components/SecondaryImages";
import { Time } from "../components/Time";
import styles from './Home.module.css';
import { FaPlay, FaPause } from 'react-icons/fa';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';

export const Home = ({ audioRef }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showPulse, setShowPulse] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowPulse(false);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMainImageLoad = () => {
    setIsLoaded(true);
  };
  
  return (
    <>
      {isMobile ? (
        <div>
          <button className={styles.musicButton} onClick={toggleMusic}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>

          {showPulse && (
            <div className={styles.pulse}>
              <MdKeyboardDoubleArrowDown size={30} />
              <p>DESLIZA</p>
            </div>
          )}

          <MainImage />
          <Header />
          <Time />
          <Celebration />
          <DressCode />
          <SecondaryImages />
          <Aditional />
          <ConfirmAsist />
          <Footer />
        </div>
      ) : (
        <div className={styles.desktopMessage}>
          Solo puedes abrir desde un celular.
        </div>
      )}
    </>
  );
};
