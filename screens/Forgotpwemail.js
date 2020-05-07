import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import backg from '../assets/images/backg.png';
import firebase from '../assets/DatabaseConfig';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function END(mail) {
  return mail.endsWith('@lums.edu.pk');
}

export default function Forgotpwemail({navigation}) {
  const ConfirmPress = () => {
    navigation.navigate('Login');
  };

  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState();

  const emailInputHandler = inputEmail => {
    setEmail(inputEmail);
  };

  const errorMessageInputHandler = inputError => {
    setErrorMessage(inputError);
  };

  const handleConfirmPress = () => {
    emaillums = END(email);
    if (emaillums) {
      handleResetEmail();
      console.log('Login');
    } else {
      alert('Please enter your LUMS email.');
    }
  };

  async function handleResetEmail() {
    let meow1 = firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        ConfirmPress();
        console.log('User sent pw reset email');
      })
      .catch(function(error) {
        console.log(error);
        alert(error);
        errorMessageInputHandler;
      });
    let meow1w = await meow1;
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <ImageBackground source={backg} style={styles.bgimage}>
          <View style={styles.topsentence}>
            <Text style={styles.toptext}>
              Forgot your password? That's fine! Confirm your email and we'll
              send you a link
            </Text>
          </View>

          <View style={styles.maincontainer}>
            <View style={styles.inputbox}>
              <Icon
                style={styles.inputicon}
                name="email-outline"
                size={24}
                color="#d00f16"
              />
              <TextInput
                placeholder="Email Address"
                style={styles.inputtext}
                onChangeText={emailInputHandler}
                value={email}
              />
            </View>
          </View>
          <View style={styles.bigbutton}>
            <TouchableOpacity
              style={styles.confirmbutton}
              onPress={handleConfirmPress}>
              <Text style={styles.bigbuttontext}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  bgimage: {
    flex: 1,
    resizeMode: 'stretch',
    justifyContent: 'center',
  },

  inputbox: {
    color: 'grey',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 6,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: '2%',
    width: 280,
    height: 56,
    borderColor: 'black',
    borderBottomWidth: 0.5,
  },

  inputicon: {
    flex: 2,
  },

  inputtext: {
    marginLeft: 5,
    flex: 20,
    fontSize: 14,
    width: '70%',
    fontFamily: 'Roboto-Bold',
  },

  maincontainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: '10%',
  },

  toptext: {
    fontWeight: 'bold',
    color: '#d00f16',
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
  },

  bigbuttontext: {
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    textAlign: 'center',
    paddingTop: '1%',
    paddingBottom: '1%',
  },

  topsentence: {
    paddingTop: '35%',
    justifyContent: 'center',
    width: '70%',
    marginLeft: '15%',
    flex: 1,
    alignItems: 'baseline',
  },

  bigbutton: {
    paddingTop: '15%',
    alignItems: 'center',
    flex: 2,
  },

  confirmbutton: {
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
});
