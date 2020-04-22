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
      this.handleSignUp()
      console.log("WOW")
    }
    else {
      console.log("WTF?")
    }
    console.log(meow)
    console.log(email, password)

  };

  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {console.log("kiu kar rahe ho yar")})
      .catch(error => errorMessageInputHandler)

    console.log(errorMessage)
  }


  return (
    <View style={styles.container}>
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
    </View>
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

