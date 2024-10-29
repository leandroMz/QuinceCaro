import { useState, useRef } from 'react';
import { Home } from './routes/Home';
import { Envelope } from './components/Envelope';
import './App.css';

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
