import React from "react";
import axios from "axios";

function RatingsList({ ratings, setRatings }) {
  function deleteRating(id) {
    axios
      .delete(`http://localhost:5432/ratings/${id}`)
      .then(() => {
        setRatings((prevRatings) =>
          prevRatings.filter((rating) => rating.ratings_id !== id)
        );
      })
      .catch((err) => console.log(err));
  }

  return (
    <section id="rating-list">
      {ratings.map((rating) => (
        <div className="ratings-card" key={rating.ratings_id}>
          <h2>{rating.name}</h2>
          <h3>Rating: {rating.rating}/5</h3>
          <button
            className="delete-btn"
            onClick={() => deleteRating(rating.ratings_id)}
          >
            Delete
          </button>
        </div>
      ))}
    </section>
  );
}

export default RatingsList;
