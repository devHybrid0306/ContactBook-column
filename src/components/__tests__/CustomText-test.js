import React from 'react';
import renderer from 'react-test-renderer';
import CustomText from 'components/CustomText';

test('renders correctly', () => {
  const tree = renderer.create(<CustomText />).toJSON();
  expect(tree).toMatchSnapshot();
});
