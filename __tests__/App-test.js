import 'react-native';
import React from 'react';
import App from '../App';
// Note: test renderer must be required after react-native.
import { act } from 'react-test-renderer';
import { render } from '@testing-library/react-native';
describe('<App />', () => {
  jest.useFakeTimers();
  it('renders correctly', async () => {
    const result = render(<App />);
    await act(async () => {
      expect(result).toMatchSnapshot();
    });
  });
});
