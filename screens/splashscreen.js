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
            <View style={styles.logocontainer} >
              <Image
                style={styles.stretch}
                source={lsdlogo}
              />
            </View>
            <ActivityIndicator size="large" color="#d00f16" style={styles.activity} />
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

  logocontainer: {
    flex: 6,
    flexDirection: "column",
    paddingLeft: "13%",
    justifyContent: "flex-end",
  },

  activity: {
    paddingTop: "5%",
    flex: 4,
    justifyContent: "flex-start",
  },

  stretch: {
    width: '70%',
    height: '50%',
    resizeMode: "contain",
  },

  maincontainer: {
    flex: 6,
  },

});
  
  
  
  
  
  
  

