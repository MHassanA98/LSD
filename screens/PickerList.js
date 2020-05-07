import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Picker} from '@react-native-community/picker';

export default function Category() {
  const [selectedValue, setSelectedValue] = useState('Choose a category');
  return (
    <Picker
      selectedValue={selectedValue}
      style={styles.container}
      onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
      <Picker.Item label="Choose a Location" value="null" />
      <Picker.Item label="M5" value="M5" />
      <Picker.Item label="SDSB" value="SDSB" />
      <Picker.Item label="Female Barrier" value="Female Barrier" />
    </Picker>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 10,
    width: '100%',
    height: 50,
    elevation: 2,
  },

  viewstyle: {
    width: '100%',
    alignItems: 'center',
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 0,
    borderRadius: 10,
    shadowColor: 'darkgrey',
    shadowOpacity: 20,
  }
  
});
