import { createStackNavigator } from 'react-navigation-stack';
import Icon from "react-native-vector-icons/MaterialIcons"
import RedemptionPoints from '../screens/RedemptionPoints';
import React from 'react';
import {TouchableOpacity} from 'react-native';

const screens = {

    RedemptionPoints:{
        screen: RedemptionPoints,
        navigationOptions:({navigation})=>{

          return{
            title: 'Redemption Points',
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

const RedemptionStack = createStackNavigator(screens, {
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

export default RedemptionStack