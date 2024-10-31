import { useState } from 'react';
import { Home } from './routes/Home';
import { Envelope } from './components/Envelope';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  // const audioRef = useRef(null);

  const handleOpen = () => {
    setIsOpen(true);
    // if (audioRef.current) {
    //   audioRef.current.play();
    // }
  };

  return (
    <>
      <div style={{ display: isOpen ? 'none' : 'block' }}>
        <Envelope onOpen={handleOpen} />
      </div>
      {isOpen && <Home/>}

      {/* 
      <audio ref={audioRef} src="/musica.mp3" loop /> 
      */}
    </>
  );
}

export default App;