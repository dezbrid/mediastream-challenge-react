import React from 'react';
import renderer from 'react-test-renderer';
import { MOVIES } from "../../mocks";
import MovieCard from './index';

describe('<MovieCard />', () => {
  it('<MovieCard /> snapshot', () => {
    const tree = renderer.create(<MovieCard  {...MOVIES[0]}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
