import { StyleSheet } from 'react-native';
import { colors } from 'theme';
import { width, height, RatioW } from 'utils';

const styles = StyleSheet.create({
  modal: {
    width: width - 70 * RatioW,
    alignSelf: 'center',
  },
  container: {
    height: (height * 3) / 4,
    backgroundColor: colors.white,
    padding: 20 * RatioW,
  },
  button: {
    alignSelf: 'center',
    marginTop: 20 * RatioW,
  },
});

export default styles;
