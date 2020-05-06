import React, {useState} from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import {FlatList} from 'react-native-gesture-handler';
//Made by Shahzil
//The list of items feels very dubios need to rewamp the whole list of items otherwise showing like this is hard because:
//1- The alignment isn't good when used for varying name length
//2- What will we do if someone orders 20 items and the scroll down is well faulty just a thought okok
//How to make this scrollable
//How to make this scrollable

export default function Pending_Order_Admin({navigation}) {
  const [product, setProduct] = useState([
    {name: 'pencil', price: '10'},
    {name: 'ruler', price: '50'},
    {name: 'sharpener', price: '5'},
    {name: 'eraser', price: '4'},
    {name: 'pen', price: '54'},
    {name: 'marker', price: '22'},
    {name: 'tape', price: '44'},
    {name: 'ribbon', price: '22'},
    {name: 'pillow', price: '21'},
    {name: 'toy', price: '10'},
    {name: 'car', price: '11'},
    {name: 'box', price: '12'},
  ]);

  const [order, setorder] = useState([
    {
      Order_ID: '52',
      Customer_Name: 'Username',
      Location: 'Location',
      Phone_Number: 'Phone Number',
      Time: 'Bad time',
      Subtotal: '10',
      Points_discount: '20',
      Delivery_Charges: '10',
      Total: '100',
    },
  ]);

  function Order_ID_fetch() {}
  function Order_status_fetch() {}
  function Location_status_fetch() {}
  function Time_status_fetch() {}
  function points_fetch() {}
  function dispatch_buttonhandler() {
    alert(`Order Confirmed`);
  }

  //Main Container View//
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.textbox}>
          <View style={styles.write_on_the_edges}>
            <Text style={{fontSize: 18, marginLeft: 20}}>
              {order.Customer_Name}
            </Text>
            <Text style={{fontSize: 18, marginRight: 20}}>
              {order.Location}
            </Text>
          </View>
          <Text style={{fontSize: 14, marginLeft: 20, opacity: 0.5}}>
            {order.Phone_Number}
          </Text>
        </View>

        <View style={styles.textbox}>
          <View style={styles.write_on_the_edges}>
            <Text style={{fontSize: 18, marginLeft: 20}}>Time</Text>
            <Text style={{fontSize: 18, marginRight: 20}}>{order.Time}</Text>
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
              }}>
              Total Price
            </Text>
          </View>

          {/*Items will come down below here*/}
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
                }}>
                <View style={{flex: 1}}>
                  <Text
                    style={{
                      fontSize: 14,
                      marginLeft: 20,
                      marginTop: 10,
                      marginBottom: 5,
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
                    }}>
                    {item.price}
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
                      marginRight: 30,
                      marginTop: 10,
                      marginBottom: 5,
                      color: '#d00c16',
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
              }}>
              Subtotal
            </Text>
            <Text
              style={{
                fontSize: 15,
                marginRight: 20,
                marginTop: 10,
                marginBottom: 5,
              }}>
              Rs. {order.Subtotal}
            </Text>
          </View>
          <View style={styles.write_on_the_edges}>
            <Text style={{fontSize: 15, marginLeft: 20, marginBottom: 5}}>
              Points Discount
            </Text>
            <Text style={{fontSize: 15, marginRight: 20, marginBottom: 5}}>
              -Rs. {order.Points_discount}
            </Text>
          </View>
          <View style={styles.write_on_the_edges}>
            <Text style={{fontSize: 15, marginLeft: 20, marginBottom: 5}}>
              Delivery Charges
            </Text>
            <Text style={{fontSize: 15, marginRight: 20, marginBottom: 5}}>
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
              }}>
              Total
            </Text>
            <Text
              style={{
                fontSize: 15,
                marginRight: 20,
                marginTop: 10,
                marginBottom: 5,
              }}>
              Rs. {order.Total}
            </Text>
          </View>
        </View>

        <View style={styles.bigbutton}>
          <TouchableOpacity
            onPress={() => alert('Confirmed!')}
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
    fontFamily: 'Roboto-Bold',
  },
  first_box: {
    marginTop: 20,
    marginLeft: '10%',
    width: '80%',
    height: '10%',
    justifyContent: 'center',
    borderBottomWidth: 0,
    backgroundColor: 'white',
    fontFamily: 'Roboto-Bold',
  },
  lower_body: {
    marginTop: 20,
    marginVertical: 20,
    borderRadius: 5,
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
