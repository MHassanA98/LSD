import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import {FlatList} from 'react-native-gesture-handler';
import firebase from '../assets/DatabaseConfig';

export default function Pending_Order_Admin({navigation}) {
  const [product, setProduct] = useState([ ]);

  const [deets, setDeets] = useState([ ]);

  const [order, setorder] = useState([ ]);
  
  async function getOrder() {
    let prodarr = []
    mydb = firebase.database().ref('/Orders/'+navigation.getParam('orderid'));
    mydb.once('value').then(function(snapshot) {
      setorder({
        Delivery_Charges: snapshot.child('Delivery').val(),
        Location: snapshot.child('Location').val(),
        OrderStatus: snapshot.child('OrderStatus').val(),
        Points_discount: snapshot.child('RedPts').val(),
        Subtotal: snapshot.child('Subtotal').val(),
        Time: snapshot.child('Time').val(),
        Total: snapshot.child('Total').val(),
      })

      snapshot.child("Products").forEach(function (childsnapshot) {
        let prod = {
          name: childsnapshot.child('name').val(),
          price: childsnapshot.child('price').val(),
          quantity: childsnapshot.child('quantity').val(),
        };
        prodarr.push(prod)
      });
      setProduct(prodarr)
    });
    
    mydb = firebase.database().ref('/Users/'+navigation.getParam('orderid'));
    mydb.once('value').then(function(snapshot) {
      setDeets({
        name: snapshot.child('Username').val(),
        phone: snapshot.child('Phonenumber').val(),
      })
    });


  }

  function dispatch_buttonhandler() {
    firebase.database().ref( '/Orders/' + navigation.getParam('orderid'))
        .update({
          OrderStatus: "Dispatched"
        })
        .then(() => {
          alert('Order Confirmed');
        })
        .catch(() => {
          alert('Please check your internet connection');
        });

  }

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={() => { getOrder() }} />
      <View style={styles.body}>
        <View style={styles.textbox}>
          <View style={styles.write_on_the_edges}>
            <Text style={{fontSize: 18, marginLeft: 20, fontFamily: 'Roboto',}}>
              {deets.name}
            </Text>
            <Text style={{fontSize: 18, marginRight: 20, fontFamily: 'Roboto',}}>
              {order.Location}
            </Text>
          </View>
          <Text style={{fontSize: 14, marginLeft: 20, opacity: 0.5, fontFamily: 'Roboto',}}>
            {deets.phone}
          </Text>
        </View>

        <View style={styles.textbox}>
          <View style={styles.write_on_the_edges}>
            <Text style={{fontSize: 18, marginLeft: 20, fontFamily: 'Roboto',}}>Time</Text>
            <Text style={{fontSize: 18, marginRight: 20, fontFamily: 'Roboto',}}>{order.Time}</Text>
          </View>
        </View>

        <View style={styles.lower_body}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                fontSize: 12,
                marginLeft: 20,
                marginTop: 10,
                marginBottom: 5,
                fontFamily: 'Roboto',
              }}>
              Items:
            </Text>
            <Text style={{fontSize: 12, marginTop: 10, marginBottom: 5, fontFamily: 'Roboto',}}>
              Qty
            </Text>
            <Text
              style={{
                fontSize: 12,
                marginRight: 20,
                marginTop: 10,
                marginBottom: 5,
                fontFamily: 'Roboto',
              }}>
              Price
            </Text>
          </View>
          <FlatList
            data={product}
            keyExtractor={item => item.name}
            renderItem={({item}) => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: 5,
                  height: 30,
                  paddingBottom: 5,
                }}
                >
                <View style={{flex: 1}}>
                  <Text
                    style={{
                      fontSize: 14,
                      marginLeft: 20,
                      marginTop: 10,
                      marginBottom: 5,
                      fontFamily: 'Roboto',
                    }}>
                    {item.name}
                  </Text>
                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
                  <Text
                    style={{
                      fontSize: 14,
                      marginTop: 10,
                      marginBottom: 5,
                      fontFamily: 'Roboto',
                    }}>
                    {item.quantity}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'flex-end',
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      marginRight: 20,
                      marginTop: 10,
                      marginBottom: 5,
                      fontFamily: 'Roboto',
                    }}>
                    {item.price}
                  </Text>
                </View>
              </View>
            )}
          />
          <View style={styles.write_on_the_edges1}>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 20,
                marginTop: 10,
                marginBottom: 5,
                fontFamily: 'Roboto',
              }}>
              Subtotal
            </Text>
            <Text
              style={{
                fontSize: 15,
                marginRight: 20,
                marginTop: 10,
                marginBottom: 5,
                fontFamily: 'Roboto',
              }}>
              Rs. {order.Subtotal}
            </Text>
          </View>
          <View style={styles.write_on_the_edges}>
            <Text style={{fontSize: 15, marginLeft: 20, marginBottom: 5, fontFamily: 'Roboto',}}>
              Points Discount
            </Text>
            <Text style={{fontSize: 15, marginRight: 20, marginBottom: 5, fontFamily: 'Roboto',}}>
              -Rs. {order.Points_discount}
            </Text>
          </View>
          <View style={styles.write_on_the_edges}>
            <Text style={{fontSize: 15, marginLeft: 20, marginBottom: 5, fontFamily: 'Roboto',}}>
              Delivery Charges
            </Text>
            <Text style={{fontSize: 15, marginRight: 20, marginBottom: 5, fontFamily: 'Roboto',}}>
              Rs. {order.Delivery_Charges}
            </Text>
          </View>
          <View style={styles.write_on_the_edges}>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 20,
                marginTop: 10,
                marginBottom: 5,
                fontFamily: 'Roboto',
              }}>
              Total
            </Text>
            <Text
              style={{
                fontSize: 15,
                marginRight: 20,
                marginTop: 10,
                marginBottom: 5,
                fontFamily: 'Roboto',
              }}>
              Rs. {order.Total}
            </Text>
          </View>
        </View>

        <View style={styles.bigbutton}>
          <TouchableOpacity
            onPress={dispatch_buttonhandler}
            style={styles.Confirmbutton}>
            <Text style={styles.bigbuttontext}>Dispatch</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#e8e8e8',
    alignItems: 'center',
  },
  heading: {
    height: '2%',
    width: '90%',
    backgroundColor: '#d00f16',
    marginTop: 20,
  },
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: '#e8e8e8',
    marginTop: 20,
  },
  textbox: {
    marginTop: 20,
    borderRadius: 5,
    marginLeft: '10%',
    width: '80%',
    height: '10%',
    justifyContent: 'center',
    borderBottomWidth: 0,
    backgroundColor: 'white',
    fontFamily: 'Roboto',
  },
  first_box: {
    marginTop: 20,
    marginLeft: '10%',
    width: '80%',
    height: '10%',
    justifyContent: 'center',
    borderBottomWidth: 0,
    backgroundColor: 'white',
    fontFamily: 'Roboto',
  },
  lower_body: {
    flex: 5,
    marginTop: 20,
    marginVertical: 20,
    borderRadius: 5,
    marginLeft: '10%',
    width: '80%',
    height: '40%',
    justifyContent: 'flex-start',
    borderBottomWidth: 0,
    backgroundColor: 'white',
    fontFamily: 'Roboto',
  },
  write_on_the_edges: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  write_on_the_edges1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopColor: '#e8e8e8',
    borderTopWidth: 1,
  },
  Confirmbutton: {
    padding: '5%',
    paddingHorizontal: 15,
    backgroundColor: '#d00f16',
    borderRadius: 20,
    width: 200,
    height: 40,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 5,
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
  },
  bigbutton: {
    paddingHorizontal: '23%',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30,
  },
});
