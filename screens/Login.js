import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import backg from '../assets/images/backg.png';
import lsdlogo from '../assets/images/lsdlogo.png';
import AsyncStorage from '@react-native-community/async-storage';
import firebase from '../assets/DatabaseConfig';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function END(mail) {
  return mail.endsWith('@lums.edu.pk');
}

export default function Login({navigation}) {

  async function removeData() {
    try {
      const keys = await AsyncStorage.getAllKeys();
      await AsyncStorage.multiRemove(keys);
    } catch (e) {
      console.log(e);
    }
  }

  const LoginPress = () => {
    let emailcheck = firebase.auth().currentUser.email;
    mydb = firebase.database().ref('/Users/' + emailcheck.substr(0, 8));
    mydb.once('value').then(function(snapshot) {
      let custflag = snapshot.child('Customerflag').val();
      let username = snapshot.child('Username').val();
      if (custflag) {
        removeData();
        navigation.navigate('CustomerDrawer', {user: username});
      } else {
        navigation.navigate('AdminDrawer', {user: username});
      }
    });
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailInputHandler = inputEmail => {
    setEmail(inputEmail);
  };

  const passwordInputHandler = inputPassword => {
    setPassword(inputPassword);
  };

  const handleFpPress = () => {
    navigation.navigate('Forgotpwemail');
  };

  const handleSuPress = () => {
    navigation.navigate('Registration');
  };

  const handleLoginPress = () => {
    if (email == '') {
      alert('Please enter your email address');
    } else if (password == '') {
      alert('Please enter your password');
    } else {
      emaillums = END(email);
      if (emaillums) {
        mydb = firebase.database().ref('/Users/' + email.substr(0, 8));
        mydb.once('value').then(function(snapshot) {
          let banstat = snapshot.child('BanStatus').val();

          if (!banstat) {
            handleLogin();
          } else {
            alert('You are banned for misconduct.');
          }
        });
      } else {
        alert('Please enter your LUMS email.');
      }
    }
  };

  async function handleLogin() {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        if (firebase.auth().currentUser.emailVerified) {
          LoginPress();
        } else {
          firebase.auth().currentUser.reload();
          alert('Please verify email before logging in.');
        }
      })
      .catch(function(error) {
        alert(error);
      });
  }
  return (
    <ImageBackground source={backg} style={styles.bgimage}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <View style={styles.container} scrollEnabled={false}>
          <View style={styles.maincontainer}>
            <Image style={styles.stretch} source={lsdlogo} />
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
            <View style={styles.inputbox}>
              <Icon
                style={styles.inputicon2}
                name="lock-outline"
                size={24}
                color="#d00f16"
              />
              <TextInput
                secureTextEntry
                placeholder="Password"
                style={styles.inputtext2}
                onChangeText={passwordInputHandler}
                value={password}
              />
            </View>
            <View style={styles.clearbutton}>
              <TouchableOpacity onPress={handleFpPress}>
                <Text style={styles.buttontext}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.loginbutton}>
            <TouchableOpacity
              style={[styles.bigbutton]}
              onPress={handleLoginPress}>
              <Text style={styles.bigbuttontext}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.clearbottombutton}>
            <TouchableOpacity onPress={handleSuPress}>
              <Text style={styles.buttontext}>New user? Sign up!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
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
    alignItems: 'center',
    paddingHorizontal: '2%',
    width: 280,
    height: 56,
    borderColor: 'black',
    borderBottomWidth: 0.5,
    marginTop: '6%',
  },

  inputicon: {
    flex: 2,
  },

  inputicon2: {
    flex: 2,
    paddingLeft: 1,
  },

  inputtext: {
    flex: 20,
    fontSize: 14,
    marginLeft: 3,
    fontFamily: 'Roboto-Medium',
  },

  inputtext2: {
    flex: 20,
    fontSize: 14,
    marginLeft: 2,
    fontFamily: 'Roboto-Medium',
  },

  stretch: {
    width: '60%',
    height: '40%',
    resizeMode: 'contain',
  },

  maincontainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: '10%',
    flex: 10,
  },

  buttontext: {
    fontWeight: 'bold',
    color: '#d00f16',
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
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

  clearbutton: {
    opacity: 0.8,
    paddingTop: 16,
    flexDirection: 'row',
    marginLeft: '47%',
    marginRight: '13%',
    flex: 1,
  },

  clearbottombutton: {
    opacity: 0.8,
    justifyContent: 'center',
    marginLeft: '35%',
    flex: 1,
    alignItems: 'baseline',
  },

  bigbutton: {
    backgroundColor: '#d00f16',
    borderRadius: 20,
    width: 200,
    height: 40,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.9,
    shadowRadius: 6,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },

  loginbutton: {
    flex: 1,
    width: '50%',
    borderRadius: 17,
    textAlign: 'center',
    alignSelf: 'center',
  },
});
