import React, {useState}  from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationEvents} from 'react-navigation';
import firebase from '../assets/DatabaseConfig';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

//Made by Shahzil
//Added Button Handlers
//Added states and fetch functions
//Need to add firebase functionality
//Icons to be added by the space in the fields
//The change password button will lead to change_password_customer screen
//redesigned, brought to sds screens design and improved by jawad
//functionality added by hasan
//state declaration brought to standard declaration used on other screens


export default function Customer_Profile({navigation}) {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [points, setPoints] = useState("");

  function onscreenload() {
    let emailcheck = firebase.auth().currentUser.email
    mydb = firebase.database().ref( '/Users/'+emailcheck.substr(0,8) );
    mydb.once('value')
    .then(function(snapshot) {
      setUsername(snapshot.child("Username").val())
      setEmail(snapshot.child("Useremail").val())
      setPhone(snapshot.child("Phonenumber").val())
      if (snapshot.child("Customerflag").val()) {
        setPoints(snapshot.child("Redemptionpoints").val())
      }
      else {
        setPoints(snapshot.child("ChangeRate").val())
      }

    });
    // console.log(uname)
    // setUsername(uname)
  }

  function change_password_buttonhandler() {
    navigation.navigate("ChangePassword")
  };
  
  function change_phone_buttonhandler() {
    navigation.navigate("ChangePhone")
  };

  return (
    <View style={styles.container}>
      <NavigationEvents onDidFocus={() => { onscreenload(); }} />
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
          <Text style={{fontSize: 18, marginLeft: 28}} >{username}</Text>
        </View>

        <View style={styles.textbox}>
          <Icon name="envelope-o" color="#d00f16" size={24} />
          <Text style={{fontSize: 18, marginLeft: 20}}>{email}</Text>
        </View>

        <View style={styles.textbox}>
          <Icon name="phone" color="#d00f16" size={24} />
          <Text style={{fontSize: 18, marginLeft: 25}}>{phone}</Text>
        </View>

        <View style={styles.textbox}>
          <Icon name="credit-card" color="#d00f16" size={24} />
          <Text style={{fontSize: 18, marginLeft: 15}}>{points}</Text>
        </View>

        <View
          style={{
            marginTop: 20,
            width: '50%',
            justifyContent: 'center',
            marginLeft: 100,
          }}>
          <TouchableOpacity
            onPress={change_password_buttonhandler}
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
            onPress={change_phone_buttonhandler}
            style={styles.Confirmbutton}>
            <Text style={styles.bigbuttontext}>Change Number</Text>
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
    backgroundColor: '#d00f16',
    alignItems: 'center',
  },
  heading: {
    height: '14%',
    width: '100%',
    backgroundColor: '#d00f16',
    marginTop: '17%',
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
    marginTop: '8%',
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



