import { createStackNavigator } from 'react-navigation-stack';
import Icon from "react-native-vector-icons/MaterialIcons"
import CustomerProfile from '../screens/Customer_Profile';
import ChangePassword from '../screens/change_password_customer';
import ChangePhone from '../screens/change_phone_customer';
import React from 'react';
import {  TouchableOpacity } from 'react-native';

const screens = {


  CustomerProfile:{
      screen: CustomerProfile,
      navigationOptions:({navigation})=>{

        return{
          title: 'My Profile',
          headerTransparent:true,
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
  },

  ChangePassword:{
      screen:ChangePassword
  },

  ChangePhone:{
      screen:ChangePhone
  }


};

// home stack navigator screens
const ProfileStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#fff',
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

export default ProfileStack