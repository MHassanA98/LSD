import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import {FlatList} from 'react-native-gesture-handler';
import firebase from '../assets/DatabaseConfig';
import { createIconSetFromFontello } from 'react-native-vector-icons';


//Made by Shahzil
//The list of items feels very dubios need to rewamp the whole list of items otherwise showing like this is hard because:
//1- The alignment isn't good when used for varying name length
//2- What will we do if someone orders 20 items and the scroll down is well faulty just a thought okok
//How to make this scrollable
//How to make this scrollable

export default function Pending_Order_Admin({navigation}) {
  const [product, setProduct] = useState([ ]);
    // {name: 'pencil', price: '10'},
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

  const [deets, setDeets] = useState([ ]);
  //   {
  //     name: "why",
  //     phone: "meow",

  //   },
  // ])

  const [order, setorder] = useState([ ]);
  
  async function getOrder() {
    // console.log("MEOW")
    // console.log(navigation.getParam('orderid'))
    let prodarr = []
    mydb = firebase.database().ref('/Orders/'+navigation.getParam('orderid'));
    mydb.once('value').then(function(snapshot) {
      setorder({
        Delivery_Charges: snapshot.child('Delivery').val(),
        Location: snapshot.child('Location').val(),
        OrderSatus: snapshot.child('OrderStatus').val(),
        Points_discount: snapshot.child('RedPts').val(),
        Subtotal: snapshot.child('Subtotal').val(),
        Time: snapshot.child('Time').val(),
        Total: snapshot.child('Total').val(),
      })

      snapshot.child("Products").forEach(function (childsnapshot) {
        // console.log(childsnapshot.child("name"))
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
    alert("Order Confirmed");
  }

  //Main Container View//
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

          {/*Items will come down below here*/}
          {/* <SafeAreaView> */}
          <FlatList
            data={product}
            keyExtractor={item => item.name}
            renderItem={({item}) => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  // borderBottomWidth: 0.2,
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
                    // paddingRight: '10%',
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
          {/* </SafeAreaView> */}

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
            // disabled="false"
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
    // padding: 20,
  },
  textbox: {
    marginTop: 20,
    // marginVertical: 20,
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
    // marginVertical: 10,
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
    // minHeight: '6%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // elevation: 2,
  },
  bigbuttontext: {
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    textAlign: 'center',

    // opacity: 1,
  },
  bigbutton: {
    // padding: '50%',
    // marginVertical: 10,
    paddingHorizontal: '23%',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30,
  },
});
