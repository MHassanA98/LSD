import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
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
    mydb = firebase.database().ref('/Orders');
    mydb.once('value').then(function(snapshot) {
      let orderarr = [];
      snapshot.forEach(function(childsnapshot) {
        let order = {
          orderid: childsnapshot.key,
        };
        orderarr.push(order);
      });
      setorder(orderarr);
    });

  }

  return (
    <View style={styles.Screen}>
      <NavigationEvents onWillFocus={() => { getOrders() }} />
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
    </View>
  );
}

const styles = StyleSheet.create({
  Screen: {
    height: '100%',
    paddingLeft: '10%',
    paddingTop: '10%',
    backgroundColor: '#e8e8e8',
    justifyContent: 'center',
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
    padding: '15%',
    backgroundColor: '#e8e8e8',
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
    paddingTop: 40,
    alignItems: 'center',
    shadowColor: 'darkgrey',
    shadowOpacity: 20,
  },
 
  TextInputbox: {
    width: '90%',
    height: 58,
    flexDirection: 'row',
    marginVertical: 10,
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 0,
    shadowColor: 'darkgrey',
    shadowOpacity: 1,
    elevation: 2,
    borderRadius: 5,
    fontSize: 6,
    fontFamily: 'Roboto-Bold',
    justifyContent: 'center',
    alignItems: 'center',
  },

  Confirmbutton: {
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
    justifyContent: 'center',
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
});
