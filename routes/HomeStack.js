import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Registration from '../screens/Registration';
import Forgotpwemail from '../screens/Forgotpwemail';
// import Forgotpw from '../screens/Forgotpw';
// import Change_Password from '../screens/ChangePassword';
import React from 'react';
import Kitchen from '../screens/Kitchen';
import Customer_Profile from '../screens/Customer_Profile';
import change_password_customer from '../screens/change_password_customer';
import Store from '../screens/Store';
import AddItem from '../screens/AddItem';
import { Button } from 'react-native';
// import firebase from '@react-native-firebase/app';
// import ReviewDetails from '../screens/reviewDetails';

const screens = {

  AddItem: {
    screen: AddItem,
  },
  
  Login: {
    screen: Login,
    navigationOptions:{
      headerShown:false
    }
  },

  Registration: {
    screen: Registration,
    navigationOptions:{
      title:null,
      headerTransparent: true
    }
  },

  Forgotpwemail: {
    screen: Forgotpwemail,
    navigationOptions:{
      title:null,
      headerTransparent: true
    }
  },

  Home: {
    screen: Home,
    navigationOptions:{
      title: 'LSD',
      headerLeft:() => null,
      // gestureEnabled:true
    }
  },

  Kitchen:{
    screen:Kitchen
    
  },

  Store:{
    screen:Store
  },

  // Customer_Profile: {
  //     screen: Customer_Profile,
  //     navigationOptions:{
  //       headerShown:false
  //     }
  //   },
  
  // change_password_customer: {
  //   screen: change_password_customer,
  // },

};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
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

export default createAppContainer(HomeStack);