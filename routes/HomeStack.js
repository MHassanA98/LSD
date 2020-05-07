import { createStackNavigator } from 'react-navigation-stack';
import Icon from "react-native-vector-icons/MaterialIcons"
import Home from '../screens/Home';
import Kitchen from '../screens/Kitchen';
import Store from '../screens/Store';
import CustMenu from '../screens/CustMenu';
import ShoppingCart from '../screens/Shopping_cart'
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Checkout from '../screens/Checkout'

const screens = {

  Home: {
    screen: Home,
    navigationOptions:({navigation})=>{
      return{
        title: 'Home',
        headerTintColor:'white',
        headerLeft:() => (
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={{paddingLeft:16}}
          >
            <Icon name='menu' size={24} color={'white'}/>
          </TouchableOpacity>
        ),
      }
    }
  },

  Kitchen:{
    screen:Kitchen
    
  },

  Store:{
    screen:Store
  },

  CustMenu:{
    screen:CustMenu
  },

  ShoppingCart:{
    screen:ShoppingCart,
    navigationOptions:({navigation})=>{

      return{
        title: 'Home',
        headerTintColor:'white',
        headerRight:()=>null,
      }
    }
  },

  Checkout:{
    screen:Checkout,
    navigationOptions:{
      headerRight:()=>null
    }
  }
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: ({navigation})=>{
    
    return {
      headerTintColor: '#ffffff',
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

      headerRight:() => (
        <TouchableOpacity
          onPress={() => navigation.navigate('ShoppingCart')}
          activeOpacity={0.3}
          style={{paddingRight:16}}
        >
          <Icon name='shopping-cart' size={28} color={'white'}/>
      </TouchableOpacity>
      ),

    }
  }  
  }
);

export default HomeStack