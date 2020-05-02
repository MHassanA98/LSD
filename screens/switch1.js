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
        trackColor={{true: 'red', false: '#e8e8e8'}}
        thumbColor={isEnabled ? 'ffffff' : '#e8e8e8'}
        //   thumbTintColor="#d00f16"
      />
    </View>
  );
});
