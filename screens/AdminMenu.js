import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  // Button,
  // Picker,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import { NavigationEvents } from 'react-navigation';
// import DropDownItem from "react-native-drop-down-item";
// import {
//   TouchableHighlight,
//   BorderlessButton,
// } from "react-native-gesture-handler"
import firebase from "../assets/DatabaseConfig" ;
import auth from "@react-native-firebase/auth" ;
import database from "@react-native-firebase/database" ;


export default function AdminMenu({navigation}) {

  // console.log(navigation.getParam())

  const handleAddPress = () => {
    navigation.navigate('AddItem')
  }
  
  // console.log("Admin: ", navigation.getParam('Sub'), navigation.getParam('Cat'))

  const [product, setProduct] = useState([ ]);
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
    mydb = firebase.database().ref('/Inventory/'+navigation.getParam('Cat')+'/'+navigation.getParam('Sub'))
    mydb.once("value")
      .then(function(snapshot) {
        // product = []
        let prodarr = []
        snapshot.forEach(function(childsnapshot) {
          let newprod = {name: childsnapshot.key, price: childsnapshot.child("Price").val(), quantity: childsnapshot.child("Qty").val()}
          // console.log(newprod)
          prodarr.push(newprod)
        })
        setProduct(prodarr)
      })
  }

  return (
    <View style={styles.Screen}>
    <NavigationEvents onDidFocus={() => {onscreenload()}} />
      <View style={{width: '100%', height: 460, marginVertical: 12}}>
        <FlatList
          data={product}
          keyExtractor={item => item.name}
          renderItem={({item}) => (
            <View raised style={styles.TextInputbox}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                }}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.title}>{'Rs. ' + item.price}</Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                }}>
                <TouchableOpacity style={styles.Confirmbutton} onPress={()=>{navigation.navigate('UpdateItem')}}>
                  <Text style={styles.boxfont}>UPDATE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Confirmbutton}>
                  <Text style={styles.boxfont}>REMOVE</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          paddingTop: 15,
          paddingLeft: 12,
        }}>
        <TouchableOpacity style={styles.plusbutton} onPress={handleAddPress} >
          <Icon name="plus" color="white" />
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
    padding: '10%',
    backgroundColor: '#d3d3d3',

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
    paddingTop: 50,
    backgroundColor: '#d3d3d3',
    height: '560',
    // justifyContent: 'center',
    // padding: 40,
    alignItems: 'center',
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
    flexDirection: 'column',
    padding: 7,
    paddingHorizontal: '5.7%',
    width: 328,
    height: 96,
    borderRadius: 5,
    elevation: 5,
    // flexDirection: 'row',
    marginVertical: 10,
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 0,
    // alignContent: 'center',
    justifyContent: 'space-between',
    // textAlign: 'left',
    fontFamily: 'Roboto',
    shadowColor: 'darkgrey',
    shadowOpacity: 20,
    // borderRadius: 10,
    // height: 50,
  },
  title: {
    fontSize: 20,
    color: '#d00f16',
    // fontWeight: 'bold',
  },
  boxfont: {
    fontSize: 14,
    color: '#ffffff',
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
