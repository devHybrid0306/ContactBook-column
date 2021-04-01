import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import { CustomText, Avatar } from 'components';
import styles from './styles';

const ContactItem = (props) => {
  const { avatar, name, phoneNum, hasAvatar, handlePhoneNum } = props;

  return (
    <TouchableOpacity onPress={() => handlePhoneNum(phoneNum)}>
      <View style={styles.container}>
        <Avatar name={name} avatar={avatar} hasAvatar={hasAvatar} />
        <View style={styles.info}>
          <CustomText text={name} />
          <CustomText text={phoneNum} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ContactItem;
