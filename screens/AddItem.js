import React, {useState} from 'react';
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
import Category from './PickerList.js';
import SubCategory from './Subcategory.js';

export default function AddItem() {
  // const [clrVal, setClrVal] = useState('');
  const [ProductName, setProductName] = useState('');
  const [ProductPrice, setProductPrice] = useState('');
  const [ProductQuantity, setProductQuantity] = useState('');
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
        <TouchableOpacity style={styles.viewstyle}>
          <Category />
        </TouchableOpacity>

        <TouchableOpacity style={styles.viewstyle}>
          <SubCategory />
        </TouchableOpacity>

        <TouchableOpacity style={{width: '100%'}}>
          <TextInput
            style={styles.TextInputbox}
            // style={{fontSize: 12}}
            placeholder="Product Name"
            placeholderTextColor="black"
            onChangeText={ProductName => setProductName(ProductName)}
            defaultValue={ProductName}
            // allowFontScalingrr
          />
        </TouchableOpacity>

        <TouchableOpacity style={{width: '100%'}}>
          <TextInput
            style={styles.TextInputbox}
            placeholder="Product Price"
            placeholderTextColor="black"
            onChangeText={ProductPrice => setProductPrice(ProductPrice)}
            defaultValue={ProductPrice}
            keyboardType="numeric"
          />
        </TouchableOpacity>

        <TouchableOpacity style={{width: '100%'}}>
          <TextInput
            style={styles.TextInputbox}
            placeholder="Product Quantity"
            placeholderTextColor="black"
            // value=""
            keyboardType="numeric"
            onChangeText={ProductQuantity =>
              setProductQuantity(ProductQuantity)
            }
            defaultValue={ProductQuantity}
          />
        </TouchableOpacity>

        <View style={styles.bigbutton}>
          <TouchableOpacity
            onPress={() => alert('Confirmed!')}
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
    padding: '15%',
    backgroundColor: '#d3d3d3',
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
    // padding: 30,
    alignItems: 'center',
    shadowColor: 'darkgrey',
    shadowOpacity: 20,
    // justifyContent: "center",
  },
  TextInputbox: {
    // width: '100%',
    paddingHorizontal: 16,
    flexDirection: 'row',
    marginVertical: 10,
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 0,
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
    padding: '5%',
    // marginVertical: 10,
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
    elevation: 2,
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
    // marginVertical: 10,
    paddingHorizontal: '23%',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  viewstyle: {
    // padding: 30,
    height: 50,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 0,
    borderRadius: 10,
    // padding: 30,
    // alignItems: 'center',
    shadowColor: 'darkgrey',
    shadowOpacity: 20,
    elevation: 2,
  },
});
