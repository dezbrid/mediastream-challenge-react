import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import { Movie } from "./interface";


export interface CartState {
  moviesList: Movie[];
  genre: string[];
  loadingMovie: boolean;
  loadingGenre: boolean;
}

const initialState: CartState = {
  moviesList: [],
  genre: [],
  loadingMovie: false,
  loadingGenre: false,
};

export const moviesAsync = createAsyncThunk(
  "movies",
  async (): Promise<Movie[]> => {
    const response = await fetch("http://localhost:3001/movies?_limit=50");
    const data = await response.json();
    return data;
  }
);
export const movietSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(moviesAsync.pending, (state) => {
        state.loadingMovie = true;
      })
      .addCase(moviesAsync.fulfilled, (state, action) => {
        state.loadingMovie = false;
        state.moviesList = action.payload;        
      })
      .addCase(moviesAsync.rejected, (state) => {
        state.loadingMovie = false;
      });
  },
});

export const {} = movietSlice.actions;
export const moviesList = (state: RootState) => state.movies.moviesList;
export const loadingMovie = (state: RootState) => state.movies.loadingMovie;

export default movietSlice.reducer;
