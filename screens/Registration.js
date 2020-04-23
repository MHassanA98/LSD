import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, ImageBackground, TextInput, TouchableOpacity, } from "react-native";
import backg from "../assets/images/backg.png" ;
import Icon from "react-native-vector-icons/FontAwesome" ;
// import dist from "react-native-firebase" ;
// import firebase from "react-native-firebase" ;
// import firebase from "../node_modules/@react-native-firebase";
// import * as firebase from "../node_modules/@react-native-firebase" ;
import firebase from "@react-native-firebase/app" ;
import auth from "@react-native-firebase/auth" ;


function END(mail) {
  return mail.endsWith('@lums.edu.pk')
}


export const Registration = props => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();

  // var actionCodeSettings = {
  //   // The URL to redirect to for sign-in completion. This is also the deep
  //   // link for mobile redirects. The domain (www.example.com) for this URL
  //   // must be whitelisted in the Firebase Console.
  //   url: 'https://www.example.com/finishSignUp?cartId=1234',
  //   iOS: {
  //     bundleId: 'com.example.ios'
  //   },
  //   android: {
  //     packageName: 'com.example.android',
  //     installApp: true,
  //     minimumVersion: '12'
  //   },
  //   // This must be true.
  //   handleCodeInApp: true
  // };

  const emailInputHandler = (inputEmail) => {
    setEmail(inputEmail);
  };

  const passwordInputHandler = (inputPassword) => {
    setPassword(inputPassword);
  };

  const errorMessageInputHandler = (inputError) => {
    setErrorMessage(inputError);
  };

  const handleSignUpPress = () => {
    meow = END(email)
    if (meow) {
      handleSignUp()
      console.log("Signup")
    }
    else {
      console.log("email ghalat")
    }

  };

  async function handleSignUp() {
    let meow1 = firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {console.log("User created")})
      .catch(error => errorMessageInputHandler)

    let meow1w = await meow1

    let meow2 = firebase
      .auth().currentUser.sendEmailVerification()
      .then(()=> {console.log("Verify Email")})
      .catch(function(error) {console.log(error)})

    let meow2w = await meow2

    let meow3 = firebase
      .auth().currentUser.emailVerified = true

    let meow3w = await meow3

    // var meow3 = firebase
    //   .auth().currentUser.applyActionCode()
    //   .then(()=> {console.log("Action code")})
    //   .catch(function(error) {console.log(error)})
    
    console.log(firebase.auth().currentUser)
    console.log(firebase.auth().currentUser.emailVerified)
    console.log(meow1)
    console.log(meow2)
    // console.log(meow3)


    // console.log(errorMessage)
  }


  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={backg} style={styles.bgimage}>
        <View style={styles.maincontainer}>
          
          <View style={styles.bigheading}> 
              <Text style={styles.headingtext}>Get on board!</Text>
          </View>
          <View style={styles.inputbox}>
            <Icon style={styles.inputicon} name="font" size={30} color="gray" />
            <TextInput placeholder="Email Address" style={styles.inputtext}  onChangeText={emailInputHandler} value={email} ></TextInput>
          </View>
          <View  style={styles.inputbox}>
            <Icon style={styles.inputicon} name="rocket" size={30} color="gray" />
            <TextInput secureTextEntry placeholder="Password" style={styles.inputtext} onChangeText={passwordInputHandler} value={password} ></TextInput>
          </View>
          <View  style={styles.inputbox}>
            <Icon style={styles.inputicon} name="rocket" size={30} color="gray" />
            <TextInput placeholder="Re-enter Password" style={styles.inputtext} ></TextInput>
          </View>
          <View  style={styles.inputbox}>
            <Icon style={styles.inputicon} name="rocket" size={30} color="gray" />
            <TextInput placeholder="Username" style={styles.inputtext} ></TextInput>
          </View>
          <View  style={styles.inputbox}>
            <Icon style={styles.inputicon} name="rocket" size={30} color="gray" />
            <TextInput placeholder="Phone Number" style={styles.inputtext} ></TextInput>
          </View>
        </View>
        <TouchableOpacity style={styles.bigbutton} onPress={handleSignUpPress}>
          <View style={styles.signupbutton}> 
            <Text style={styles.bigbuttontext}>Sign up</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",

  },
  bgimage: {
    flex: 1,
    resizeMode: "stretch",
    justifyContent: "center",
    // position: "absolute",

  },
  bigheading: {
    // flex: 1,
    justifyContent: "center",

  },
  headingtext: {
    // flex: 1,
    // justifyContent: "center",
    fontFamily: 'Roboto-Bold',
    fontSize: 45,
    color: "#d00f16",
    // fontWeight: "bold",


  },
  inputbox: {
    marginTop: '6%',
    color: "grey",
    // paddingTop: '6%',
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 6,
    // shadowColor: '#000',
    // shadowOffset: { width: 2, height: 4 },
    // shadowOpacity: 0.9,
    // shadowRadius: 6,
    // elevation: 2,

  },
  inputicon: {
    padding: 2,
    // color: "grey",
    // paddingTop: '6%',
    // flexDirection: "row",
    // flex: 1,

  },
  inputtext: {
    marginLeft: 5,
    // padding: '2%',
    // backgroundColor: "white",
    fontSize: 14,
    // borderWidth: 1,
    // borderRadius: 6,
    // borderColor: '#777',
    // fontWeight: 'bold',
    width: '65%',
    fontFamily: 'Roboto-Bold',
    // shadowColor: '#000',
    // shadowOffset: { width: 2, height: 4 },
    // shadowOpacity: 0.9,
    // shadowRadius: 6,
    // elevation: 2,

  },
  maincontainer: {
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 10,

  },
  bigbuttontext: {
    fontWeight: "bold",
    color: "white",
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    textAlign: "center",
    // minHeight: '10%',
    paddingTop: '1%',
    paddingBottom: '1%',

  },
  bigbutton: {
    paddingHorizontal: '23%',
    paddingTop: '15%',
    // paddingBottom: '15%',
    // minHeight: '6%',
    flex: 2,

  },
  signupbutton: {
    // paddingHorizontal: '20%',
    // paddingTop: '5%',
    backgroundColor: "#d00f16",
    borderRadius: 17,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 2,
    // minHeight: '5%',
    textAlign: "center",
    
  },
});

export default Registration;

