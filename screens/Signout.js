import React from "react";
import { StyleSheet, Alert, View, ImageBackground, Image, TextInput, Button, TouchableOpacity, } from "react-native";
import LoginStack from '../routes/LoginStack';
import firebase from "../assets/DatabaseConfig" ;
import auth from "@react-native-firebase/auth" ;
import database from "@react-native-firebase/database" ;


export default function Shopping({navigation}) {

  function onSignoutPress() {
    console.log("meow")
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?"
      [
        {
          text: "Yes",
          onPress: ()=>{
            firebase.auth().signOut()
            .then(() => {
              navigation.navigate("LoginStack")
            })
            .catch(function(error) {
              // console.log(error)
              alert(error)
            })
          }
        },
        {
          text: "No",
          onPress: ()=> {console.log("NO")},
        }
      ], {cancelable: false}
    )
  }
  
  return (
    <View style={styles.Screen}>

      <Button title="signout" onPress={onSignoutPress}> </Button>

    </View>


  );
}


const styles = StyleSheet.create({
  // confirmbutton: {
  //   flexDirection: 'row',
  //   // width: "30%",
  //   padding: 50,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  Screen: {
    // flexDirection: "column",
    height: '100%',
    padding: '10%',
    backgroundColor: '#d3d3d3',

    // flex: '20%',
  },
});