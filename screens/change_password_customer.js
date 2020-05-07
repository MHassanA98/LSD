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
import Icon from 'react-native-vector-icons/Feather';
import firebase from '../assets/DatabaseConfig';

export default function Change_Password({navigation}) {
  const [oldpassword, setOldpassword] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const oldpasswordInputHandler = inputOldpassword => {
    setOldpassword(inputOldpassword);
  };

  const repasswordInputHandler = inputRepassword => {
    setRepassword(inputRepassword);
  };

  const passwordInputHandler = inputPassword => {
    setPassword(inputPassword);
  };

  const handleConfirmPress = () => {

    let credential = firebase.auth.EmailAuthProvider.credential(firebase.auth().currentUser.email, oldpassword);

    firebase.auth().currentUser.reauthenticateWithCredential(credential)
    .then( function () {
      if (password.length >= 8) {
        if (password == repassword) {
          firebase
            .auth()
            .currentUser.updatePassword(password)
            .then(alert('Password succesfully changed!'))
            .catch(function(error) {
              alert(error);
            });
        } else {
          alert('passwords do not match!');
        }
      } else {
        alert('Password must be 8 characters or more.');
      }

    })
    .catch( function(error) {alert(error) })
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.body}>
        <View style={{flex: 2}}>
          <View style={styles.iconstyle}>
            <Icon
              name="key"
              color="#d00f16"
              size={120}
              style={{
                opacity: 0.8,
                transform: [{rotateX: '360deg'}],
                transform: [{rotate: '90deg'}],
              }}
            />
          </View>
        </View>
        <View style={{flex: 3}}>
          <TextInput
            secureTextEntry
            placeholder="Old Password"
            onChangeText={oldpasswordInputHandler}
            value={oldpassword}
            style={styles.textbox}
          />
          <TextInput
            secureTextEntry
            placeholder="New Password"
            onChangeText={passwordInputHandler}
            value={password}
            style={styles.textbox}
          />
          <TextInput
            secureTextEntry
            placeholder="Confirm Password"
            onChangeText={repasswordInputHandler}
            value={repassword}
            style={styles.textbox}
          />
        </View>

        <View
          style={{
            flexDirection: 'column',
            alignItems: 'flex-end',
            flex: 1,
            paddingTop: 50,
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
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    textAlign: 'center',
  },
});
