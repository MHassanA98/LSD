import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback} from "react-native";
import backg from "../assets/images/backg.png" ;
import lsdlogo from "../assets/images/lsdlogo.png" ;
import firebase from "../assets/DatabaseConfig" ;

import Icon from "react-native-vector-icons/FontAwesome" ;
import { NavigationEvents } from 'react-navigation';


function END(mail) {
  return mail.endsWith('@lums.edu.pk')
}

export default function Login({navigation}) {


  const LoginPress = () =>{

    let emailcheck = firebase.auth().currentUser.email
      mydb = firebase.database().ref('/Users/'+emailcheck.substr(0,8))
      mydb.once("value")
        .then(function(snapshot) {
          let custflag = snapshot.child("Customerflag").val()
<<<<<<< HEAD
          let username = snapshot.child("Username").val()
=======
          // let Name = snapshot.child("Username").val()
          // console.log(Name)
>>>>>>> 2caa7e3b077a20c3d97a09424f928a955a70a729
          if (custflag) {
            navigation.navigate('CustomerDrawer', {user:username})
          }
          else {
            navigation.navigate('AdminDrawer', {user:username})
          }
        })
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [repassword, setRepassword] = useState("");
  // const [username, setUsername] = useState("");
  // const [phone, setPhone] = useState("");
  // const [errorMessage, setErrorMessage] = useState();

  const emailInputHandler = (inputEmail) => {
    setEmail(inputEmail);
  };

  const passwordInputHandler = (inputPassword) => {
    setPassword(inputPassword);
  };

  // const errorMessageInputHandler = (inputError) => {
  //   setErrorMessage(inputError);
  // };

  const handleFpPress = () => {
    navigation.navigate('Forgotpwemail')
  }
  
  const handleSuPress = () => {
    navigation.navigate('Registration')
  }

  const handleLoginPress = () => {
    
    
    emaillums = END(email)
    if (emaillums){
      mydb = firebase.database().ref('/Users/'+email.substr(0,8))
      mydb.once("value")
        .then(function(snapshot) {

          let banstat = snapshot.child("BanStatus").val()
        
          if (!banstat) {
                handleLogin()
          }
          
          else {
            alert("You are banned for misconduct.") 
          }

        })
      }

      else {
        alert("Please enter your LUMS email.")
      }

  };

  async function handleLogin() {

    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      if (firebase.auth().currentUser.emailVerified) {
        LoginPress()
      }
      else {
        firebase.auth().currentUser.reload()
        alert("Please verify email before logging in.")
      }

    })
    .catch(function(error) {
      alert(error)
    })
    

  }

  function loginexists() {
    meow = firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        LoginPress()
      }
    })
  }

  return (
    <TouchableWithoutFeedback onPress = {() =>{
      Keyboard.dismiss()
    }}>
    <View style={styles.container}>
      <NavigationEvents onDidFocus={() => {loginexists()}} />
      <ImageBackground source={backg} style={styles.bgimage}>
        <View style={styles.maincontainer}>
          <Image
            style={styles.stretch}
            source={lsdlogo}
          />
          <View style={styles.inputbox}>
            <Icon style={styles.inputicon} name="envelope-o" size={24} color="#d00f16" />
            <TextInput placeholder="Email Address" style={styles.inputtext} onChangeText={emailInputHandler} value={email} ></TextInput>
          </View>
          <View  style={styles.inputbox}>
            <Icon style={styles.inputicon2} name="lock" size={24} color="#d00f16" />
            <TextInput secureTextEntry placeholder="Password" style={styles.inputtext} onChangeText={passwordInputHandler} value={password} ></TextInput>
          </View>
        </View>
        <View style={styles.clearbutton}> 
          <TouchableOpacity onPress={handleFpPress} >
            <Text style={styles.buttontext}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginbutton}> 
        <TouchableOpacity style={[styles.bigbutton]} onPress={handleLoginPress} >
          
            <Text style={styles.bigbuttontext}>Login</Text>
          
        </TouchableOpacity>
        </View>
        <View style={styles.clearbottombutton}> 
          <TouchableOpacity onPress={handleSuPress} >
            <Text style={styles.buttontext}>New user? Sign up!</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },

  bgimage: {
    flex: 1,
    resizeMode: "stretch",
    justifyContent: "center",
  },

  inputbox: {
    color: "grey",
    marginTop: '6%',
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 2,

  },

  inputicon: {
    paddingTop: '3%',
    paddingLeft: '2%',
    
  },
  inputicon2: {
    paddingTop: '3%',
    paddingLeft: '3%',
    paddingRight: '1%',
    
  },
  inputtext: {
    marginLeft: 5,
    fontSize: 14,
    width: '70%',
    fontFamily: 'Roboto-Bold',
  },

  stretch: {
    width: '60%',
    height: '40%',
    resizeMode: "contain",
  },

  maincontainer: {
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 6,
  },

  buttontext: {
    fontWeight: "bold",
    color: "#d00f16",
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
  },

  bigbuttontext: {
    fontWeight: "bold",
    color: "white",
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    textAlign: "center",
    paddingTop: '1%',
    paddingBottom: '1%',
  },
  
  clearbutton: {
    opacity: 0.8,
    paddingTop: 5,
    marginLeft: '57%',
    marginRight: '13%',
    flex: 1,
  },

  clearbottombutton: {
    opacity: 0.8,
    justifyContent: "center",
    marginLeft: '35%',
    flex: 1,
    alignItems: "baseline",
  },

  bigbutton: {
    borderRadius: 17,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 1,
    backgroundColor: "#d00f16",
  },

  loginbutton: {
    width:'50%',
    borderRadius: 17,
    textAlign: "center",
    alignSelf: "center",
  },
});






