import React from "react";
import { ActivityIndicator, StyleSheet, View, ImageBackground, Image, Keyboard, TouchableWithoutFeedback} from "react-native";
import backg from "../assets/images/backg.png" ;
import lsdlogo from "../assets/images/lsdlogo.png" ;
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationEvents } from 'react-navigation';
import firebase from "../assets/DatabaseConfig" ;


export default function splashscreen({navigation}) {

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
  
  function loginexists() {
    meow = firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        LoginPress()
      }
      else {
        navigation.navigate('Login')
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
            <ActivityIndicator size="large" color="#d00f16" />
          </View>
          {/* <View>
            <ActivityIndicator size="large" color="#d00f16" />
          </View> */}
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

  stretch: {
    width: '60%',
    height: '40%',
    resizeMode: "contain",
  },

  maincontainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 6,
  },

});
  
  
  
  
  
  
  

