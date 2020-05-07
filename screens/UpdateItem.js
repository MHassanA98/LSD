import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  ScrollView,
  Keyboard,
  // Button,
  // Picker,
} from 'react-native';
// import DropDownItem from "react-native-drop-down-item";
// import {
//   TouchableHighlight,
//   BorderlessButton,
// } from "react-native-gesture-handler"
import firebase from '../assets/DatabaseConfig';
import database from '@react-native-firebase/database';

export default function UpdateItem({navigation}) {
  console.log(navigation.getParam('ITEM'));

  const [ProductName, setProductName] = useState(
    navigation.getParam('ITEM').name,
  );
  const [ProductPrice, setProductPrice] = useState(
    navigation.getParam('ITEM').price,
  );
  const [ProductQuantity, setProductQuantity] = useState(
    navigation.getParam('ITEM').quantity,
  );

  const pressHandler = () => {
    // if (ProductName==''){
    //   alert("Name field cannot be empty")
    // }
    if (ProductPrice == '') {
      alert('Price field cannot be empty')
      return
    } else if (ProductQuantity == '') {
      alert('Quantity field cannot be empty');
      return
    } else if (ProductPrice < 0) {
      alert('Price must be greater than 0');
      return
    } else if (ProductQuantity < 0) {
      alert('Quantity must be greater than 0');
      return
    } else {
      console.log('sadasd');

      firebase
        .database()
        .ref(
          '/Inventory/' +
            navigation.getParam('CAT') +
            '/' +
            navigation.getParam('SUB') +
            '/' +
            navigation.getParam('ITEM').name,
        )
        .update({
          Price: parseInt(ProductPrice),
          Qty: parseInt(ProductQuantity),
        })
        .then(() => {
          alert('Item successfully updated');
        })
        .catch(() => {
          alert('Please check your internet connection');
        });
    }
  };

  // const QtypressHandler = () =>{

  //   // if (ProductName.length<1){
  //   //   alert("Invalid product name")
  //   // }
  //   // if (ProductPrice<0){
  //   //   alert("Invalid product price")
  //   // }
  //   if (ProductQuantity<0){
  //     alert("Quantity must be greater than 0")
  //   }
  //   else{

  //   }
  // }

  // const NamepressHandler = () =>{

  //   if (ProductName.length<1){
  //     alert("Name field cannot be empty")
  //   }
  //   // if (ProductPrice<0){
  //   //   alert("Invalid product price")
  //   // }
  //   // else if (ProductQuantity<0){
  //   //   alert("Invalid product quantity")
  //   // }
  //   else{

  //   }
  // }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      {/* <View style={styles.Screen}> */}
      {/* <View style={styles.TopBar}>
        <TouchableOpacity style={styles.TopBarBack}>
          <Icon name="arrow-left" size={32} color="white" />
        </TouchableOpacity>

        <View style={styles.TopBarText}>
          <Text
            style={{fontSize: 30, fontFamily: 'Roboto-Bold', color: 'white'}}>
            Update Item
          </Text>
        </View>

        <TouchableOpacity style={styles.TopBarSearch}>
          <Icon name="search" size={32} color="white" />
        </TouchableOpacity>
      </View> */}

      <View style={styles.RestScreen}>
        {/* <View style={{width: '100%'}}> */}
        <TextInput
          style={styles.TextInputbox}
          placeholder={ProductName}
          placeholderTextColor="grey"
          onChangeText={ProductName => setProductName(ProductName)}
          // defaultValue={ProductName}
          editable={false}
          // keyboardType="numeric"
        />
        {/* </View> */}

        {/* <View style={styles.bigbutton}>
          <TouchableOpacity
            onPress={() => alert('Confirmed!')}
            style={styles.Confirmbutton}>
            <Text style={styles.bigbuttontext}>Confirm</Text>
          </TouchableOpacity>
        </View>  */}

        {/* <View style={{width: '100%'}}> */}
        <TextInput
          style={styles.TextInputbox}
          placeholder="Product Price"
          placeholderTextColor="black"
          onChangeText={ProductPrice => setProductPrice(parseInt(ProductPrice))}
          // defaultValue={ProductPrice}
          keyboardType="numeric"
        />
        {/* </View> */}

        {/* <View style={styles.bigbutton}>
          <TouchableOpacity
            onPress={() => alert('Confirmed!')}
            style={styles.Confirmbutton}>
            <Text style={styles.bigbuttontext}>Confirm</Text>
          </TouchableOpacity>
        </View> */}

        {/* <View style={{width: '100%'}}> */}
        <TextInput
          style={styles.TextInputbox}
          placeholder="Product Quantity"
          placeholderTextColor="black"
          onChangeText={ProductQuantity => setProductQuantity(parseInt(ProductQuantity))}
          // defaultValue={ProductQuantity}
          keyboardType="numeric"
        />
        {/* </View> */}

        <View style={styles.bigbutton}>
          <TouchableOpacity onPress={pressHandler} style={styles.Confirmbutton}>
            <Text style={styles.bigbuttontext}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* </View> */}
    </TouchableWithoutFeedback>
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
    backgroundColor: '#e8e8e8',
    // flex: '20%',
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
    // padding: 40,
    flexDirection: 'row',
    fontSize: 30,
    fontFamily: 'Roboto-Bold',
    color: 'white',
    textAlign: 'left',
    alignItems: 'flex-start',
    flex: 6,
  },
  TopBarSearch: {
    // flexDirection: "row",
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
    // flex: 9,
    // width: 100,
    padding: '10%',
    backgroundColor: '#e8e8e8',
    height: '100%',
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
    paddingTop: 40,
    // justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'darkgrey',
    shadowOpacity: 20,
    // justifyContent: "center",
  },
  TextInputbox: {
    width: 280,
    paddingHorizontal: 16,
    flexDirection: 'row',
    marginVertical: 16,
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 0,
    borderBottomWidth: 1,
    borderRadius: 4,
    height: 56,
    // fontSize: 20,
    // shadowColor: 'darkgrey',
    // shadowOpacity: 20,
    // justifyContent: "center",
  },

  Confirmbutton: {
    // padding: 20,
    // paddingBottom: 20,
    // paddingHorizontal: 15,
    backgroundColor: '#d00f16',
    borderRadius: 20,
    width: 200,
    height: 40,
    padding: '6%',
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
    fontFamily: 'Roboto',
    fontSize: 20,
    textAlign: 'center',
    // paddingTop: '2%',

    // opacity: 1,
  },
  bigbutton: {
    // padding: '50%',
    // paddingHorizontal: '23%',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
