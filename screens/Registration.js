import React from "react";
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, } from "react-native";
import backg from "../assets/images/backg.png" ;
// import Icon from "react-native-vector-icons/FontAwesome" ;


export const Registration = props => {

  return (
    <View style={styles.container}>
      <ImageBackground source={backg} style={styles.bgimage}>
        <View style={styles.maincontainer}>
          
          <View style={styles.bigheading}> 
              <Text style={styles.headingtext}>Get on board!</Text>
          </View>
          <View style={styles.inputbox}>
            <Icon style={styles.inputicon} name="font" size={30} color="gray" />
            <TextInput placeholder="Email Address" style={styles.inputtext} ></TextInput>
          </View>
          <View  style={styles.inputbox}>
            <Icon style={styles.inputicon} name="rocket" size={30} color="gray" />
            <TextInput placeholder="Password" style={styles.inputtext} ></TextInput>
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
        <TouchableOpacity style={styles.bigbutton}>
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
    paddingTop: '2%',

  },
  bigbutton: {
    paddingHorizontal: '23%',
    paddingTop: '15%',
    flex: 2,

  },
  signupbutton: {
    paddingHorizontal: 15,
    backgroundColor: "#d00f16",
    borderRadius: 17,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 2,
    minHeight: '6%',
    textAlign: "center",
    
  },
});

export default Registration;

