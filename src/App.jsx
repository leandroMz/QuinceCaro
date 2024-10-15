import { useState, useRef } from 'react';
import { Home } from './routes/Home';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);  // Controla si la carta se abrió
  const audioRef = useRef(null);  // Referencia al audio

  const handleOpen = () => {
    setIsOpen(true);
    audioRef.current.play();  // Reproducir música al abrir
  };

  return (
    <>
      {!isOpen ? (
        <div className="envelope" onClick={handleOpen}>
          <img src="/imagen.JPG" alt="Abrir" className="envelope-image" />
        </div>
      ) : (
        <Home audioRef={audioRef} />
      )}
      <audio ref={audioRef} src="/musica.mp3" loop />
    </>
  );
}

export default App;
