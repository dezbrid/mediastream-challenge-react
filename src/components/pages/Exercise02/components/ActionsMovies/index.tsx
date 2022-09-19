import React, { ChangeEvent } from "react";
import "./assets/styles.css";
import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";
import {
  genreAsync,
  genresList,
  filterByGener,
  getOriginalList,
  orderDescending,
  orderAsecending,
} from "../../movieSlice";

export default function ActionsMovies() {
  const dispatch = useAppDispatch();
  const genres = useAppSelector(genresList);
  const [isDescending, setIsDescending] = useState<boolean>(true);

  useEffect(() => {
    dispatch(genreAsync());
  }, [dispatch]);

  const handleSelectedGener = (event: ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "All") dispatch(getOriginalList());
    else dispatch(filterByGener(event.target.value));
  };

  const handleOrderYear = () => {
    if (isDescending) dispatch(orderDescending());
    else dispatch(orderAsecending());
    setIsDescending((x) => !x);
  };
  return (
    <div className="movie-library__actions">
      <select
        name="genre"
        placeholder="Search by genre..."
        onChange={handleSelectedGener}
      >
        <option disabled selected value="">
          Search by genre...
        </option>
        <option value={"All"}>All</option>
        {genres.map((genre) => (
          <option value={genre}>{genre}</option>
        ))}
      </select>
      <button onClick={handleOrderYear}>
        Year {isDescending ? "Descending" : "Ascending"}
      </button>
    </div>
  );
}
