import React from 'react';
import renderer from 'react-test-renderer';
import AllCompanies from '../AllCompanies';

import Company from '../Company';

const Container = () => {
  <AllCompanies>
    <Company />
  </AllCompanies>;
};

it('Company renders correctly', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});
