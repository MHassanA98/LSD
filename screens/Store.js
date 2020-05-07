import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import firebase from '../assets/DatabaseConfig';

export default function Store({navigation}) {
  const [SubCat, setSubCat] = useState([
    {Sub: 'Stationery', Cat: 'Store'},
    {Sub: 'Beverages', Cat: 'Store'},
    {Sub: 'Grooming', Cat: 'Store'},
    {Sub: 'Grocery', Cat: 'Store'},
    {Sub: 'Electronics', Cat: 'Store'},
  ]);

  const handleStationary = () => {
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

});
