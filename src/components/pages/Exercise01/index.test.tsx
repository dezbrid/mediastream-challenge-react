import React from 'react';
import renderer from 'react-test-renderer';
import Exercise01 from './index';

describe('<Exercise01 />', () => {
  it('<Exercise01 /> snapshot', () => {
    const tree = renderer.create(<Exercise01 />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
