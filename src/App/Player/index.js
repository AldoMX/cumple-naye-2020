import React, { useEffect, useState } from 'react';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';
import './styles.css';

const sources = {
  aldo: {
    type: 'video',
    sources: [
      {
        src: 'https://rawcdn.githack.com/AldoMX/cumple-naye-2020/876aa8dfb0e42db131b70ea43c1714f8da0c0a17/public/videos/WhatsApp%20Video%202020-03-27%20at%2011.55.50%20PM.mp4',
        type: 'video/mp4',
        size: 720,
      },
    ],
  },
  angie: {
    type: 'video',
    sources: [
      {
        src: 'https://rawcdn.githack.com/AldoMX/cumple-naye-2020/876aa8dfb0e42db131b70ea43c1714f8da0c0a17/public/videos/WhatsApp%20Video%202020-03-27%20at%208.41.14%20PM.mp4',
        type: 'video/mp4',
        size: 480,
      },
    ],
  },
  ulises: {
    type: 'video',
    sources: [
      {
        src: 'https://rawcdn.githack.com/AldoMX/cumple-naye-2020/876aa8dfb0e42db131b70ea43c1714f8da0c0a17/public/videos/WhatsApp%20Video%202020-03-27%20at%209.37.19%20PM.mp4',
        type: 'video/mp4',
        size: 352,
      },
    ],
  },
};

const playerOptions = {
  controls: [
    'play',
    'progress',
    'current-time',
    'duration',
  ],
  i18n: {
    restart: 'Reiniciar',
    rewind: 'Atrasar {seektime}s',
    play: 'Reproducir',
    pause: 'Pausar',
    fastForward: 'Adelantar {seektime}s',
    seek: 'Buscar',
    seekLabel: '{currentTime} de {duration}',
    played: 'Reproducido',
    buffered: 'Buffereado',
    currentTime: 'Tiempo actual',
    duration: 'Duración',
    volume: 'Volumen',
    mute: 'Mutear',
    unmute: 'Desmutear',
    enableCaptions: 'Habilitar subtítulos',
    disableCaptions: 'Deshabilitar subtítulos',
    download: 'Descargar',
    enterFullscreen: 'Pantalla completa',
    exitFullscreen: 'Salir de pantalla completa',
    frameTitle: 'Reproductor para {title}',
    captions: 'Subtítulos',
    settings: 'Configuración',
    menuBack: 'Regresar al menú anterior',
    speed: 'Velocidad',
    normal: 'Normal',
    quality: 'Calidad',
    loop: 'Repetir',
  },
}

export const Player = ({ handleClose, videoId }) => {
  const [className, setClassName] = useState('video-player');
  useEffect(() => {
    const source = sources[videoId];
    const player = source ? new Plyr('.video-player > video', playerOptions) : null;
    if (player) {
      player.source = source;
      player.autoplay = true;
      setClassName('video-player has-video');
    } else {
      setClassName('video-player');
    }
    return () => {
      setClassName('video-player');
      if (player) {
        player.destroy();
      }
    };
  }, [videoId]);

  return (
    <div className={className}>
      <div className="close-button" onClick={handleClose} />
      <video />
    </div>
  );
};
