import React from 'react';
import renderer from 'react-test-renderer';
import Details from '../Details';
import DetailCard from '../DetailCard';

const Container = () => {
  <Details>
    <DetailCard />
  </Details>;
};

it('DetailCard renders correctly', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});
