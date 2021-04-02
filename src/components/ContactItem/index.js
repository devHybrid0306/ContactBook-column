import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import { CustomText, Avatar } from 'components';
import { colors } from 'theme';
import styles from './styles';

const ContactItem = (props) => {
  const { avatar, name, phoneNum, phoneLabel, hasAvatar, handlePhoneNum } = props;

  return (
    <TouchableOpacity onPress={() => handlePhoneNum(phoneNum)}>
      <View style={styles.container}>
        <Avatar name={name} avatar={avatar} hasAvatar={hasAvatar} />
        <View style={styles.info}>
          <CustomText text={name} />
          {phoneNum !== '' && (
            <CustomText text={`[ ${phoneLabel} ] ${phoneNum}`} size={14} color={colors.textDark5} />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ContactItem;
