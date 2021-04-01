import { StyleSheet } from 'react-native';
import { RatioW } from 'utils';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10 * RatioW,
  },
  info: {
    paddingLeft: 10 * RatioW,
  },
});

export default styles;
