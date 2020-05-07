import React, { Component } from 'react';
import { View, Picker, StyleSheet } from 'react-native'

class PickerExample extends Component {
   state = {user: ''}
   updateUser = (user) => {
      this.setState({ user: user })
   }
   render() {
      return (
         <View>
            <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
               <Picker.Item label="Select Delivery Location" value=""/>
               <Picker.Item label="SSE" value="1" />
               <Picker.Item label="SDSB" value="2"/>
               <Picker.Item label="B1" value="3"/>
               <Picker.Item label="M7" value="4"/>
               <Picker.Item label="Campus Residence" value="5"/>
            </Picker>
         </View>
      )
   }
}
export default PickerExample

const styles = StyleSheet.create({
   text: {
      fontSize: 18,
   }
})