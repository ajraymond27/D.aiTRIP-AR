import React from 'react';

const Crown = () => {
  return (
    <div style={{ margin: '0px', overflow: 'hidden', textAlign: 'center' }}>
      <div>
        <a rel="ar" href="https://d13wrvtzk1buxr.cloudfront.net/usdz/BigSteppers/crown.usdz">
          <img src="https://d13wrvtzk1buxr.cloudfront.net/usdz/BigSteppers/kendrick.png" alt="Image" style={{ width: 'auto', height: '60vh' }} />
          <p style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', fontSize: '32pt', fontWeight: 'bolder' }}>I AM NOT YOUR SAVIOR</p>
        </a>
      </div>
      <audio src="https://d13wrvtzk1buxr.cloudfront.net/usdz/BigSteppers/crown.mp3" controls autoPlay />
    </div>
  ); 
};

export default Crown;