import React from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import SwitchExample from './switch1.js';
import Category from './PickerList.js';
import Icon from 'react-native-vector-icons/FontAwesome';

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      switch1Value: false,
    };
  }
  toggleSwitch1 = value => {
    this.setState({switch1Value: value});
    console.log('Switch 1 is: ' + value);
  };

  state = {
    Subtotal: '10',
    Points_discount: '20',
    Delivery_Charges: '10',
    Total: '100',
  };

  points_fetch = () => {
    this.setState({
      points: 0,
    });
  };

  render() {
    //Main Container View//
    return (
      <View style={styles.container}>
        {/*Heading Container*/}

        {/*Main Body*/}
        <View style={styles.body}>
          <View style={styles.textbox}>
            <Category />
          </View>

          <View style={styles.textbox}>
            <View style={styles.write_on_the_edges}>
              <Text style={{fontSize: 15, marginLeft: 8}}>Redeem Points</Text>
              <SwitchExample
                toggleSwitch1={this.toggleSwitch1}
                switch1Value={this.state.switch1Value}
              />
            </View>
          </View>

          <Text
            style={{
              fontFamily: 'Roboto',
              fontSize: 15,
              marginLeft: 50,
              marginTop: 30,
            }}>
            Total Amount
          </Text>
          <View style={styles.lower_body}>
            <View style={styles.write_on_the_edges}>
              <Text
                style={{
                  fontSize: 15,
                  marginLeft: 10,
                  marginTop: 10,
                  marginBottom: 5,
                }}>
                Subtotal
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  marginRight: 10,
                  marginTop: 10,
                  marginBottom: 5,
                }}>
                Rs. {this.state.Subtotal}
              </Text>
            </View>
            <View style={styles.write_on_the_edges}>
              <Text style={{fontSize: 15, marginLeft: 10, marginBottom: 5}}>
                Points Discount
              </Text>
              <Text style={{fontSize: 15, marginRight: 10, marginBottom: 5}}>
                Rs. {this.state.Points_discount}
              </Text>
            </View>
            <View style={styles.write_on_the_edges}>
              <Text style={{fontSize: 15, marginLeft: 10, marginBottom: 5}}>
                Delivery Charges
              </Text>
              <Text style={{fontSize: 15, marginRight: 10, marginBottom: 5}}>
                Rs. {this.state.Delivery_Charges}
              </Text>
            </View>
            <View style={styles.write_on_the_edges}>
              <Text
                style={{
                  fontSize: 15,
                  marginLeft: 10,
                  marginTop: 10,
                  marginBottom: 5,
                }}>
                Total
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  marginRight: 10,
                  marginTop: 10,
                  marginBottom: 5,
                }}>
                Rs. {this.state.Total}
              </Text>
            </View>
          </View>

          <Text
            style={{
              fontFamily: 'Roboto',
              fontSize: 15,
              marginLeft: 50,
              marginTop: 30,
            }}>
            Payment Method
          </Text>

          <View style={styles.textbox1}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon
                name="money"
                color="#d00f16"
                size={24}
                style={{paddingHorizontal: 5}}
              />
              <Text style={{fontSize: 18, marginLeft: 20, padding: 5}}>
                Cash on Delivery
              </Text>
            </View>
          </View>

          <View style={styles.bigbutton}>
            <TouchableOpacity
              onPress={() => alert('Order Confirmed!')}
              style={styles.Confirmbutton}>
              <Text style={styles.bigbuttontext}>Confirm Order</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: '100%',
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    padding: '10%',
    marginVertical: 10,
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
    backgroundColor: '#d3d3d3',
    // marginVertical: 10,
    // marginTop: 50,
  },
  textbox: {
    marginTop: 20,
    // width: '72%',
    marginLeft: '10%',
    // paddingBottom: 10,
    width: '80%',
    height: 50,
    elevation: 5,
    borderRadius: 5,
    shadowColor: 'darkgrey',
    shadowOpacity: 20,
    justifyContent: 'center',
    borderBottomWidth: 0,
    backgroundColor: 'white',
    fontFamily: 'Roboto-Bold',
  },
  lower_body: {
    marginTop: 0,
    // padding: 10,
    marginLeft: '10%',
    width: '80%',
    height: 150,
    justifyContent: 'flex-start',
    borderBottomWidth: 0,
    backgroundColor: 'white',
    fontFamily: 'Roboto-Bold',
    borderRadius: 5,
  },
  textbox1: {
    marginTop: 0,
    borderRadius: 5,
    height: 50,
    marginLeft: '10%',
    width: '80%',
    height: '8%',
    justifyContent: 'center',
    borderBottomWidth: 0,
    backgroundColor: 'white',
    fontFamily: 'Roboto-Bold',
  },
  Confirmbutton: {
    // padding: 20,
    // paddingBottom: 20,
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
    elevation: 2,
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
    paddingHorizontal: '23%',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  write_on_the_edges: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Checkout;
