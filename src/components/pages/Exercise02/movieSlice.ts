import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import { Movie } from "./interface";

export interface MoviesState {
  movies: Movie[];
  moviesList: Movie[];
  genresList: string[];
  loadingMovies: boolean;
  loadingGenres: boolean;
}

const initialState: MoviesState = {
  movies: [],
  moviesList: [],
  genresList: [],
  loadingMovies: false,
  loadingGenres: false,
};

export const moviesAsync = createAsyncThunk(
  "movies",
  async (): Promise<Movie[]> => {
    const response = await fetch("http://localhost:3001/movies?_limit=50");
    const data = await response.json();
    return data;
  }
);
export const genreAsync = createAsyncThunk(
  "genres",
  async (): Promise<string[]> => {
    const response = await fetch("http://localhost:3001/genres");
    const data = await response.json();
    return data;
  }
);
export const movietSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    filterByGener: (state, action: PayloadAction<string>) => {
      state.moviesList = state.movies.filter((movie) => {
        return movie.genres.some((gener) => gener === action.payload);
      });
    },
    getOriginalList: (state) => {
      state.moviesList = state.movies;
    },
    orderDescending: (state) => {
      state.moviesList = orderListDescending(state.moviesList);
    },
    orderAsecending: (state) => {
      state.moviesList = orderListAscending(state.moviesList);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(moviesAsync.pending, (state) => {
        state.loadingMovies = true;
      })
      .addCase(moviesAsync.fulfilled, (state, action) => {
        state.loadingMovies = false;
        state.moviesList = action.payload;
        state.movies = action.payload;
      })
      .addCase(moviesAsync.rejected, (state) => {
        state.loadingMovies = false;
      })
      .addCase(genreAsync.pending, (state) => {
        state.loadingGenres = true;
      })
      .addCase(genreAsync.fulfilled, (state, action) => {
        state.loadingGenres = false;
        state.genresList = action.payload;
      })
      .addCase(genreAsync.rejected, (state) => {
        state.loadingGenres = false;
      });
  },
});
const orderListAscending = (list: Movie[]): Movie[] => {
  var orderList = [...list];
  orderList.sort((a, b) => {
    if (Number(a.year) > Number(b.year)) return 1;
    if (Number(a.year) < Number(b.year)) return -1;
    return 0;
  });
  return orderList;
};
const orderListDescending = (list: Movie[]): Movie[] => {
  var orderList = [...list];
  orderList.sort((a, b) => {
    if (Number(a.year) > Number(b.year)) return -1;
    if (Number(a.year) < Number(b.year)) return 1;
    return 0;
  });
  return orderList;
};
export const {
  filterByGener,
  getOriginalList,
  orderDescending,
  orderAsecending,
} = movietSlice.actions;
export const moviesList = (state: RootState) => state.movies.moviesList;
export const loadingMovies = (state: RootState) => state.movies.loadingMovies;
export const genresList = (state: RootState) => state.movies.genresList;
export const loadingGenres = (state: RootState) => state.movies.loadingGenres;

export default movietSlice.reducer;
