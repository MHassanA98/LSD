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
import {NavigationEvents} from 'react-navigation';
import firebase from '../assets/DatabaseConfig';


export default function Orders({navigation}) {
  
  const handlePress = (orderid) => {
    navigation.navigate('Pending_Order_Admin', {orderid: orderid});
  };
  
  const [order, setorder] = useState([ ]);

  function getOrders() {
    // console.log("meow")
    mydb = firebase.database().ref('/Orders');
    mydb.once('value').then(function(snapshot) {
      // product = []
      let orderarr = [];
      snapshot.forEach(function(childsnapshot) {
        let order = {
          // name: childsnapshot.child('Username').val(),
          orderid: childsnapshot.key,
        };
        // console.log(childsnapshot)
        orderarr.push(order);
      });
      setorder(orderarr);
    });

  }




  return (
    <View style={styles.Screen}>
      <NavigationEvents onWillFocus={() => { getOrders() }} />
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
      {/* <View style={{width: '100%'}}> */}
      {/* <TouchableOpacity raised style={{elevation: 2}}> */}
      <FlatList
        data={order}
        keyExtractor={item => item.orderid}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.TextInputbox} onPress={() => handlePress(item.orderid)}>
            <Text style={{fontSize: 16, fontFamily: 'Roboto-Bold'}}>
              {'OrderID ' + item.orderid}
            </Text>
          </TouchableOpacity>
        )}
      />
      {/* </TouchableOpacity> */}
    </View>
    // </View>
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
    paddingLeft: '10%',
    paddingTop: '10%',
    backgroundColor: '#e8e8e8',
    justifyContent: 'center',
    // alignItems: 'center',

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
    backgroundColor: '#e8e8e8',
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
    // paddingTop: 13,
    // paddingHorizontal: 16,
    width: '90%',
    height: 58,
    flexDirection: 'row',
    marginVertical: 10,
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 0,

    // elevation: 2,
    shadowColor: 'darkgrey',
    shadowOpacity: 1,
    elevation: 2,
    borderRadius: 5,
    fontSize: 6,
    fontFamily: 'Roboto-Bold',
    // height: 50,
    justifyContent: 'center',
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
