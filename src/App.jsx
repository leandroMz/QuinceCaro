import { useState, useRef } from 'react';
import { Home } from './routes/Home';
import { Envelope } from './components/Envelope';
import './App.css';
import MainImage from './components/MainImage';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef(null);

  const handleOpen = () => {
    setIsOpen(true);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <>
      <div style={{ display: isOpen ? 'none' : 'block' }}>
        <Envelope onOpen={handleOpen} />
      </div>
      <MainImage style={{ display: isOpen ? 'block' : 'none' }} /> {/* Solo se muestra en Home */}
      {isOpen && <Home audioRef={audioRef} />}
      <audio ref={audioRef} src="/musica.mp3" loop />
    </>
  );
}

export default App;
