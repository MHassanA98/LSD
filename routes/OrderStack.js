import { createStackNavigator } from 'react-navigation-stack';
import Icon from "react-native-vector-icons/MaterialIcons"
import Pending_Order_Admin from '../screens/Pending_Order_Admin';
import PendingOrdersList from '../screens/PendingOrdersList';
import React from 'react';
import { TouchableOpacity } from 'react-native';

const screens = {

    PendingOrdersList:{
      screen:PendingOrdersList,

      navigationOptions:({navigation})=>{

        return{
          title: 'Orders',
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

    Pending_Order_Admin:{
        screen:Pending_Order_Admin,
        navigationOptions:({navigation})=>{

          return{
            title: 'Order Detail',
            headerTintColor:'white',
            
          }
        }
        
    },


};

const OrderStack = createStackNavigator(screens, {
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

export default OrderStack