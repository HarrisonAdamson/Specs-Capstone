import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import keyboardArray from "../Data.js";

function VideoPlayer({ setVideoName }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function onPlayerReady(event) {
    event.target.playVideo();
    setVideoName(keyboardArray[currentIndex].name);
  }

  function changeVideo() {
    setCurrentIndex((currentIndex + 1) % keyboardArray.length);
  }

  useEffect(() => {
    setVideoName(keyboardArray[currentIndex].name);
  }, [currentIndex, setVideoName]);

  return (
    <div>
      <YouTube
        videoId={keyboardArray[currentIndex].videoId}
        onReady={onPlayerReady}
      />
      <button onClick={changeVideo}>Change Video</button>
    </div>
  );
}

export default VideoPlayer;
