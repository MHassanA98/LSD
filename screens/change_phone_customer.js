import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from '../assets/DatabaseConfig';

export default function Change_Phone({navigation}) {
  
  const [phone, setPhone] = useState('');
  const [rephone, setRephone] = useState('');

  const phoneInputHandler = inputPhone => {
    setPhone(inputPhone);
  };

  const rephoneInputHandler = inputRephone => {
    setRephone(inputRephone);
  };

  const handleConfirmPress = () => {
    if (phone.length == 11) {
      if (phone == rephone) {
        let emailcheck = firebase.auth().currentUser.email;
        firebase
          .database()
          .ref('/Users/' + emailcheck.substr(0, 8))
          .update({
            Phonenumber: phone,
          })
          .then(() => {
            alert('Phone number successfully updated');
          })
          .catch(() => {
            alert('Please check your internet connection');
          });
      } else {
        alert('phone numbers do not match!');
      }
    } else {
      alert('Phone number must be 11 characters.');
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.body}>
        <View style={styles.iconstyle}>
          <Icon
            name="phone"
            color="#d00f16"
            size={120}
            style={{
              transform: [{rotateX: '360deg'}],
              transform: [{rotate: '90deg'}],
            }}
          />
        </View>
        <View style={{paddingTop: '5%'}}>
          <TextInput
            style={styles.textbox}
            keyboardType="numeric"
            placeholder="New Phone Number"
            onChangeText={phoneInputHandler}
            value={phone}
          />
          <TextInput
            style={styles.textbox}
            keyboardType="numeric"
            placeholder="Confirm Phone Number"
            onChangeText={rephoneInputHandler}
            value={rephone}
          />
        </View>

        <View
          style={{
            marginTop: '15%',
            marginBottom: '40%',
            width: '50%',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity
            onPress={handleConfirmPress}
            style={styles.Confirmbutton}>
            <Text style={styles.bigbuttontext}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
  },

  body: {
    width: '100%',
    height: '100%',
    backgroundColor: '#e8e8e8',
    paddingTop: '10%',
    alignItems: 'center',
  },

  textbox: {
    width: 280,
    paddingHorizontal: 16,
    flexDirection: 'row',
    marginVertical: 16,
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 0,
    borderBottomWidth: 1,
    borderRadius: 4,
    height: 56,
  },

  iconstyle: {
    borderRadius: 180,
    height: 180,
    width: 180,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Confirmbutton: {
    padding: '5%',
    paddingHorizontal: 15,
    backgroundColor: '#d00f16',
    borderRadius: 20,
    width: 200,
    height: 40,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 2,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },

  bigbuttontext: {
    color: 'white',
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    textAlign: 'center',
  },
});
