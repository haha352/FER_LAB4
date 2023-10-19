import React from 'react';
import ReactPlayer from 'react-player';

const Trailer = ({ videoUrl }) => {
  return (
    <div className="trailer-container">
      <ReactPlayer
        url={videoUrl}
        className="react-player"
        width="100%"
        height="100%"
        controls
      />
    </div>
  );
};

export default Trailer;