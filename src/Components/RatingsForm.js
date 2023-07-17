import axios from "axios";
import React, { useState } from "react";
import "./RatingsForm.css";
function RatingForm({ videoName, setRatings }) {
  const [rating, setRating] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post("http://localhost:5432/ratings", {
        name: videoName,
        rating: rating,
      })
      .then(() => {
        setRating("");
        axios
          .get("http://localhost:5432/ratings")
          .then((response) => setRatings(response.data))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Rating:
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          min="1"
          max="5"
          required
        />
      </label>
      <button className="submitBtn" type="submit">
        Submit
      </button>
    </form>
  );
}

export default RatingForm;
