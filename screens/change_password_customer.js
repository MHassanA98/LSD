import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
//import Icon from "react-native-vector-icons/FontAwesome" ;
import Icon from 'react-native-vector-icons/Feather';
import firebase from '../assets/DatabaseConfig';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

//import CustomButton from '../screens/button' for later use

//brought to you by Shahzil
//Icons from the Top is missing
//Back handler has not been added
//Respective Functions have been made to make adding functionality easier
//Removed touchopacity, because couldn't make that button work. Working on a seperate button module, once done will implement that
//redesigned, brought to sds screens design and improved by jawad
//functionality added by hasan
//state declaration brought to standard declaration used on other screens

export default function Change_Password({navigation}) {
  //updatePassword
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
          // console.log("changed")
        } else {
          alert('passwords do not match!');
        }
      } else {
        alert('Password must be 8 characters or more.');
      }

    })
    .catch( function(error) {alert(error) })

  };

  //Main Container View//
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      {/* <View style={styles.container}> */}
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
            // style={{fontSize: 18, marginLeft: 15}}
            secureTextEntry
            placeholder="Old Password"
            onChangeText={oldpasswordInputHandler}
            value={oldpassword}
            style={styles.textbox}
          />
          {/* <View style={styles.textbox}> */}
          <TextInput
            // style={{fontSize: 18, marginLeft: 15}}
            secureTextEntry
            placeholder="New Password"
            onChangeText={passwordInputHandler}
            value={password}
            style={styles.textbox}
          />
          {/* </View>/ */}
          {/* <View style={styles.textbox}> */}
          <TextInput
            // style={{fontSize: 18, marginLeft: 15}}
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
            // flexDirection: 'column',
            // alignItems: 'center',
            // justifyContent: 'flex-end',
            paddingTop: 50,
          }}>
          <TouchableOpacity
            onPress={handleConfirmPress}
            style={styles.Confirmbutton}>
            <Text style={styles.bigbuttontext}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* </View> */}
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: '#e8e8e8',
    // backgroundColor: 'yellow',
    // marginTop: 50,
    // paddingTop: '20%',
    // marginVertical: 16,
    paddingTop: '10%',
    alignItems: 'center',
    // justifyContent: 'center',
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
    // marginTop: '10%',
    borderRadius: 180,
    height: 180,
    width: 180,
    // paddingBottom: '15%',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Confirmbutton: {
    // marginVertical: 10,
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
    // minHeight: '6%',
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
    // paddingTop: '2%',

    // opacity: 1,
  },
});
