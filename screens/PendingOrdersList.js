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
// import DropDownItem from "react-native-drop-down-item";
// import {
//   TouchableHighlight,
//   BorderlessButton,
// } from "react-native-gesture-handler"

export default function Orders() {
  const [order, setorder] = useState([
    {name: 'jawadg01', orderid: '1'},
    {name: 'jawadg02', orderid: '2'},
    {name: 'jawadg03', orderid: '3'},
    {name: 'jawadg04', orderid: '4'},
    {name: 'jawadg05', orderid: '5'},
    {name: 'jawadg06', orderid: '6'},
    {name: 'jawadg07', orderid: '7'},
    {name: 'jawadg08', orderid: '8'},
    {name: 'jawadg09', orderid: '9'},
    {name: 'jawadg010', orderid: '10'},
    {name: 'jawadg011', orderid: '11'},
    {name: 'jawadg012', orderid: '12'},
  ]);
  return (
    <View style={styles.Screen}>
      {/* <View style={styles.TopBar}>
        <TouchableOpacity style={styles.TopBarBack}>
          <Icon name="arrow-left" size={32} color="white" />
        </TouchableOpacity>

        <View style={styles.TopBarText}>
          <Text
            style={{fontSize: 30, fontFamily: 'Roboto-Bold', color: 'white'}}>
            Customers
          </Text>
        </View>

        <TouchableOpacity style={styles.TopBarSearch}>
          <Icon name="search" size={32} color="white" />
        </TouchableOpacity>
      </View> */}
      {/* <View style={styles.RestScreen}> */}
      <View style={{width: '100%'}}>
        {/* <TouchableOpacity raised style={{elevation: 2}}> */}
        <FlatList
          data={order}
          keyExtractor={item => item.orderid}
          renderItem={({item}) => (
            <TouchableOpacity style={{justifyContent: 'center'}}>
              <Text raised style={styles.TextInputbox}>
                {'OrderID ' + item.orderid}
              </Text>
            </TouchableOpacity>
          )}
        />
        {/* </TouchableOpacity> */}
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
    padding: '15%',
    backgroundColor: '#d3d3d3',
    height: '90%',
    justifyContent: 'center',
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
    paddingTop: 13,
    paddingHorizontal: 16,
    width: 328,
    height: 48,
    flexDirection: 'row',
    marginVertical: 10,
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 0,
    // elevation: 2,
    shadowColor: 'darkgrey',
    shadowOpacity: 20,
    elevation: 5,
    borderRadius: 5,
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    // height: 50,
    // justifyContent: 'center',
    alignItems: 'center',
  },

  Confirmbutton: {
    // padding: 20,
    // paddingBottom: 20,
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
    minHeight: '6%',
    // textAlign: 'center',
    justifyContent: 'center',
    // alignItems: 'center',
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
