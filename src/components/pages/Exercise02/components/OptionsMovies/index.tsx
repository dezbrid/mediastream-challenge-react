import React from "react";
import "./assets/styles.css";

export default function OptionsMovies() {
  return (
    <div className="movie-library__actions">
      <select name="genre" placeholder="Search by genre...">
        <option value="genre1">Genre 1</option>
      </select>
      <button>Order Descending</button>
    </div>
  );
}
