import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {NavigationEvents} from 'react-navigation';
import newbiryani from '../assets/images/newbiryani.png';
// import function1 from './Shopping_cart';
import firebase from '../assets/DatabaseConfig';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {add} from 'react-native-reanimated';
import Swipeable from 'react-native-gesture-handler/Swipeable';


export default function CustMenu({navigation}) {
  // console.log(" Customer: ", navigation.getParam('Sub'), navigation.getParam('Cat'))

  const [product, setProduct] = useState([
    // {name: 'meow', price: 0, quantity: 0},
  ]);

  async function storeData(name,price) {
    try {
      await AsyncStorage.setItem(name, JSON.stringify({price: parseInt(price), quantity: 0}))
      // await AsyncStorage.removeItem("@storage_Key")
    } catch (e) {
      // saving error
    }
  }

  // async function getData() {
  //   try {
  //     // const value = await AsyncStorage.getItem("order")
  //     const value = await AsyncStorage.getAllKeys()
  //     if(value !== null) {
  //       console.log(value)
  //       // value previously stored
  //     }
  //     else {
  //       console.log("lmao")
  //     }
  //   } catch(e) {
  //     console.log(e)
  //     // error reading value
  //   }
  // }


  function handleaddcart(name,price) {
    // ShoppingCart.apply(frommenu(3))
    // Shopping({navigation}).frommenu(5)
    // function1()
    
    storeData(name,price)
    // getData()

  }

  // setProduct([])

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
      // product = []
      let prodarr = [];
      snapshot.forEach(function(childsnapshot) {
        let newprod = {
          name: childsnapshot.key,
          price: childsnapshot.child('Price').val(),
          quantity: 0,
        };
        // console.log(newprod)
        prodarr.push(newprod);
      });
      setProduct(prodarr)
    });
  }

  // mydb = firebase.database().ref('/Inventory/'+navigation.getParam('Cat')+'/'+navigation.getParam('Sub'))
  // mydb.once("value")
  //   .then(function(snapshot) {
  //     // product = []
  //     snapshot.forEach(function(childsnapshot) {
  //       let newprod = {name: childsnapshot.key, price: childsnapshot.child("Price").val(), quantity: childsnapshot.child("Qty").val()}
  //       // console.log(newprod)
  //       product.push(newprod)
  //     })
  //   })

  //   const onAdd = () => setProd;
  // const onMin = () => setProduct(prev => prev - 1)
  // function onMin(props) {
  //   return props.quantity - 1;
  // }
  //   const onAdd = () => setProduct(prev => prev + 1);
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
        // padding: 10/,
        // marginVertical: 10,
      },

      // rowId: 1,
      // secId: 1
    ],
  };
  return (
    // <ScrollView>
    <View style={styles.Screen}>
      <NavigationEvents onDidFocus={() => {onscreenload()}} />
      {/* <View style={{width: '100%', height: 460, marginVertical: 12}}> */}
      <FlatList
        data={product}
        //   extraData={quantity}
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
                // paddingHorizontal: 20,
                padding: 20,
                width: '65%',
              }}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.boxfont}>{'Rs. ' + item.price}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {handleaddcart(item.name, item.price)}}
              style={{justifyContent: 'center', alignItems: 'flex-end'}}>
              <Icon name="add-shopping-cart" color="red" size={24} />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
    // </ScrollView>
  );
}
{
  /* <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          paddingTop: 15,
          paddingLeft: 12,
        }}>
        <TouchableOpacity style={styles.plusbutton} onPress={handleAddPress} >
          <Icon name="plus" color="white"/>
        </TouchableOpacity>
      </View> */
}
// </View>
//   );
// }

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
    // padding: '10%',
    paddingTop: '5%',
    // marginVertical: 10,
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
    // flex: 8,
    // width: 100,
    // paddingTop: 50,
    backgroundColor: '#e8e8e8',
    height: '100%',
    // justifyContent: 'center',
    // padding: 40,
    // alignItems: 'center',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  firstbox: {
    width: 128,
    flexDirection: 'row',
    // marginVertical: 10,
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderRadius: 10,
    height: '100%',
    paddingTop: 40,
    // justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'darkgrey',
    shadowOpacity: 20,
    // justifyContent: "center",
  },
  TextInputbox: {
    flexDirection: 'row',
    // padding: 15,
    paddingHorizontal: 5,
    width: '100%',
    height: 100,
    // borderRadius: 5,
    elevation: 2,
    // borderBottomWidth: 2,
    // flexDirection: 'row',
    marginVertical: 5,
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 0,
    // alignContent: 'center',
    // justifyContent: 'space-between',
    // textAlign: 'left',
    fontFamily: 'Roboto',
    shadowColor: 'darkgrey',
    shadowOpacity: 5,
    // borderRadius: 10,
    // height: 50,
  },
  title: {
    fontSize: 20,
    color: 'black',
    // fontWeight: 'bold',
  },
  boxfont: {
    fontSize: 14,
    color: 'black',
    // paddingTop: 4,
  },

  Confirmbutton: {
    // padding: 20,
    // paddingBottom: 20,
    // paddingHorizontal: 15,
    backgroundColor: '#d00f16',
    borderRadius: 2,
    width: 18,
    height: 18,
    shadowColor: '#000',
    // shadowOffset: {width: 2, height: 4},
    shadowOpacity: 20,
    // shadowRadius: 6,
    elevation: 5,
    // minHeight: '6%',
    // textAlign: 'center',
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

    // opacity: 1,
  },
  bigbutton: {
    // padding: '50%',
    paddingHorizontal: '23%',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  plusbutton: {
    // paddingHorizontal: 15,
    // paddingTop: 28,
    backgroundColor: '#d00f16',
    borderRadius: 180,
    width: 56,
    height: 56,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 5,
    // minHeight: '6%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
