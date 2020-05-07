import { createStackNavigator } from 'react-navigation-stack';
import Icon from "react-native-vector-icons/MaterialIcons"
import Order_Detail_Customer from '../screens/Order_Detail_Customer';
import React from 'react';
import { Button,TouchableOpacity } from 'react-native';

const screens = {

    Order_Detail_Customer:{
        screen:Order_Detail_Customer,
        navigationOptions:({navigation})=>{

          return{
            title: 'Your Order',
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

const CustomerOrderStack = createStackNavigator(screens, {
  defaultNavigationOptions: {

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

  
    
  }
});

export default CustomerOrderStack