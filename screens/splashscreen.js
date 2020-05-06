import React from "react";
import { ActivityIndicator, StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback} from "react-native";
import backg from "../assets/images/backg.png" ;
import lsdlogo from "../assets/images/lsdlogo.png" ;
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationEvents } from 'react-navigation';
import firebase from "../assets/DatabaseConfig" ;


export default function Login({navigation}) {

  //also add clearing asyncstorage here maybe???
  
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
        <NavigationEvents onWillFocus={() => {loginexists()}} />
        <ImageBackground source={backg} style={styles.bgimage}>
          <View style={styles.maincontainer}>
            <Image
              style={styles.stretch}
              source={lsdlogo}
            />
          </View>
          <View>
            <ActivityIndicator size="large" color="#d00f16" />
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
  
  
  
  
  
  
  

