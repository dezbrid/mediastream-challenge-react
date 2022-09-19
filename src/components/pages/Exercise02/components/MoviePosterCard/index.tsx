import React from "react";

import "./assets/styles.css";
import {Movie} from "../../interface";


export default function MoviePosterCard(movie: Movie) {

  return (
    <li  className="movie-library__card">
      <img src={movie.posterUrl} alt={movie.title} />
      <ul>
        <li>ID: {movie.id}</li>
        <li>Title: {movie.title}</li>
        <li>Year: {movie.year}</li>
        <li>Runtime: {movie.runtime}</li>
        <li>Genres: {movie.genres.join(", ")}</li>
      </ul>
    </li>
  );
}