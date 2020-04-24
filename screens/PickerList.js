import React, { Component } from "react";
import { View } from "react-native";
import {Picker} from "@react-native-community/picker";

export default class Category extends Component {
  render() {
    return (
      <View>
        <Picker>
          {/* <View> */}
          <Picker.Item
            label="select a category"
            value="8"
            style={{ color: "red", backgroundColor: "red" }}
          ></Picker.Item>
          <Picker.Item label="food" value="0"></Picker.Item>
          <Picker.Item label="stationary" value="2"></Picker.Item>
          <Picker.Item label="Grocery" value="4"></Picker.Item>
          {/* </View> */}
        </Picker>
      </View>
    );
  }
}
