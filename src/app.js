import React, { useState, useEffect } from "react";
import axios from "axios";
import RatingsList from "./Components/RatingsList";
import VideoPlayer from "./Components/VideoPlayer";
import RatingForm from "./Components/RatingsForm";

function App() {
  const [videoName, setVideoName] = useState("");
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    fetchRatings();
  }, []);

  function fetchRatings() {
    axios
      .get("http://localhost:5432/ratings")
      .then((response) => setRatings(response.data))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h1>Random Keyboard Sounds</h1>
      <h2>{videoName}</h2>
      <VideoPlayer setVideoName={setVideoName} />
      <RatingForm videoName={videoName} setRatings={setRatings} />
      <RatingsList ratings={ratings} setRatings={setRatings} />
    </div>
  );
}

export default App;
