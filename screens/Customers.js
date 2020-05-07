import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {NavigationEvents} from 'react-navigation';
import firebase from '../assets/DatabaseConfig';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export default function Customers({navigation}) {
  const [cust, setcust] = useState([]); //[
  // {name: 'example', email: 'example@lums.edu.pk', banstat: true},
  // {name: 'jawadg02', email: 'abcde@ab.com2', banstat: 0},
  // ]);

  function banalert(item, index) {
    if (!item.banstat) {
      Alert.alert(
        'Ban User',
        'Are you sure you want to ban this user?',
        [
          {
            text: 'Yes',
            onPress: () => {
              // console.log("YES")
              // console.log(item.name)
              // console.log(index)
              let tempcust = cust;
              tempcust[index] = {
                name: item.name,
                email: item.email,
                banstat: true,
              };
              mydb = firebase
                .database()
                .ref('/Users/' + item.email.substr(0, 8));
              mydb.update({
                BanStatus: true,
              });
              // .then(
              //   console.log("\nCust:", cust),
              // setcust(tempcust),
              //   console.log("\nCust:", cust)
              // )
              // window.location.reload(false)

              // console.log(tempcust)
              // setcust(tempcust)
              onscreenload();
            },
          },
          {
            text: 'No',
            onPress: () => {
              console.log('NO');
            },
            // style: "cancel"
          },
        ],
        {cancelable: false},
      );
    } else {
      Alert.alert(
        'Unban User',
        'Are you sure you want to unban this user?',
        [
          {
            text: 'Yes',
            onPress: () => {
              // console.log("YES")
              // console.log(item.name)
              // console.log(index)
              let tempcust = cust;
              tempcust[index] = {
                name: item.name,
                email: item.email,
                banstat: false,
              };
              mydb = firebase
                .database()
                .ref('/Users/' + item.email.substr(0, 8));
              mydb.update({
                BanStatus: false,
              });
              // .then(
              //   console.log("\nCust:", cust),
              // setcust(tempcust),
              //   console.log("\nCust:", cust)
              // )

              // console.log(tempcust)
              // setcust(tempcust)
              onscreenload();
            },
          },
          {
            text: 'No',
            onPress: () => {
              console.log('NO');
            },
            // style: "cancel"
          },
        ],
        {cancelable: false},
      );
    }
  }

  function onscreenload() {
    // setcust([{name: 'example', email: 'example@lums.edu.pk', banstat: true}, ])
    // console.log("db access")
    mydb = firebase.database().ref('/Users');
    mydb.once('value').then(function(snapshot) {
      // product = []
      let custarr = [];
      snapshot.forEach(function(childsnapshot) {
        let customer = {
          name: childsnapshot.child('Username').val(),
          email: childsnapshot.child('Useremail').val(),
          banstat: childsnapshot.child('BanStatus').val(),
        };
        // console.log(childsnapshot.child("BanStatus"))
        custarr.push(customer);
        // console.log(customer)
      });
      setcust(custarr);
    });
  }

  return (
    <View style={styles.Screen}>
      <NavigationEvents
        onDidFocus={() => {
          onscreenload();
        }}
      />
      <View style={{width: '100%'}}>
        <FlatList
          data={cust}
          keyExtractor={item => item.name}
          renderItem={({item, index}) => (
            <TouchableOpacity raised style={styles.TextInputbox}>
              <View style={{flexDirection: 'column'}}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.boxfont}>{item.email}</Text>
              </View>

              <TouchableOpacity
                onPress={() => banalert(item, index)}
                style={{justifyContent: 'center'}}>
                <Icon
                  name="ban"
                  size={24}
                  color={item.banstat ? 'black' : 'red'}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // confirmbutton: {
  //   flexDirection: 'row',
  //   // width: "30%",
  //   padding: 50,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },

  Screen: {
    // flexDirection: "column",
    height: '100%',
    padding: '10%',
    backgroundColor: '#e8e8e8',

    // flex: '20%',
  },
  TopBar: {
    padding: 20,
    flexDirection: 'row',
    flex: 2,

    width: '100%',
    height: '100%',
    backgroundColor: '#d00f16',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  TopBarText: {
    // padding: 40,
    flexDirection: 'row',
    fontSize: 30,
    fontFamily: 'Roboto-Bold',
    color: 'white',
    textAlign: 'left',
    alignItems: 'flex-start',
    flex: 6,
  },
  TopBarSearch: {
    // flexDirection: "row",
    alignItems: 'flex-end',
    color: 'white',
    fontSize: 20,
    flex: 1,
  },
  TopBarBack: {
    color: 'white',
    flex: 1,
    fontSize: 20,
  },
  RestScreen: {
    // flex: 9,
    // width: 100,
    // flex: 8,
    // width: 100,
    padding: '15%',
    backgroundColor: '#e8e8e8',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  firstbox: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 10,
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderRadius: 10,
    height: 50,
    paddingTop: 40,
    // justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'darkgrey',
    shadowOpacity: 20,
    // justifyContent: "center",
  },
  TextInputbox: {
    flexDirection: 'row',
    padding: 7,
    paddingHorizontal: 16,
    width: 328,
    height: 64,
    borderRadius: 5,
    elevation: 5,
    // flexDirection: 'row',
    marginVertical: 10,
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 0,
    alignContent: 'center',
    justifyContent: 'space-between',
    textAlign: 'left',
    fontFamily: 'Roboto-Bold',
    shadowColor: 'darkgrey',
    shadowOpacity: 20,
    // borderRadius: 10,
    // height: 50,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  boxfont: {
    fontSize: 12,
    paddingTop: 4,
  },

  Confirmbutton: {
    // padding: 20,
    // paddingBottom: 20,
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
    minHeight: '6%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
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
    // padding: '50%',
    paddingHorizontal: '23%',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
