import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import "./App.css";
// This component represents the main application.

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller.",
      posterURL: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
      rating: 5,
    },
    {
      title: "Interstellar",
      description: "Space exploration beyond imagination.",
      posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngBJ0B7UDrLUkDlp6DCQLsEYuWR-DiHwbnxFFCniB3HiP3f3NZmR1-lKSC34ge6YXu4LX",
      rating: 5,
    },
  ]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState("");

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      (filterRating === "" || movie.rating >= Number(filterRating))
  );

  return (
    <div className="app">
      <h1>🎬 My Movie App 🎥</h1>
      <Filter setFilterTitle={setFilterTitle} setFilterRating={setFilterRating} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
