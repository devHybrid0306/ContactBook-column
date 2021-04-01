import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import { CustomText } from 'components';
import { colors } from 'theme';
import { RatioW } from 'utils';

const CustomButton = (props) => {
  const {
    handler,
    width,
    height,
    borderRadius = 10,
    bkgColor = colors.primary,
    text,
    fontSize = 15,
    style,
    disabled = false,
  } = props;

  return (
    <TouchableOpacity disabled={disabled} onPress={handler}>
      <View
        style={{
          flexDirection: 'row',
          width: width ? width * RatioW : '100%',
          height: height * RatioW,
          borderRadius: borderRadius * RatioW,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: bkgColor,
          ...style,
        }}>
        <CustomText text={text} color={colors.white} size={fontSize} />
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
