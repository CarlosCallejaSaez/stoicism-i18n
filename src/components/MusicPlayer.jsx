import React from 'react';

const MusicPlayer = ({ src }) => {
  const playerStyle = {
    position: 'fixed',
    left: -10,
    bottom: 0,
    zIndex: 9999,
    padding: '10px',
    backdropFilter: 'blur(5px)',
    width:"200px",
    maxWidth: '300px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div style={playerStyle}>
      <audio controls src={src} style={{ width: '100%' }}>
        Tu navegador no soporta el elemento de audio.
      </audio>
    </div>
  );
};

export default MusicPlayer;
