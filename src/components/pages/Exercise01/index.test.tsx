import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import Exercise01 from "./index";
import { store } from '../../../app/store';

describe("<Exercise01 />", () => {
  it("<Exercise01 /> snapshot", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Exercise01 />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
