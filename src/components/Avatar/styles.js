import { StyleSheet } from 'react-native';
import { RatioW } from 'utils';
import { colors } from 'theme';

const styles = StyleSheet.create({
  image: {
    width: 32 * RatioW,
    height: 32 * RatioW,
    borderRadius: 16 * RatioW,
  },
  avatar: {
    backgroundColor: colors.textDark5,
    width: 32 * RatioW,
    height: 32 * RatioW,
    borderRadius: 16 * RatioW,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
