import React from "react";

import "./assets/styles.css";
import { Movie } from "../../interface";

export default function MoviePosterCard(movie: Movie) {
  return (
    <div
      className="movie-library__card"
      style={{ backgroundImage: `url(${movie.posterUrl})` }}
    >
      <div className="movie-library__card-info">
        <span>{movie.title}</span>
        <span>{movie.genres.join(", ")}</span>
        <span>{movie.year}</span>
      </div>
    </div>
  );
}
