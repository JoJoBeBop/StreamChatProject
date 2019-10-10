import React from 'react';
import mvideo from "../samples/metropolia helsinki.mp4";

const Streams = () => {
  return (
    <div className="StreamContainer">

      <div className="StreamCard">
        <video id="BackgroundVideo" loop  muted>
          <source src={mvideo} type="video/mp4"/>
        </video>
      </div>

    </div>
  );
};

export default Streams;
