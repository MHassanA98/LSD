import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  // Button,
  // Picker,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
// import DropDownItem from "react-native-drop-down-item";
// import {
//   TouchableHighlight,
//   BorderlessButton,
// } from "react-native-gesture-handler"

export default function Shopping() {
  const [product, setProduct] = useState([
    {name: 'pencil', price: '40', quantity: 0},
    {name: 'ruler', price: '50', quantity: 0},
    {name: 'sharpener', price: '5', quantity: 0},
  ]);
  const [total, setTotal] = useState(0);
  //   const onAdd = () => setProd;
  // const onMin = () => setProduct(prev => prev - 1)
  function onMin(props) {
    return props.quantity - 1;
  }
  //   const onAdd = () => setProduct(prev => prev + 1);

  return (
    <View style={styles.Screen}>
      <View style={{width: '100%', height: 300, marginVertical: 12}}>
        <FlatList
          data={product}
          //   extraData={quantity}
          keyExtractor={item => item.name}
          renderItem={({item}) => (
            <View style={styles.TextInputbox}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                }}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.title}>{'Rs. ' + item.price}</Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  paddingHorizontal: 10,
                }}>
                <TouchableOpacity style={styles.Confirmbutton}>
                  {/* //   onPress={item => setProduct(item.quantity + 1)}> */}
                  {/* //   onPress={onMin(item)}> */}
                  {/* <Text style={styles.boxfont}>UPDATE</Text> */}
                  <Icon name="minus" color="#ffffff" style="light" />
                </TouchableOpacity>
                <Text>{item.quantity}</Text>
                <TouchableOpacity style={styles.Confirmbutton}>
                  {/* // onPress={onAdd(item.quantity)}> */}
                  <Icon name="plus" color="#ffffff" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
      <View style={styles.totalbox}>
        <Text style={styles.totalboxfont}>Total</Text>
        <Text style={styles.totalboxfont}>Rs. {total}</Text>
      </View>
      <View style={styles.bigbutton}>
        <TouchableOpacity
          onPress={() => alert('Confirmed!')}
          style={styles.Confirmationbutton}>
          <Text style={styles.bigbuttontext}>Confirm</Text>
        </TouchableOpacity>
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
    paddingTop: 50,
    backgroundColor: '#e8e8e8',
    height: '560',
    // justifyContent: 'center',
    // padding: 40,
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
  totalbox: {
    width: 328,
    flexDirection: 'row',
    marginVertical: 10,
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderRadius: 5,
    height: 50,
    // paddingHorizontal: 20,
    paddingHorizontal: '5.7%',
    // paddingLeft: 5,
    // paddingTop: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: 'darkgrey',
    shadowOpacity: 20,
  },
  TextInputbox: {
    flexDirection: 'column',
    padding: 7,
    paddingHorizontal: '5.7%',
    width: 328,
    height: 68,
    borderRadius: 5,
    // elevation: 5,
    // flexDirection: 'row',
    marginVertical: 10,
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 0,
    // alignContent: 'center',
    justifyContent: 'space-between',
    // textAlign: 'left',
    fontFamily: 'Roboto',
    shadowColor: 'darkgrey',
    shadowOpacity: 20,
    // borderRadius: 10,
    // height: 50,
  },
  title: {
    fontSize: 20,
    color: '#d00f16',
    // paddingHorizontal:
    // fontWeight: 'bold',
  },
  totalboxfont: {
    fontSize: 20,
    fontFamily: 'Roboto',
    color: 'black',
    paddingHorizontal: 10,
  },
  boxfont: {
    fontSize: 14,
    color: '#ffffff',
    // paddingTop: 4,
  },

  Confirmbutton: {
    // padding: 20,
    // paddingBottom: 20,
    // paddingHorizontal: 15,
    backgroundColor: '#d00f16',
    borderRadius: 2,
    width: 18,
    height: 18,
    shadowColor: '#000',
    // shadowOffset: {width: 2, height: 4},
    shadowOpacity: 20,
    // shadowRadius: 6,
    elevation: 5,
    // minHeight: '6%',
    // textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  Confirmationbutton: {
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
  bigbutton: {
    // padding: '50%',
    paddingHorizontal: '23%',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  plusbutton: {
    // paddingHorizontal: 15,
    // paddingTop: 28,
    backgroundColor: '#d00f16',
    borderRadius: 180,
    width: 56,
    height: 56,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 5,
    // minHeight: '6%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
