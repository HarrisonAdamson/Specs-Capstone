import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import keyboardArray from "../Data.js";
import "./VideoPlayer.css";

function VideoPlayer({ videoName, setVideoName }) {
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
    <div className="video">
      <h2>{videoName}</h2>
      <div className="player">
        <YouTube
          videoId={keyboardArray[currentIndex].videoId}
          onReady={onPlayerReady}
        />
      </div>
      <button className="changeBtn" onClick={changeVideo}>
        Change Video
      </button>
    </div>
  );
}

export default VideoPlayer;
