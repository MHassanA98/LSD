import React, {useState} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {NavigationEvents} from 'react-navigation';
import firebase from '../assets/DatabaseConfig';

export default function Pending_Order_Admin({navigation}) {
  const [order, setorder] = useState([
    {
      Order_ID: '52',
      Order_Status: 'Confirmed',
      Location: 'Lums',
      Time: 'Bad time',
      Subtotal: '10',
      Points_discount: '20',
      Delivery_Charges: '10',
      Total: '100',
    },
  ]);
  const [product, setProduct] = useState([ ]);

  async function getOrder() {
    let emailcheck = firebase.auth().currentUser.email;
    let prodarr = []
    mydb = firebase.database().ref('/Orders/'+emailcheck.substr(0, 8));
    mydb.once('value').then(function(snapshot) {
      setorder({
        Delivery_Charges: snapshot.child('Delivery').val(),
        Location: snapshot.child('Location').val(),
        Order_Status: snapshot.child('OrderStatus').val(),
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
  }

  return (
    <View style={styles.container}>
    <NavigationEvents onWillFocus={() => { getOrder() }} />
      <View style={styles.body}>
        <View style={styles.textbox}>
          <View style={styles.write_on_the_edges}>
            <Text style={{color: 'black', fontSize: 16, marginLeft: 20, fontFamily: 'Roboto',}}>
              Order Status
            </Text>
            <Text style={{fontSize: 16, marginRight: 20, fontFamily: 'Roboto',}}>
              {order.Order_Status}
            </Text>
          </View>
        </View>

        <View style={styles.textbox}>
          <View style={styles.write_on_the_edges}>
            <Text style={{fontSize: 16, marginLeft: 20, fontFamily: 'Roboto',}}>Location</Text>
            <Text style={{fontSize: 16, marginRight: 20, fontFamily: 'Roboto',}}>
              {order.Location}
            </Text>
          </View>
        </View>

        <View style={styles.textbox}>
          <View style={styles.write_on_the_edges}>
            <Text style={{fontSize: 16, marginLeft: 20, fontFamily: 'Roboto',}}>Time</Text>
            <Text style={{fontSize: 16, marginRight: 20, fontFamily: 'Roboto',}}>{order.Time}</Text>
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
            <Text style={{fontSize: 12, marginTop: 10, marginBottom: 5}}>
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
              Total Price
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
                  height: 40,
                  paddingBottom: 5,
                }}>
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
                      marginRight: 30,
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
                      marginRight: 30,
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
    backgroundColor: '#e8e8e8',
    marginTop: 20,
  },
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: '#e8e8e8',
    paddingTop: '10%',
  },
  textbox: {
    marginTop: 16,
    marginLeft: '10%',
    width: '80%',
    height: 56,
    borderRadius: 4,
    justifyContent: 'center',
    borderBottomWidth: 0,
    backgroundColor: 'white',
    fontFamily: 'Roboto-Bold',
  },
  lower_body: {
    marginTop: 20,
    marginLeft: '10%',
    width: '80%',
    height: '40%',
    justifyContent: 'flex-start',
    borderBottomWidth: 0,
    backgroundColor: 'white',
    fontFamily: 'Roboto-Bold',
  },
  write_on_the_edges: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  write_on_the_edges1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
  },
});
