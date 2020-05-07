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

export default function Kitchen({navigation}) {
  const [SubCat, setSubCat] = useState([
    {Sub: 'Desi', Cat: 'Kitchen'},
    {Sub: 'Fast Food', Cat: 'Kitchen'},
    {Sub: 'Fresh Juice', Cat: 'Kitchen'},
  ]);

  const handleDesifood = () => {
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

  const handleFastfood = () => {
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

  const handleJuices = () => {
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

  return (
    <ScrollView style={styles.home}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={handleDesifood}>
        <ImageBackground
          source={require('../assets/images/Desifood.png')}
          style={styles.image}>
          <View style={styles.textcontainer}>
            <Text style={styles.text}>Desi Food</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={handleFastfood}>
        <ImageBackground
          source={require('../assets/images/Fastfood.png')}
          style={styles.image}>
          <View style={styles.textcontainer}>
            <Text style={styles.text}>Fast Food</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, {marginBottom: 10}]}
        activeOpacity={0.8}
        onPress={handleJuices}>
        <ImageBackground
          source={require('../assets/images/Juices.png')}
          style={styles.image}>
          <View style={styles.textcontainer}>
            <Text style={styles.text}>Fresh Juices</Text>
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
