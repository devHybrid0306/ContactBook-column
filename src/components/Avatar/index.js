import React from 'react';
import { View, Image } from 'react-native';

import { CustomText } from 'components';
import { colors } from 'theme';
import styles from './styles';

const Avatar = (props) => {
  const { avatar, hasAvatar, name } = props;

  return (
    <>
      {hasAvatar ? (
        <Image source={{ uri: avatar }} style={styles.image} />
      ) : (
        <View style={styles.avatar}>
          <CustomText text={name.slice(0, 1)} color={colors.white} />
        </View>
      )}
    </>
  );
};

export default Avatar;
