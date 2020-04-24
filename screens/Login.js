import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Button, TouchableOpacity, } from "react-native";
import backg from "../assets/images/backg.png" ;
import lsdlogo from "../assets/images/lsdlogo.png" ;
// const image = "./assets/lsdlogo.png" ;
// import { Ionicons } from '@expo/vector-icons';
import Icon from "react-native-vector-icons/FontAwesome" ;
import { firebase } from "@react-native-firebase/auth";


function END(mail) {
  return mail.endsWith('@lums.edu.pk')
}


// export const Login = ({navigation}) => {
export default function Login({navigation}) {

  // firebase.auth().currentUser.reload()

  const LoginPress = () =>{
    navigation.navigate('Home')
  }

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

  const errorMessageInputHandler = (inputError) => {
    setErrorMessage(inputError);
  };

  const handleLoginPress = () => {
    emaillums = END(email)
    if (emaillums) {
      // alert("Please enter your LUMS email.")
      if (password.length < 8) {
        alert("Please enter more than 8 characters for password.")
      }
      else {
        handleLogin()
        console.log("Login")
      }     
    }
    
    else {
      alert("Please enter your LUMS email.")
      // console.log("email ghalat")
      // firebase.auth().currentUser.reload()
      // console.log(firebase.auth().currentUser)
    }

  };

  async function handleLogin() {
    if (!firebase.auth().currentUser.emailVerified) {
      let meow2 = firebase.auth().currentUser.reload()
      let meow2w = await meow2
    }

    let meow1 = firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        if (firebase.auth().currentUser.emailVerified) {
          LoginPress()
        }
        else {
          alert("Please verify email before logging in.")
        }
        console.log("User logged in")})
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
        <View style={styles.maincontainer}>
          <Image
            style={styles.stretch}
            source={lsdlogo}
          />
          <View style={styles.inputbox}>
            <Icon style={styles.inputicon} name="font" size={30} color="gray" />
            <TextInput placeholder="Email Address" style={styles.inputtext} onChangeText={emailInputHandler} value={email} ></TextInput>
          </View>
          <View  style={styles.inputbox}>
            <Icon style={styles.inputicon} name="font" size={30} color="gray" />
            <TextInput secureTextEntry placeholder="Password" style={styles.inputtext} onChangeText={passwordInputHandler} value={password} ></TextInput>
          </View>
        </View>
        <View style={styles.clearbutton}> 
          <TouchableOpacity>
            <Text style={styles.buttontext}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.bigbutton} onPress={handleLoginPress} >
          <View style={styles.loginbutton}> 
            <Text style={styles.bigbuttontext}>Login</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.clearbottombutton}> 
          <TouchableOpacity>
            <Text style={styles.buttontext}>New user? Sign up!</Text>
          </TouchableOpacity>
        </View>
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
    borderWidth: 1,
    borderColor: '#777',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 2,

  },
  inputicon: {
    padding: 2,
    
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
  stretch: {
    width: '60%',
    height: '40%',
    resizeMode: "stretch",
    // paddingBottom: 10,
    // paddingEnd: 10,
    // paddingTop: 0,
  },
  maincontainer: {
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 6,
    // paddingLeft: '30%',
    // paddingTop: '30%',

  },
  buttontext: {
    fontWeight: "bold",
    color: "#d00f16",
    fontFamily: 'Roboto-Medium',
    fontSize: 14,

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
  clearbutton: {
    opacity: 0.8,
    paddingTop: 5,
    marginLeft: '57%',
    marginRight: '13%',
    flex: 1,
    
    // fontWeight: "bold",
    // backgroundColor: 'rgba(52, 52, 52, 0.8)',
    // backgroundColor: 'transparent',
    // backgroundColor: "None",

  },
  clearbottombutton: {
    opacity: 0.8,
    // paddingTop: 1,
    // paddingBottom: 1,
    justifyContent: "center",
    marginLeft: '35%',
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
  loginbutton: {
    // paddingHorizontal: 15,
    backgroundColor: "#d00f16",
    borderRadius: 17,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 2,
    // minHeight: '6%',
    textAlign: "center",

    // alignItems: "center",
    // paddingTop: 10,
    // fontSize: 25,
    
  },
});

// export default Login;








// import Header from "./components/header";
// import StartGameScreen from "./screens/StartGameScreen";

// export default function App() {
//   return (
//     <View style={styles.screen}>
//       <Header title={"Guess a Number"} />
//       <StartGameScreen />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1
//   }
// });