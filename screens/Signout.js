import React from "react";
import { StyleSheet, Alert, View, Button} from "react-native";
import firebase from "../assets/DatabaseConfig" ;


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
  Screen: {
    height: '100%',
    padding: '10%',
    backgroundColor: '#d3d3d3',
},
});