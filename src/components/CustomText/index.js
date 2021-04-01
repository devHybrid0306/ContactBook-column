import React from 'react';
import { Text } from 'react-native';

import { colors } from 'theme';
import { RatioW } from 'utils';

const CustomText = (props) => {
  const { color = colors.textDark, size = 16, text, style, onPress } = props;

  return (
    <Text
      style={{
        color: color,
        fontSize: size * RatioW,
        textAlign: 'left',
        ...style,
      }}
      onPress={onPress}>
      {text || ' '}
    </Text>
  );
};

export default CustomText;
