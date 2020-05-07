import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import firebase from '../assets/DatabaseConfig';

export default function AddItem({navigation}) {
  const pressHandler = () => {
    if (Category === 'Choose a category') {
      alert('Please choose a category');
    } else if (SubCategory === 'Choose a subcategory') {
      alert('Please choose a subcategory');
    } else if (ProductName.length < 1) {
      alert('Invalid product name');
    } else if (ProductPrice < 0) {
      alert('Invalid product price');
    } else if (ProductQuantity < 0) {
      alert('Invalid product quantity');
    } else {
      firebase
        .database()
        .ref('/Inventory/' + Category + '/' + SubCategory + '/' + ProductName)
        .once('value')
        .then(snapshot => {
          console.log('HERERE');
          console.log(snapshot.exists());
          if (snapshot.exists()) {
            console.log('EXISTS');
            ReplaceAlert();
          } else {
            ItemAdded();
            console.log('NOT EXISTS');
          }
        });
    }
  };

  function ReplaceAlert() {
    console.log('ALERT');

    Alert.alert(
      'Product already exists',
      'Replace ' + JSON.stringify(ProductName),
      [
        {
          text: 'Cancel',
          type: 'destructive',
        },

        {
          text: 'Confirm',
          onPress: () => ItemAdded(),
        },
      ],

      {cancelable: false},
    );
  }

  function ItemAdded() {
    console.log('ADD');

    firebase
      .database()
      .ref('/Inventory/' + Category + '/' + SubCategory + '/' + ProductName)
      .set({
        Price: parseInt(ProductPrice),
        Qty: parseInt(ProductQuantity),
      })
      .then(() => {
        setProductName('');
        setProductPrice('');
        setProductQuantity('');
        setCategory('Choose a category');
        setSubCategory('Choose a subcategory');

        alert('Item added successfully');
      })
      .catch((e)=>alert('Add item failed. Please check your internet connection'));
  }


  const [ProductName, setProductName] = useState('');
  const [ProductPrice, setProductPrice] = useState('');
  const [ProductQuantity, setProductQuantity] = useState('');
  const [Category, setCategory] = useState('Choose a category');
  const [SubCategory, setSubCategory] = useState('Choose a subcategory');

  const SubCat = {
    'Choose a category': ['Choose a subcategory'],
    Kitchen: ['Choose a subcategory', 'Desi', 'Fast Food', 'Fresh Juice'],
    Store: [
      'Choose a subcategory',
      'Stationery',
      'Beverages',
      'Grocery',
      'Grooming',
      'Electronics',
    ],
  };

  const Cat = ['Choose a category', 'Kitchen', 'Store'];

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.screen}>
        <View style={styles.RestScreen}>
          <View style={styles.viewstyle}>
            <Picker
              selectedValue={Category}
              style={styles.container}
              onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}>
              {Cat.map((item, index) => {
                return <Picker.Item label={item} value={item} key={index} />;
              })}
            </Picker>
          </View>

          <View style={styles.viewstyle}>
            <Picker
              selectedValue={SubCategory}
              style={styles.container}
              onValueChange={(itemValue, itemIndex) =>
                setSubCategory(itemValue)
              }>
              {SubCat[Category].map((item, index) => {
                return <Picker.Item label={item} value={item} key={index} />;
              })}
            </Picker>
          </View>

          <TextInput
            style={styles.TextInputbox}
            placeholder="Product Name"
            placeholderTextColor="black"
            onChangeText={ProductName => setProductName(ProductName)}
            defaultValue={ProductName}
          />
          <TextInput
            style={styles.TextInputbox}
            placeholder="Product Price"
            placeholderTextColor="black"
            onChangeText={ProductPrice => setProductPrice(ProductPrice)}
            defaultValue={ProductPrice}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.TextInputbox}
            placeholder="Product Quantity"
            placeholderTextColor="black"
            keyboardType="numeric"
            onChangeText={ProductQuantity =>
              setProductQuantity(ProductQuantity)
            }
            defaultValue={ProductQuantity}
          />
          <View style={styles.bigbutton}>
            <TouchableOpacity
              onPress={pressHandler}
              style={styles.Confirmbutton}>
              <Text style={styles.bigbuttontext}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 10,
    width: '100%',
    height: 50,
    elevation: 2,
  },

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
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 2,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
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
  
  viewstyle: {
    height: 56,
    marginVertical: 16,
    width: 280,
    alignItems: 'center',
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 0,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 2,
  },
});
