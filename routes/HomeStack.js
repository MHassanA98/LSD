import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Registration from '../screens/Registration';
// import Change_Password from '../screens/ChangePassword';
import React from 'react';
import Kitchen from '../screens/Kitchen';
import Store from '../screens/Store';
import { Button } from 'react-native';
// import firebase from '@react-native-firebase/app';
// import ReviewDetails from '../screens/reviewDetails';

const screens = {
  
  Login: {
    screen: Login,
    navigationOptions:{
      headerShown:false
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

  // Change_Password:{
  //   screen: Change_Password
  // }
  
  

  Registration: {
    screen: Registration,
    navigationOptions:{
      title:null,
      headerTransparent: true
    }
  }

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