import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import backg from '../assets/images/backg.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import firebase from '../assets/DatabaseConfig';

function END(mail) {
  return mail.endsWith('@lums.edu.pk');
}

export default function Registration({navigation}) {
  const SignUpPress = () => {
    navigation.navigate('Login');
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState();

  const emailInputHandler = inputEmail => {
    setEmail(inputEmail);
  };

  const passwordInputHandler = inputPassword => {
    setPassword(inputPassword);
  };

  const repasswordInputHandler = inputRepassword => {
    setRepassword(inputRepassword);
  };

  const phoneInputHandler = inputPhone => {
    setPhone(inputPhone);
  };

  const usernameInputHandler = inputUsername => {
    setUsername(inputUsername);
  };

  const errorMessageInputHandler = inputError => {
    setErrorMessage(inputError);
  };

  const handleSignUpPress = () => {
    emaillums = END(email);
    if (emaillums && email.length == 20) {
      if (password.length >= 8) {
        if (password == repassword) {
          if (phone.length == 11) {
            if (username) {
              handleSignUp();
              console.log('Signup');
            } else {
              alert('Username cannot be empty');
            }
          } else {
            alert('Your Phone number must be 11 digits long.');
          }
        } else {
          alert('Your re-entered password doesnot match.');
        }
      } else {
        alert('Please enter more than 8 characters for password.');
      }
    } else {
      alert('Please enter your LUMS email.');
    }
  };

  async function handleSignUp() {
    let meow1 = firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function(result) {
        console.log('User created');

        firebase
          .auth()
          .currentUser.sendEmailVerification()
          .then(() => {
            firebase
              .database()
              .ref('/Users/' + email.substr(0, 8))
              .set({
                Username: username,
                Useremail: email,
                Phonenumber: phone,
                Customerflag: true,
                Redemptionpoints: 0,
                BanStatus: false,
              }).catch((e)=>alert(e))
            console.log('Verify Email');
            SignUpPress();
          })
          .catch(function(error) {
            console.log(error);
          });

        console.log('Now Waiting for Verify');

        return result.user.updateProfile({
          displayName: username,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
    let meow1w = await meow1;
  }

  return (
    <ImageBackground source={backg} style={styles.bgimage}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <ScrollView style={styles.container}>
          <View style={styles.maincontainer}>
            <View style={styles.bigheading}>
              <Text style={styles.headingtext}>Get on board!</Text>
            </View>
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
                style={styles.inputtext}
                onChangeText={passwordInputHandler}
                value={password}
              />
            </View>
            <View style={styles.inputbox}>
              <Icon
                style={styles.inputicon2}
                name="lock-open-outline"
                size={24}
                color="#d00f16"
              />
              <TextInput
                placeholder="Re-enter Password"
                style={styles.inputtext}
                onChangeText={repasswordInputHandler}
                value={repassword}
              />
            </View>
            <View style={styles.inputbox}>
              <Icon
                style={styles.inputicon}
                name="account-outline"
                size={24}
                color="#d00f16"
              />
              <TextInput
                placeholder="Username"
                style={styles.inputtext}
                onChangeText={usernameInputHandler}
                value={username}
              />
            </View>
            <View style={styles.inputbox}>
              <Icon
                style={styles.inputicon}
                name="phone-outline"
                size={24}
                color="#d00f16"
              />
              <TextInput
                placeholder="Phone Number"
                style={styles.inputtext}
                keyboardType="numeric"
                onChangeText={phoneInputHandler}
                value={phone}
              />
            </View>
          </View>
          <View style={styles.bigbutton}>
            <TouchableOpacity
              style={styles.signupbutton}
              onPress={handleSignUpPress}>
              <Text style={styles.bigbuttontext}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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

  bigheading: {
    paddingTop: '14%',
    justifyContent: 'center',
  },

  headingtext: {
    fontFamily: 'Roboto-Medium',
    fontSize: 45,
    color: '#d00f16',
  },

  inputbox: {
    marginTop: '6%',
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
  },

  inputicon: {
    flex: 2,
  },

  inputicon2: {
    flex: 2,
  },

  inputtext: {
    marginLeft: 5,
    flex: 20,
    fontSize: 14,
    width: '65%',
    fontFamily: 'Roboto-Medium',
  },

  maincontainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 10,
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

  bigbutton: {
    paddingTop: '15%',
    alignItems: 'center',
    flex: 2,
  },

  signupbutton: {
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
