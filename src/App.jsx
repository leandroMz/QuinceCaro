import { useState, useRef } from 'react';
import { Home } from './routes/Home';
import './App.css';
import { Envelope } from './components/Envelope';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef(null);

  const handleOpen = () => {
    setIsOpen(true);
    audioRef.current.play();
  };

  return (
    <>
      {!isOpen ? (
        <Envelope onOpen={handleOpen} />
      ) : (
        <Home audioRef={audioRef} />
      )}
      <audio ref={audioRef} src="/musica.mp3" loop />
    </>
  );
}

export default App;
