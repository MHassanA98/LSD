import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Customer from '../screens/Customers';
import React from 'react';
import { TouchableOpacity } from 'react-native';

const screens = {

  Customer:{
      screen:Customer,
      navigationOptions:({navigation})=>{

        return{
          title: 'Home',
          headerTintColor:'white',
          headerLeft:() => (
            <TouchableOpacity
              onPress={() => navigation.toggleDrawer()}
              style={{paddingLeft:16}}
            >
              <Icon name='menu' size={28} color={'white'}/>
            </TouchableOpacity>
          ),
        }
      }
  }

};

const CustomerStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { 
    backgroundColor: '#d00f16', 
    height: 60,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 1.50,
    elevation: 3,
  },    
  }
});

export default CustomerStack