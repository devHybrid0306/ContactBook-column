import React from 'react';
import renderer from 'react-test-renderer';
import ContactModal from 'components/ContactModal';

test('renders correctly', () => {
  const tree = renderer.create(<ContactModal />).toJSON();
  expect(tree).toMatchSnapshot();
});
