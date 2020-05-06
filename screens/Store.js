import React, {useState} from 'react';
// import { AppLoading } from 'expo';
// import Navigator from './route/NavigDraw'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Button,
  ScrollView,
} from 'react-native';
import firebase from '../assets/DatabaseConfig';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export default function Store({navigation}) {
  // const [product, setProduct] = useState([ {name: 'ribbon'} ]);
  const [SubCat, setSubCat] = useState([
    {Sub: 'Stationery', Cat: 'Store'},
    {Sub: 'Beverages', Cat: 'Store'},
    {Sub: 'Grooming', Cat: 'Store'},
    {Sub: 'Grocery', Cat: 'Store'},
    {Sub: 'Electronics', Cat: 'Store'},
  ]);

  const handleStationary = () => {
    // setSubCat("Stationery")
    email = firebase.auth().currentUser.email;
    mydb = firebase.database().ref('/Users/' + email.substr(0, 8));
    mydb.once('value').then(function(snapshot) {
      custflag = snapshot.child('Customerflag').val();
      if (custflag) {
        navigation.navigate('CustMenu', SubCat[0]);
      } else {
        navigation.navigate('AdminMenu', SubCat[0]);
      }
    });
  };

  const handleBeverages = () => {
    // setSubCat("Stationery")
    email = firebase.auth().currentUser.email;
    mydb = firebase.database().ref('/Users/' + email.substr(0, 8));
    mydb.once('value').then(function(snapshot) {
      custflag = snapshot.child('Customerflag').val();
      if (custflag) {
        navigation.navigate('CustMenu', SubCat[1]);
      } else {
        navigation.navigate('AdminMenu', SubCat[1]);
      }
    });
  };

  const handleGrooming = () => {
    // setSubCat("Stationery")
    email = firebase.auth().currentUser.email;
    mydb = firebase.database().ref('/Users/' + email.substr(0, 8));
    mydb.once('value').then(function(snapshot) {
      custflag = snapshot.child('Customerflag').val();
      if (custflag) {
        navigation.navigate('CustMenu', SubCat[2]);
      } else {
        navigation.navigate('AdminMenu', SubCat[2]);
      }
    });
  };

  const handleGrocery = () => {
    // setSubCat("Stationery")
    email = firebase.auth().currentUser.email;
    mydb = firebase.database().ref('/Users/' + email.substr(0, 8));
    mydb.once('value').then(function(snapshot) {
      custflag = snapshot.child('Customerflag').val();
      if (custflag) {
        navigation.navigate('CustMenu', SubCat[3]);
      } else {
        navigation.navigate('AdminMenu', SubCat[3]);
      }
    });
  };

  const handleElectronics = () => {
    // setSubCat("Stationery")
    email = firebase.auth().currentUser.email;
    mydb = firebase.database().ref('/Users/' + email.substr(0, 8));
    mydb.once('value').then(function(snapshot) {
      custflag = snapshot.child('Customerflag').val();
      if (custflag) {
        navigation.navigate('CustMenu', SubCat[4]);
      } else {
        navigation.navigate('AdminMenu', SubCat[4]);
      }
    });
  };

  return (
    <ScrollView style={styles.home}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={handleStationary}>
        <ImageBackground
          source={require('../assets/images/Stationary.png')}
          style={styles.image}>
          <View style={styles.textcontainer}>
            <Text style={styles.text}>Stationery</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={handleBeverages}>
        <ImageBackground
          source={require('../assets/images/Beverages.png')}
          style={styles.image}>
          <View style={styles.textcontainer}>
            <Text style={styles.text}>Beverages</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={handleGrooming}>
        <ImageBackground
          source={require('../assets/images/Grooming.png')}
          style={styles.image}>
          <View style={styles.textcontainer}>
            <Text style={styles.text}>Grooming</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={handleGrocery}>
        <ImageBackground
          source={require('../assets/images/Grocery.png')}
          style={styles.image}>
          <View style={styles.textcontainer}>
            <Text style={styles.text}>Grocery</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.button} activeOpacity={0.8}> 
            <ImageBackground source= {require('../assets/images/Electronics.png')} style={styles.image}>
                <View style={styles.textcontainer}>
                    <Text style={styles.text}>
                        Electronics
                    </Text>
                </View>
            </ImageBackground>
        </TouchableOpacity> */}

      <TouchableOpacity
        style={[styles.button, {marginBottom: 10}]}
        activeOpacity={0.8}
        onPress={handleElectronics}>
        <ImageBackground
          source={require('../assets/images/Electronics.png')}
          style={styles.image}>
          <View style={styles.textcontainer}>
            <Text style={styles.text}>Electronis</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>

      {/* <Button title= 'Goto /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#e8e8e8',
  },
  text: {
    fontFamily: 'Roboto-Bold',
    color: '#d00f16',
    marginLeft: 16,
    fontSize: 45,
  },
  image: {
    justifyContent: 'flex-end',
    resizeMode: 'contain',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2.5,
    marginTop: 10,
  },

  textcontainer: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    width: Dimensions.get('window').width,
    height: 60,
    justifyContent: 'center',
    marginBottom: 12,
  },

  // button:{

  // }
});
