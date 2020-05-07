import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Picker} from '@react-native-community/picker';

export default function SubCategory() {
  const [selectedValue, setSelectedValue] = useState('Choose a subcategory');
  return (
    <Picker
      selectedValue={selectedValue}
      style={styles.container}
      onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
      <Picker.Item label="Choose a subcategory" value="null" />
      <Picker.Item label="Food" value="food" />
      <Picker.Item label="Stationary" value="stationary" />
      <Picker.Item label="Grocery" value="grocery" />
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
  },
});
