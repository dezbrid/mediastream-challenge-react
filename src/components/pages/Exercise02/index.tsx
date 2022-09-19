/* eslint-disable react-hooks/exhaustive-deps */
/**
 * Exercise 02: Movie Library
 * We are trying to make a movie library for internal users. We are facing some issues by creating this, try to help us following the next steps:
 * !IMPORTANT: Make sure to run yarn movie-api for this exercise
 * 1. We have an issue fetching the list of movies, check why and fix it (handleMovieFetch)
 * 2. Create a filter by fetching the list of gender (http://localhost:3001/genres) and then loading
 * list of movies that belong to that gender (Filter all movies).
 * 3. Order the movies by year and implement a button that switch between ascending and descending order for the list
 * 4. Try to recreate the user interface that comes with the exercise (exercise02.png)
 *
 * You can modify all the code, this component isn't well designed intentionally. You can redesign it as you need.
 */

import React from "react";
import "./assets/styles.css";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

import { moviesAsync, moviesList, loadingMovies } from "./movieSlice";
import MoviePosterCard from "./components/MoviePosterCard";
import ActionsMovies from "./components/ActionsMovies";

export default function Exercise02() {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(moviesList);
  const loading = useAppSelector(loadingMovies);
  const [fetchCount, setFetchCount] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timer>();

  const handleMovieFetch = () => {
    const id = setInterval(() => setFetchCount((x) => x + 1), 100);
    setIntervalId(id);
    dispatch(moviesAsync());
  };

  useEffect(() => {
    handleMovieFetch();
  }, []);

  useEffect(() => {
    if (intervalId && !loading) {
      clearInterval(intervalId);
      setFetchCount(0);
    }
  }, [intervalId, loading]);

  return (
    <section className="movie-library">
      <h1 className="movie-library__title">Movie Library</h1>
      <ActionsMovies />
      {loading ? (
        <div className="movie-library__loading">
          <p>Loading...</p>
          <p>Fetched {fetchCount} times</p>
        </div>
      ) : (
        <div className="movie-library__list">
          {movies.map((movie) => (
            <MoviePosterCard {...movie} key={movie.id} />
          ))}
        </div>
      )}
    </section>
  );
}
