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

export const Home = ({ audioRef }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const [isPlaying, setIsPlaying] = useState(true); // La música empieza automáticamente en play

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

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <div>
          {/* Botón de pausa/reproducción */}
          <button className={styles.musicButton} onClick={toggleMusic}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
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
