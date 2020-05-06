import React, {useState} from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  // Button,
  // Picker,
} from 'react-native';
import newbiryani from '../assets/images/newbiryani.png';
import {FlatList} from 'react-native-gesture-handler';
import {NavigationEvents} from 'react-navigation';
import Swipeable from 'react-native-gesture-handler/Swipeable';
// import DropDownItem from "react-native-drop-down-item";
// import {
//   TouchableHighlight,
//   BorderlessButton,
// } from "react-native-gesture-handler"
import firebase from '../assets/DatabaseConfig';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export default function AdminMenu({navigation}) {
  // console.log(navigation.getParam('Sub'))

  const handleAddPress = () => {
    navigation.navigate('AddItem');
  };

  // console.log("Admin: ", navigation.getParam('Sub'), navigation.getParam('Cat'))

  const [product, setProduct] = useState([]);
  // {name: 'pencil', price: 10, quantity: 2},
  // {name: 'ruler', price: '50'},
  // {name: 'sharpener', price: '5'},
  // {name: 'eraser', price: '4'},
  // {name: 'pen', price: '54'},
  // {name: 'marker', price: '22'},
  // {name: 'tape', price: '44'},
  // {name: 'ribbon', price: '22'},
  // {name: 'pillow', price: '21'},
  // {name: 'toy', price: '10'},
  // {name: 'car', price: '11'},
  // {name: 'box', price: '12'},
  // ]);

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
          quantity: childsnapshot.child('Qty').val(),
        };
        // console.log(newprod)
        prodarr.push(newprod);
      });
      setProduct(prodarr);
    });
  }
  const leftActions = props => {
    return (
      <View style={{flexDirection: 'row', marginVertical: 5, width: '35%'}}>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: '#34ade9',
            // height: 100,
            alignItems: 'center',
            justifyContent: 'center',

            // marginVertical: 5,
          }}
          onPress={() => {
            navigation.navigate('UpdateItem', {
              CAT: navigation.getParam('Cat'),
              SUB: navigation.getParam('Sub'),
              ITEM: props,
            });
          }}>
          <Icon name="edit" color="white" size={24} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: 'red',
            opacity: 1,
            // height: 100,
            alignItems: 'center',
            justifyContent: 'center',
            // marginVertical: 5,
          }}>
          <Icon name="delete" color="white" size={24} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.Screen}>
      <NavigationEvents
        onWillFocus={() => {
          onscreenload();
        }}
      />
      <View style={{height: '90%'}}>
        <FlatList
          data={product}
          keyExtractor={item => item.name}
          renderItem={({item}) => (
            <Swipeable renderRightActions={leftActions}>
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
                  style={{justifyContent: 'center', alignItems: 'flex-end'}}>
                  <Icon name="chevron-left" color="black" size={24} />
                </TouchableOpacity>
              </View>
            </Swipeable>
          )}
        />
      </View>
      {/* </View> */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          // paddingb: 5,
          paddingRight: 10,
          // paddingBottom: 20,
          justifyContent: 'flex-end',
          // padding: 15,
          // paddingLeft: 12,
        }}>
        <TouchableOpacity style={styles.plusbutton} onPress={handleAddPress}>
          <Icon name="add" color="white" size={24} />
        </TouchableOpacity>
      </View>
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
    backgroundColor: '#e8e8e8',
    height: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
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
    paddingHorizontal: 15,
    backgroundColor: '#d00f16',
    borderRadius: 2,
    width: 90,
    height: 36,
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
