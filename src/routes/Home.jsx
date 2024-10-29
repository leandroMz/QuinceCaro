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
  const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showPulse, setShowPulse] = useState(true);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    // Para esconder el efecto de deslizamiento después de cierto scroll
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowPulse(false);
      }
    };

    // Listener para scroll
    window.addEventListener('scroll', handleScroll);

    // Sincronización inicial del estado de isPlaying con el audio
    if (audioRef.current) {
      audioRef.current.play();
    }

    // Limpieza de eventos
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [audioRef]);

  if (!isMobileDevice) {
    return (
      <div className={styles.desktopMessage}>
        Solo puedes abrir desde un celular.
      </div>
    );
  }

  return (
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
  );
};