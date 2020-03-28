import React, { useState } from 'react';
import { Player } from './Player';
import title from '../images/title.png';
import subtitle from '../images/subtitle.png';
import present1 from '../images/present1.png';
import present2 from '../images/present2.png';
import present3 from '../images/present3.png';
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

const presents = shuffle(['aldo', 'angie', 'ulises']);
const presentImages = shuffle([present1, present2, present3]);

function App() {
  const [videoId, setVideoId] = useState('');
  const handleClick = (videoId) => () => setVideoId(videoId);
  return (
    <>
    <div className="App">
      <div className="title">
        <img alt="¡Feliz Cumpleaños Nayely!" src={title} />
      </div>
      <div className="subtitle">
        <img alt="Elige tu regalo" src={subtitle} />
      </div>
      <div className="presents">
        {presents.map((videoId, i) => (
          <div key={videoId} onClick={handleClick(videoId)}>
            <img alt={`Regalo #${i + 1}`} src={presentImages[i]} />
          </div>
        ))}
      </div>
    </div>
    <Player handleClose={handleClick('')} videoId={videoId} />
    </>
  );
}

export default App;

