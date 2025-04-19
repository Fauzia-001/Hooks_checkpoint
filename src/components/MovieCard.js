import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>⭐ {movie.rating}</p>
    </div>
  );
};

export default MovieCard;
// This component represents a single movie card.
// It receives a `movie` object as a prop and displays its poster, title,
// description, and rating.
// The `posterURL` is used as the source for the image, and the other
