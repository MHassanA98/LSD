import React from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';

//Made by Shahzil
//The list of items feels very dubios need to rewamp the whole list of items otherwise showing like this is hard because:
//1- The alignment isn't good when used for varying name length
//2- What will we do if someone orders 20 items and the scroll down is well faulty just a thought okok
//How to make this scrollable
//How to make this scrollable

class Pending_Order_Admin extends React.Component {
  state = {
    Order_ID: '52',
    Customer_Name: 'Username',
    Location: 'Location',
    Phone_Number: 'Phone Number',
    Time: 'Bad time',
    Subtotal: '10',
    Points_discount: '20',
    Delivery_Charges: '10',
    Total: '100',
  };
  Order_ID_fetch = () => {
    this.setState({
      Order_ID: 'ID',
    });
  };
  Order_status_fetch = () => {
    this.setState({
      Order_Status: 'Username',
    });
  };
  Location_status_fetch = () => {
    this.setState({
      Location: 'Email',
    });
  };
  Time_status_fetch = () => {
    this.setState({
      Time: 'Phone',
    });
  };
  points_fetch = () => {
    this.setState({
      points: 0,
    });
  };
  dispatch_buttonhandler = () => {
    alert(`Order Confirmed`);
  };
  render() {
    //Main Container View//
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <View style={styles.textbox}>
            <View style={styles.write_on_the_edges}>
              <Text style={{fontSize: 18, marginLeft: 20}}>
                {this.state.Customer_Name}
              </Text>
              <Text style={{fontSize: 18, marginRight: 20}}>
                {this.state.Location}
              </Text>
            </View>
            <Text style={{fontSize: 14, marginLeft: 20, opacity: 0.5}}>
              {this.state.Phone_Number}
            </Text>
          </View>

          <View style={styles.textbox}>
            <View style={styles.write_on_the_edges}>
              <Text style={{fontSize: 18, marginLeft: 20}}>Time</Text>
              <Text style={{fontSize: 18, marginRight: 20}}>
                {this.state.Time}
              </Text>
            </View>
          </View>

          <View style={styles.lower_body}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
              <Text
                style={{
                  fontSize: 12,
                  marginTop: 10,
                  marginBottom: 5,
                  marginHorizontal: 30,
                }}>
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
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                // marginHorizontal: 20,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  marginLeft: 20,
                  marginTop: 10,
                  marginBottom: 5,
                }}>
                Eggs
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  paddingRight: 20,
                  //   marginHorizontal: 30,
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    marginHorizontal: 60,
                    // marginRight: 10,
                    marginTop: 10,
                    // paddingRight: 10,
                    marginBottom: 5,
                  }}>
                  6
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    marginRight: 10,
                    marginTop: 10,
                    marginBottom: 5,

                    color: '#d00c16',
                  }}>
                  70
                </Text>
              </View>
            </View>

            <View style={styles.write_on_the_edges}>
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
                Rs. {this.state.Subtotal}
              </Text>
            </View>
            <View style={styles.write_on_the_edges}>
              <Text style={{fontSize: 15, marginLeft: 20, marginBottom: 5}}>
                Points Discount
              </Text>
              <Text style={{fontSize: 15, marginRight: 20, marginBottom: 5}}>
                -Rs. {this.state.Points_discount}
              </Text>
            </View>
            <View style={styles.write_on_the_edges}>
              <Text style={{fontSize: 15, marginLeft: 20, marginBottom: 5}}>
                Delivery Charges
              </Text>
              <Text style={{fontSize: 15, marginRight: 20, marginBottom: 5}}>
                Rs. {this.state.Delivery_Charges}
              </Text>
            </View>
            <View style={styles.write_on_the_edges}>
              <Text
                style={{
                  fontSize: 15,
                  marginLeft: 20,
                  marginTop: 30,
                  marginBottom: 5,
                }}>
                Total
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  marginRight: 20,
                  marginTop: 30,
                  marginBottom: 5,
                }}>
                Rs. {this.state.Total}
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#d3d3d3',
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
    backgroundColor: '#d3d3d3',
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

export default Pending_Order_Admin;
