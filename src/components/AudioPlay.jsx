import React from "react";
import { useState } from "react";

function AudioPlay(props) {
  const wordAudio = new Audio(props.audio);
  let id = 0;
  const audioStatus = {
    play: {
      text: "play",
      img: [
        <svg
          key={id++}
          width="70"
          height="70"
          viewBox="0 0 148 148"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="play-circle cursor-pointer"
        >
          <circle cx="74" cy="74" r="74" />
          <path d="M107 73.5L57.5 108.574V38.426L107 73.5Z" fill="#00ADB5" />
        </svg>,
      ],
    },
    pause: {
      text: "pause",
      img: [
        <svg
          key={id++}
          width="70"
          height="70"
          viewBox="0 0 148 148"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="play-circle cursor-pointer"
        >
          <circle cx="74" cy="74" r="74" />
          <rect x="44" y="41" width="23.087" height="66" fill="#00ADB5" />
          <rect x="79.913" y="41" width="23.087" height="66" fill="#00ADB5" />
        </svg>,
      ],
    },
  };
  const [status, setStatus] = useState(audioStatus.play);

  function handleStatus() {
    setStatus(audioStatus.pause);
    wordAudio.play();
    wordAudio.onended = () => {
      setStatus(audioStatus.play);
    };
  }

  return (
    <div key={status.img} onClick={handleStatus}>
      {status.img}
    </div>
  );
}

export default AudioPlay;
