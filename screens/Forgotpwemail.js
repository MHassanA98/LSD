import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Button, TouchableOpacity, } from "react-native";
import backg from "../assets/images/backg.png" ;
import lsdlogo from "../assets/images/lsdlogo.png" ;
import firebase from "../assets/DatabaseConfig" ;
// const image = "./assets/lsdlogo.png" ;
// import { Ionicons } from '@expo/vector-icons';
import Icon from "react-native-vector-icons/FontAwesome" ;
// import firebase from "@react-native-firebase/app" ;
// import auth from "@react-native-firebase/auth" ;


function END(mail) {
  return mail.endsWith('@lums.edu.pk')
}


// export const Login = ({navigation}) => {
export default function Forgotpwemail({navigation}) {

  // firebase.auth().currentUser.reload()

  const ConfirmPress = () =>{
    navigation.navigate('Login')
    // console.log("meow")
  }

  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState();

  const emailInputHandler = (inputEmail) => {
    setEmail(inputEmail);
  };

  const errorMessageInputHandler = (inputError) => {
    setErrorMessage(inputError);
  };

  const handleConfirmPress = () => {
    emaillums = END(email)
    if (emaillums) {  
      handleResetEmail()
      console.log("Login")
    }
    else {
      alert("Please enter your LUMS email.")
    }

  };

  async function handleResetEmail() {
    let meow1 = firebase.auth().sendPasswordResetEmail(email)
      .then(() => {
        ConfirmPress()
        console.log("User sent pw reset email")
        // console.log(firebase.auth().currentUser)
      })
      .catch(function(error) {
        console.log(error)
        alert(error)
        errorMessageInputHandler
      })
    let meow1w = await meow1

    // LoginPress()

  }


  return (
    <View style={styles.container}>
      <ImageBackground source={backg} style={styles.bgimage}>
        
        <View style={styles.topsentence}> 
          <Text style={styles.toptext}>Forgot your password? That's fine! Confirm your email and we'll send you a code</Text>
        </View>

        <View style={styles.maincontainer}>
          <View style={styles.inputbox}>
            <Icon style={styles.inputicon} name="envelope-o" size={24} color="#d00f16" />
            <TextInput placeholder="Email Address" style={styles.inputtext} onChangeText={emailInputHandler} value={email} ></TextInput>
          </View>
        </View>
        <TouchableOpacity style={styles.bigbutton} onPress={handleConfirmPress} >
          <View style={styles.confirmbutton}> 
            <Text style={styles.bigbuttontext}>Confirm</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
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
    // width: "110%",
    // width: '110%',
    // height: '100%',
    // paddingTop:'12%',
    // paddingLeft:'20%',
    justifyContent: "center",
    // alignItems: "center",

  },
  inputbox: {
    color: "grey",
    marginTop: '6%',
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 6,
    // borderWidth: 1,
    borderColor: '#777',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 5,

  },
  inputicon: {
    paddingTop: '3%',
    paddingLeft: '2%',
    
  },
  inputtext: {
    marginLeft: 5,
    // backgroundColor: "white",
    fontSize: 14,
    // borderWidth: 1,
    // borderRadius: 6,
    // borderColor: '#777',
    width: '70%',
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
    paddingBottom: "10%"
    // flex: 6,
    // paddingLeft: '30%',
    // paddingTop: '30%',

  },
  toptext: {
    fontWeight: "bold",
    color: "#d00f16",
    fontFamily: 'Roboto-bold',
    fontSize: 18,

    // opacity: 1,

  },
  bigbuttontext: {
    fontWeight: "bold",
    color: "white",
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    textAlign: "center",
    paddingTop: '1%',
    paddingBottom: '1%',

    // opacity: 1,

  },
  topsentence: {
    // opacity: 0.8,
    paddingTop: '35%',
    // paddingBottom: 1,
    justifyContent: "center",
    width: '70%',
    marginLeft: '15%',
    // marginRight: '8%',
    flex: 1,
    alignItems: "baseline",
    
    // fontWeight: "bold",
    // backgroundColor: 'rgba(52, 52, 52, 0.8)',
    // backgroundColor: 'transparent',
    // backgroundColor: "None",

  },
  bigbutton: {
    // paddingTop: 10,
    paddingHorizontal: '23%',
    paddingTop: '15%',
    // minHeight: '0%',
    // paddingVertical: 5,
    // paddingVertical: '5%',
    flex: 2,
    // shadowColor: '#000',
    // shadowOffset: { width: 2, height: 4 },
    // shadowOpacity: 0.9,
    // shadowRadius: 6,
    // elevation: 2,
    // fontSize: 25,
    
    // fontWeight: "bold",
    // backgroundColor: 'rgba(52, 52, 52, 0.8)',
    // backgroundColor: 'transparent',
    // backgroundColor: "None",

  },
  confirmbutton: {
    // paddingHorizontal: 15,
    backgroundColor: "#d00f16",
    borderRadius: 17,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 5,
    // minHeight: '6%',
    textAlign: "center",

    // alignItems: "center",
    // paddingTop: 10,
    // fontSize: 25,
    
  },
});

// export default Login;

