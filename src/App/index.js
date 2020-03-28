import React, { useState } from 'react';
import { Player } from './Player';
import './main.css';

function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
  }

  return array;
}

const regalos = shuffle(['aldo', 'angie', 'ulises']);

function App() {
  const [videoId, setVideoId] = useState('');
  const handleClick = (videoId) => () => setVideoId(videoId);
  return (
    <>
    <div className="App">
      <div className="title">
        <img alt="¡Feliz Cumpleaños Nayely!" src="/images/title.png" />
      </div>
      <div className="subtitle">
        <img alt="Elige tu regalo" src="/images/subtitle.png" />
      </div>
      <div className="presents">
        {regalos.map((videoId, i) => {
          const alt = `Regalo #${i + 1}`;
          const src = `/images/present${i + 1}.png`;
          return <div key={videoId} onClick={handleClick(videoId)}><img alt={alt} src={src} /></div>;
        })}
      </div>
    </div>
    <Player handleClose={handleClick('')} videoId={videoId} />
    </>
  );
}

export default App;

