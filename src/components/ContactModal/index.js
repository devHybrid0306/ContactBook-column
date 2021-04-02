import React, { useEffect, useState } from 'react';
import { View, PermissionsAndroid, Platform, FlatList } from 'react-native';
import Modal from 'react-native-modal';
import Contacts from 'react-native-contacts';

import { ContactItem, CustomButton } from 'components';
import styles from './styles';

const ContactModal = (props) => {
  const { isVisible, closeModal, handlePhoneNum } = props;
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getAllContacts();
  }, []);

  const requestPermissions = async () => {
    if (Platform.OS === 'android') {
      let status = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS);
      if (status === 'denied' || status === 'never_ask_again') {
        throw Error('Permission not granted to access contacts');
      }
    }
  };

  const getAllContacts = async () => {
    await requestPermissions();
    return new Promise((res, rej) => {
      Contacts.getAll((err, contactsRes) => {
        if (err) {
          rej(Error('Permission not granted to access contacts'));
        } else {
          res(contactsRes);
          setContacts(contactsRes);
        }
      });
    });
  };

  const renderContact = ({ item }) => {
    const { recordID, thumbnailPath, displayName, phoneNumbers, hasThumbnail } = item;
    let phoneNum = '';
    let phoneLabel = '';
    if (phoneNumbers.length !== 0) {
      phoneNum = phoneNumbers[0].number;
      phoneLabel = phoneNumbers[0].label;
    }

    return (
      <ContactItem
        key={recordID}
        avatar={thumbnailPath}
        name={displayName}
        phoneNum={phoneNum}
        phoneLabel={phoneLabel}
        hasAvatar={hasThumbnail}
        handlePhoneNum={(num) => {
          handlePhoneNum(num);
          closeModal();
        }}
      />
    );
  };

  return (
    <Modal
      isVisible={isVisible}
      onBackButtonPress={closeModal}
      hasBackdrop={true}
      style={styles.modal}>
      <View style={styles.container}>
        <FlatList
          data={contacts}
          renderItem={renderContact}
          keyExtractor={(item) => item.recordID}
        />
      </View>
      <CustomButton text={'CLOSE'} height={40} style={styles.button} handler={closeModal} />
    </Modal>
  );
};

export default ContactModal;
