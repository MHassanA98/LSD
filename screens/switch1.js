import React, {useState} from 'react';
import {Text, View, Switch, StyleSheet} from 'react-native';

export default (SwitchExample = props => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View>
      <Switch
        onValueChange={props.toggleSwitch1}
        value={props.switch1Value}
        trackColor={{true: 'red', false: '#d3d3d3'}}
        thumbColor={isEnabled ? 'ffffff' : '#d3d3d3'}
        //   thumbTintColor="#d00f16"
      />
    </View>
  );
});
