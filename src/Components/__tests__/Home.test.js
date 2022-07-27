import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import Home from '../Home';

const Container = () => {
  <BrowserRouter>
    <Home />
  </BrowserRouter>;
};

it('CompanyListContainer renders correctly', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});
