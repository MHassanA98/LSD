import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

export default function RedemptionPoints() {
  return (
    <TouchableWithoutFeedback onPress = {() =>{
      Keyboard.dismiss()
    }}>
    <View style={styles.Screen}>
      <View style={styles.RestScreen}>
        <View style={styles.TextInputbox}>
          <TextInput
            placeholder="Rs. per point"
            placeholderTextColor="black"
          />
        </View>

        <View style={styles.bigbutton}>
          <TouchableOpacity
            onPress={() => alert('Confirmed!')}
            style={styles.Confirmbutton}>
            <Text style={styles.bigbuttontext}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  Screen: {
    height: '100%',
    backgroundColor:'#e8e8e8'
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
    flexDirection: 'row',
    fontSize: 25,
    fontFamily: 'Roboto-Bold',
    color: 'white',
    textAlign: 'left',
    alignItems: 'flex-start',
    flex: 6,
  },

  TopBarSearch: {
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
    padding: 60,
    backgroundColor: '#e8e8e8',
    height: '90%',
    alignItems: 'center',
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
    alignItems: 'center',
    shadowColor: 'darkgrey',
    shadowOpacity: 20,
  },

  TextInputbox: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 10,
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
  },

  Confirmbutton: {
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
  },

  bigbutton: {
    paddingHorizontal: '23%',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
