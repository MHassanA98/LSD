import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  // Button,
  // Picker,
} from 'react-native';
// import ModalDropdown from 'react-native-modal-dropdown';
// import DropDownItem from "react-native-drop-down-item";
// import {
//   TouchableHighlight,
//   BorderlessButton,
// } from "react-native-gesture-handler";
// import firebase from "@react-native-firebase/app";
import Category from './PickerList.js';
import SubCategory from './Subcategory.js';
import firebase from "../assets/DatabaseConfig"
import database from "@react-native-firebase/database"

export default function AddItem() {

  const pressHandler = () =>{

    firebase.database().ref('/').set({
      email:'21100191@lums.edu.pk',
      name: "Hassan"
    })

  }

  return (
    <View style={styles.Screen}>
      {/* <View style={styles.TopBar}>
        <TouchableOpacity style={styles.TopBarBack}>
          <Icon name="arrow-left" size={32} color="white" />
        </TouchableOpacity>

        <View style={styles.TopBarText}>
          <Text
            style={{fontSize: 30, fontFamily: 'Roboto-Bold', color: 'white'}}>
            Add Item
          </Text>
        </View>

        <TouchableOpacity style={styles.TopBarSearch}>
          <Icon name="search" size={32} color="white" />
        </TouchableOpacity>
      </View> */}

      <View style={styles.RestScreen}>
        <View raised style={styles.firstbox}>
          <Category />
        </View>

        <TouchableOpacity raised style={styles.firstbox}>
          <SubCategory />
        </TouchableOpacity>

        <View style={styles.TextInputbox}>
          <TextInput
            // style={{fontSize: 12}}
            placeholder="Product Name"
            placeholderTextColor="black"
          />
        </View>

        <View style={styles.TextInputbox}>
          <TextInput placeholder="Product Price" placeholderTextColor="black" />
        </View>

        <View style={styles.TextInputbox}>
          <TextInput
            placeholder="Product Quantity"
            placeholderTextColor="black"
            value=""
            keyboardType="numeric"
          />
        </View>

        <View style={styles.bigbutton}>
          <TouchableOpacity
            onPress={pressHandler}
            style={styles.Confirmbutton}>
            <Text style={styles.bigbuttontext}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Screen: {
    // flexDirection: "column",
    height: '100%',
    backgroundColor: "#e8e8e8"
  },
  TopBar: {
    padding: 20,
    flexDirection: 'row',
    flex: 2,

    width: '100%',
    height: '100%',
    backgroundColor: '#d00f16',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  TopBarText: {
    flexDirection: 'row',
    fontSize: 30,
    fontFamily: 'Roboto-Bold',
    color: 'white',
    textAlign: 'left',
    alignItems: 'flex-start',
    flex: 6,
  },
  TopBarSearch: {
    alignItems: 'flex-end',
    color: 'white',
    fontSize: 20,
    flex: 1,
  },
  TopBarBack: {
    color: 'white',
    flex: 1,
    fontSize: 20,
  },
  RestScreen: {
    // flex: 8,
    // width: 100,
    padding: 60,
    // backgroundColor: 'lightgrey',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstbox: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 10,
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderRadius: 10,
    height: 50,
    padding: 30,
    alignItems: 'center',
    shadowColor: 'darkgrey',
    shadowOpacity: 20,
    // justifyContent: "center",
  },
  TextInputbox: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 10,
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderRadius: 10,
    height: 50,
    // padding: 20,
    alignItems: 'center',
    // fontSize: 20,
    // shadowColor: 'darkgrey',
    // shadowOpacity: 20,
    // justifyContent: "center",
  },

  Confirmbutton: {
    padding: 10,
    paddingHorizontal: 15,
    backgroundColor: '#d00f16',
    borderRadius: 20,
    width: 200,
    height: 40,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 2,
    // minHeight: '6%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigbuttontext: {
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    textAlign: 'center',
    paddingTop: '2%',

    // opacity: 1,
  },
  bigbutton: {
    // padding: '50%',
    paddingHorizontal: '23%',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
