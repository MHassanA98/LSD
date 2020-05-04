import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

//Made by Shahzil
//The list of items feels very dubios need to rewamp the whole list of items otherwise showing like this is hard because:
//1- The alignment isn't good when used for varying name length
//2- What will we do if someone orders 20 items and the scroll down is well faulty just a thought okok

class Order_Detail_Customer extends React.Component {
  state = {
    Order_ID: '52',
    Order_Status: 'Confirmed',
    Location: 'Lums',
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

  render() {
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
              <Text style={{color: 'black', fontSize: 18, marginLeft: 20}}>
                Order Status
              </Text>
              <Text style={{fontSize: 18, marginRight: 20}}>
                {this.state.Order_Status}
              </Text>
            </View>
          </View>

          <View style={styles.textbox}>
            <View style={styles.write_on_the_edges}>
              <Text style={{fontSize: 18, marginLeft: 20}}>Location</Text>
              <Text style={{fontSize: 18, marginRight: 20}}>
                {this.state.Location}
              </Text>
            </View>
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
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 0.5,
                paddingBottom: 5,
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
              <Text
                style={{
                  fontSize: 18,
                  marginRight: 30,
                  marginTop: 10,
                  marginBottom: 5,
                }}>
                6
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  marginRight: 30,
                  marginTop: 10,
                  marginBottom: 5,
                  color: '#d00c16',
                }}>
                70
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
                Rs. {this.state.Total}
              </Text>
            </View>
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
    marginTop: 20,
    marginLeft: '10%',
    width: '80%',
    height: '8%',
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
});

export default Order_Detail_Customer;
