import React, {useState} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

//Made by Shahzil
//The list of items feels very dubios need to rewamp the whole list of items otherwise showing like this is hard because:
//1- The alignment isn't good when used for varying name length
//2- What will we do if someone orders 20 items and the scroll down is well faulty just a thought okok

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
      {/* Heading Container
                  <View style= {styles.heading}>
                      <Text style = {{marginLeft: 50,fontSize:35, color: 'white'}}> OrderID {this.state.Order_ID} </Text>
                  </View> */}

      {/*Main Body*/}
      <View style={styles.body}>
        <View style={styles.textbox}>
          <View style={styles.write_on_the_edges}>
            <Text style={{color: 'black', fontSize: 16, marginLeft: 20}}>
              Order Status
            </Text>
            <Text style={{fontSize: 16, marginRight: 20}}>
              {order.Order_Status}
            </Text>
          </View>
        </View>

        <View style={styles.textbox}>
          <View style={styles.write_on_the_edges}>
            <Text style={{fontSize: 16, marginLeft: 20}}>Location</Text>
            <Text style={{fontSize: 16, marginRight: 20}}>
              {order.Location}
            </Text>
          </View>
        </View>

        <View style={styles.textbox}>
          <View style={styles.write_on_the_edges}>
            <Text style={{fontSize: 16, marginLeft: 20}}>Time</Text>
            <Text style={{fontSize: 16, marginRight: 20}}>{order.Time}</Text>
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
            // style={{flex: 1}}
            data={product}
            keyExtractor={item => item.name}
            renderItem={({item}) => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  // borderBottomWidth: 0.5,
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
