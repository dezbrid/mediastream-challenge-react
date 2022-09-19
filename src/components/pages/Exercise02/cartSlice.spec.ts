import moviesReducer, { MoviesState,filterByGener } from "./movieSlice";


describe("Movies reducer", () => {
  const initialState: MoviesState = {
    movies: [],
    moviesList: [],
    genresList: [],
    loadingMovies: false,
    loadingGenres: false,
  };

  it("should handle initial state", () => {
    expect(moviesReducer(undefined, { type: "unknown" })).toEqual({
      movies: [],
      moviesList: [],
      genresList: [],
      loadingMovies: false,
      loadingGenres: false,
    });
  });
});
