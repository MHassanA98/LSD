import React, { Component } from "react";
import { View, Picker } from "react-native";

export default class SubCategory extends Component {
  render() {
    return (
      <View>
        <Picker>
          <Picker.Item label="select a Sub Category" value="8"></Picker.Item>
          <Picker.Item label="food" value="0"></Picker.Item>
          <Picker.Item label="stationary" value="2"></Picker.Item>
          <Picker.Item label="Grocery" value="4"></Picker.Item>
        </Picker>
      </View>
    );
  }
}
