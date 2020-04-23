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


// export const Registration = ({navigation}) => {
export default function Registration({navigation}) {

  // const SignUpPress = () =>{
  //   navigation.navigate('Login')
  // }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState();

  const emailInputHandler = (inputEmail) => {
    setEmail(inputEmail);
  };

  const passwordInputHandler = (inputPassword) => {
    setPassword(inputPassword);
  };

  const repasswordInputHandler = (inputRepassword) => {
    setRepassword(inputRepassword);
  };

  const phoneInputHandler = (inputPhone) => {
    setPhone(inputPhone);
  };

  const usernameInputHandler = (inputUsername) => {
    setUsername(inputUsername);
  };

  const errorMessageInputHandler = (inputError) => {
    setErrorMessage(inputError);
  };

  const handleSignUpPress = () => {
    emaillums = END(email)
    if (emaillums) {
      if (password.length >= 8) {
        if (password == repassword) {
          if (phone.length == 11) {
            if (username) {
              handleSignUp()
              console.log("Signup")
            }
            else {
              alert("Username cannot be empty")
            }
          }
          else {
            alert("Your Phone number must be 11 digits long.")
          }
        }
        else {
          alert("Your re-entered password doesnot match.")
        }
      }
      else {
        alert("Please enter more than 8 characters for password.")
      }
    }
    else {
      alert("Please enter your LUMS email.")
      // console.log("email ghalat")
      // firebase.auth().currentUser.reload()
      // console.log(firebase.auth().currentUser)
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

    console.log("Now Waiting for Verify")

    // SignUpPress()



    // console.log(firebase.auth().currentUser)
    // console.log(errorMessage)
  }


  return (
    // <ScrollView style={styles.container}>
    <ImageBackground source={backg} style={styles.bgimage}>
      <ScrollView style={styles.container}>
        <View style={styles.maincontainer}>
          
          <View style={styles.bigheading}> 
              <Text style={styles.headingtext}>Get on board!</Text>
          </View>
          <View style={styles.inputbox}>
            <Icon style={styles.inputicon} name="font" size={30} color="gray" />
            <TextInput placeholder="Email Address" style={styles.inputtext} onChangeText={emailInputHandler} value={email} ></TextInput>
          </View>
          <View  style={styles.inputbox}>
            <Icon style={styles.inputicon} name="rocket" size={30} color="gray" />
            <TextInput secureTextEntry placeholder="Password" style={styles.inputtext} onChangeText={passwordInputHandler} value={password} ></TextInput>
          </View>
          <View  style={styles.inputbox}>
            <Icon style={styles.inputicon} name="rocket" size={30} color="gray" />
            <TextInput placeholder="Re-enter Password" style={styles.inputtext} onChangeText={repasswordInputHandler} value={repassword} ></TextInput>
          </View>
          <View  style={styles.inputbox}>
            <Icon style={styles.inputicon} name="rocket" size={30} color="gray" />
            <TextInput placeholder="Username" style={styles.inputtext} onChangeText={usernameInputHandler} value={username} ></TextInput>
          </View>
          <View  style={styles.inputbox}>
            <Icon style={styles.inputicon} name="rocket" size={30} color="gray" />
            <TextInput placeholder="Phone Number" style={styles.inputtext} onChangeText={phoneInputHandler} value={phone} ></TextInput>
          </View>
        </View>
        <TouchableOpacity style={styles.bigbutton} onPress={handleSignUpPress}>
          <View style={styles.signupbutton}> 
            <Text style={styles.bigbuttontext} >Sign up</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
    // </ScrollView>
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
    paddingTop: "14%",
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

// export default Registration;

