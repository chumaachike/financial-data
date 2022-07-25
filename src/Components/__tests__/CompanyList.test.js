import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import CompanyListContainer from '../CompanyListContainer';

const Container = () => {
  <BrowserRouter>
    <CompanyListContainer />
  </BrowserRouter>;
};

it('CompanyListContainer renders correctly', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});
