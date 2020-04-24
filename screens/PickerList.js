<<<<<<< HEAD
import React, { Component } from "react";
import { View } from "react-native";
import {Picker} from "@react-native-community/picker";
=======
import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-community/picker';
>>>>>>> 2147cdd9e056ed0c89e09055b53094b4d726b2c8

export default function Category() {
  const [selectedValue, setSelectedValue] = useState('Choose a category');
  return (
    // <TouchableOpacity raised style={styles.viewstyle}>
    <Picker
      selectedValue={selectedValue}
      style={styles.container}
      onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
      <Picker.Item label="Choose a category" value="null" />
      <Picker.Item label="Food" value="food" />
      <Picker.Item label="Stationary" value="stationary" />
      <Picker.Item label="Grocery" value="grocery" />
    </Picker>
    // </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 10,
    width: '100%',
    height: 50,
    elevation: 2,
  },
  viewstyle: {
    // padding: 30,
    width: '100%',
    alignItems: 'center',
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 0,
    borderRadius: 10,
    // padding: 30,
    // alignItems: 'center',
    shadowColor: 'darkgrey',
    shadowOpacity: 20,
  },
});
