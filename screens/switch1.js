import React, { Component } from 'react'
import { Text,View, Switch, StyleSheet }

from 'react-native'

export default SwitchExample = (props) => {
   return (
      <View>
         <Switch
         onValueChange = {props.toggleSwitch1}
         value = {props.switch1Value}/>
      </View>
   )
}
