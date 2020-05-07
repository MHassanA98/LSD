import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import firebase from '../assets/DatabaseConfig';

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

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.RestScreen}>
        <TextInput
          style={styles.TextInputbox}
          placeholder={ProductName}
          placeholderTextColor="grey"
          onChangeText={ProductName => setProductName(ProductName)}
          // defaultValue={ProductName}
          editable={false}
        />
        <TextInput
          style={styles.TextInputbox}
          placeholder="Product Price"
          placeholderTextColor="black"
          onChangeText={ProductPrice => setProductPrice(parseInt(ProductPrice))}
          // defaultValue={ProductPrice}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.TextInputbox}
          placeholder="Product Quantity"
          placeholderTextColor="black"
          onChangeText={ProductQuantity => setProductQuantity(parseInt(ProductQuantity))}
          // defaultValue={ProductQuantity}
          keyboardType="numeric"
        />
  
        <View style={styles.bigbutton}>
          <TouchableOpacity onPress={pressHandler} style={styles.Confirmbutton}>
            <Text style={styles.bigbuttontext}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  Screen: {
    height: '100%',
    backgroundColor: '#e8e8e8',
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
    alignItems: 'center',
    shadowColor: 'darkgrey',
    shadowOpacity: 20,
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
  },

  Confirmbutton: {
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
},

bigbutton: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
