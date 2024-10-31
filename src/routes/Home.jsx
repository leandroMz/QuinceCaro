/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
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
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';

export const Home = () => {
  // const [isPlaying, setIsPlaying] = useState(true);
  // const toggleMusic = () => {
  //   console.log('Toggling music:', isPlaying);
  //   if (isPlaying) {
  //     audioRef.current.pause();
  //   } else {
  //     audioRef.current.play();
  //   }
  //   setIsPlaying(!isPlaying);
  // };
  
  // useEffect(() => {
  //   if (audioRef.current) {
  //     audioRef.current.play();
  //   }
  //   return () => {
  //     // Clean up if needed
  //   };
  // }, [audioRef]);

  const [showPulse, setShowPulse] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowPulse(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* 
      <button className={styles.musicButton} onClick={toggleMusic}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      */}

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