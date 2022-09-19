import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { MOVIES } from "../../mocks";
import MovieCard from "./index";
import { store } from '../../../../../app/store';

describe("<MovieCard />", () => {
  it("<MovieCard /> snapshot", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MovieCard {...MOVIES[0]} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
