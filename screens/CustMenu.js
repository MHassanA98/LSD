import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {NavigationEvents} from 'react-navigation';
import newbiryani from '../assets/images/newbiryani.png';
import firebase from '../assets/DatabaseConfig';

export default function CustMenu({navigation}) {

  const [product, setProduct] = useState([
  ]);

  async function storeData(name, price) {
    try {
      await AsyncStorage.setItem(
        name,
        JSON.stringify({price: parseInt(price), quantity: 1}),
      );
    } catch (e) {
    }
  }

  function handleaddcart(name, price) {
    storeData(name, price);
   }

  function onscreenload() {
    mydb = firebase
      .database()
      .ref(
        '/Inventory/' +
          navigation.getParam('Cat') +
          '/' +
          navigation.getParam('Sub'),
      );
    mydb.once('value').then(function(snapshot) {
      let prodarr = [];
      snapshot.forEach(function(childsnapshot) {
        let newprod = {
          name: childsnapshot.key,
          price: childsnapshot.child('Price').val(),
          quantity: 0,
        };
        prodarr.push(newprod);
      });
      setProduct(prodarr);
    });
  }

  const swipeSettings = {
    autoclose: true,
    onClose: (secId, rowId, direction) => {},
    onOpen: (secId, rowId, direction) => {},
    right: [
      {
        onPress: () => {},
        text: 'Add',
        type: 'Add',
        backgroundColor: 'red',
        height: '90%',
        width: '100%',
      },
    ],
  };
  return (
    <View style={styles.Screen}>
      <NavigationEvents
        onWillFocus={
          onscreenload
        }
      />
      <FlatList
        data={product}
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <View raised style={styles.TextInputbox}>
            <View style={{width: 100, height: 100}}>
              <Image
                source={newbiryani}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'stretch',
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: 20,
                width: '65%',
              }}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.boxfont}>{'Rs. ' + item.price}</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'flex-end'}}>
              <TouchableOpacity
                onPress={() => {
                  handleaddcart(item.name, item.price);
                  alert('Added to Cart');
                }}>
                <Icon name="add-shopping-cart" color="red" size={24} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}
{
}

const styles = StyleSheet.create({
  Screen: {
    height: '100%',
    paddingTop: '5%',
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
    backgroundColor: '#e8e8e8',
    height: '100%',
  },
 
  firstbox: {
    width: 128,
    flexDirection: 'row',
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderRadius: 10,
    height: '100%',
    paddingTop: 40,
    alignItems: 'center',
    shadowColor: 'darkgrey',
    shadowOpacity: 20,
  },
 
  TextInputbox: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    width: '100%',
    height: 100,
    elevation: 2,
    marginVertical: 5,
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 0,
    fontFamily: 'Roboto',
    shadowColor: 'darkgrey',
    shadowOpacity: 5,
  },
 
  title: {
    fontSize: 20,
    color: 'black',
  },
  boxfont: {
    fontSize: 14,
    color: 'black',
  },

  Confirmbutton: {
    backgroundColor: '#d00f16',
    borderRadius: 2,
    width: 18,
    height: 18,
    shadowColor: '#000',
    shadowOpacity: 20,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
  },
 
  bigbuttontext: {
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    textAlign: 'center',
    paddingTop: '2%',
 },

 bigbutton: {
    paddingHorizontal: '23%',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  plusbutton: {
    backgroundColor: '#d00f16',
    borderRadius: 180,
    width: 56,
    height: 56,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 5,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
