import React from 'react';
import Trailer from './Trailer';

const App = () => {
  const videoUrl = 'https://youtu.be/HWEW_qTLSEE';
  
  return (
    <div className="app-container">
      <h1>Trailer</h1>
      <Trailer videoUrl={videoUrl} />
    </div>
  );
};

export default App;