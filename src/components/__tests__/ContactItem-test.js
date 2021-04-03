import React from 'react';
import renderer from 'react-test-renderer';
import ContactItem from 'components/ContactItem';

test('renders correctly', () => {
  const tree = renderer.create(<ContactItem />).toJSON();
  expect(tree).toMatchSnapshot();
});
