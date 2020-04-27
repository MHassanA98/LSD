import React from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

//Made by Shahzil
//Added Button Handlers
//Added states and fetch functions
//Need to add firebase functionality
//Icons to be added by the space in the fields
//The change password button will lead to change_password_customer screen

class Customer_Profile extends React.Component {
  state = {
    username: '',
    phone: '',
    points: '',
    email: '',
  };

  username_fetch = () => {
    this.setState({
      username: 'Username',
    });
  };
  email_fetch = () => {
    this.setState({
      username: 'Email',
    });
  };
  phone_fetch = () => {
    this.setState({
      phone: 'Phone',
    });
  };
  points_fetch = () => {
    this.setState({
      points: 0,
    });
  };

  change_number_buttonhandler = () => {
    alert(`You have pressed change number`);
  };
  change_password_buttonhandler = () => {
    alert(`You have pressed change password`);
  };

  render() {
    //Main Container View//
    return (
      <View style={styles.container}>
        {/*Heading Container*/}
        <View style={styles.heading}>
          <View style={styles.iconstyle}>
            <Icon name="user" color="#d00f16" size={100} />
          </View>
        </View>

        {/*Password Change Form*/}
        <View style={styles.body}>
          <View style={styles.textbox}>
            <Icon name="user" color="#d00f16" size={24} />
            <Text style={{fontSize: 18, marginLeft: 33}}>Customer Name</Text>
          </View>

          <View style={styles.textbox}>
            <Icon name="envelope-o" color="#d00f16" size={24} />
            <Text style={{fontSize: 18, marginLeft: 25}}>Email</Text>
          </View>

          <View style={styles.textbox}>
            <Icon name="phone" color="#d00f16" size={24} />
            <Text style={{fontSize: 18, marginLeft: 30}}>Phone Number</Text>
          </View>

          <View style={styles.textbox}>
            <Icon name="credit-card" color="#d00f16" size={24} />
            <Text style={{fontSize: 18, marginLeft: 20}}>
              Redemption Points
            </Text>
          </View>

          <View
            style={{
              marginTop: 20,
              width: '50%',
              justifyContent: 'center',
              marginLeft: 100,
            }}>
            <TouchableOpacity
              onPress={() => alert('Confirmed!')}
              style={styles.Confirmbutton}>
              <Text style={styles.bigbuttontext}>Change Password</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 20,
              width: '50%',
              justifyContent: 'center',
              marginLeft: 100,
            }}>
            <TouchableOpacity
              onPress={() => alert('Confirmed!')}
              style={styles.Confirmbutton}>
              <Text style={styles.bigbuttontext}>Change Number</Text>
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
    backgroundColor: '#d00f16',
    alignItems: 'center',
  },
  heading: {
    height: 100,
    width: '100%',
    backgroundColor: '#d00f16',
    marginTop: 30,
    marginRight: 10,
    // alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    backgroundColor: '#e8e8e8',
    marginTop: 40,
  },
  textbox: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 20,
    marginLeft: '10%',
    width: '80%',
    height: '8%',
    borderRadius: 5,
    alignItems: 'center',
    paddingHorizontal: 10,
    // justifyContent: 'center',
    borderWidth: 0,
    backgroundColor: 'white',
    fontFamily: 'Roboto-Bold',
  },
  iconstyle: {
    borderRadius: 180,
    height: 120,
    width: 120,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
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
    elevation: 2,
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
});

export default Customer_Profile;
