import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import App from '../../App';

const Container = () => {
  <BrowserRouter>
    <App />
  </BrowserRouter>;
};

it('App renders correctly', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});
