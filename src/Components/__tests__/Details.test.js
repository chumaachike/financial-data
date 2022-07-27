import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import Details from '../Details';

const Container = () => {
  <BrowserRouter>
    <Details />
  </BrowserRouter>;
};

it('Details renders correctly', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});
