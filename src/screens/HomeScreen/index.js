import React, { useState } from 'react';
import { View } from 'react-native';

import { CustomText, CustomButton, ContactModal } from 'components';
import styles from './styles';

const HomeScreen = () => {
  const [phoneNum, setPhoneNum] = useState('');
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <CustomText text={'PHONE NUMBER'} style={{ fontWeight: 'bold' }} />
      <CustomText text={phoneNum} size={14} />
      <CustomButton
        text={'OPEN'}
        width={100}
        height={40}
        handler={() => setIsShowModal(true)}
        style={styles.button}
      />
      <ContactModal
        isVisible={isShowModal}
        closeModal={() => setIsShowModal(false)}
        handlePhoneNum={(num) => setPhoneNum(num)}
      />
    </View>
  );
};

export default HomeScreen;
