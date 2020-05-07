import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import Kitchen from '../screens/Kitchen';
import Store from '../screens/Store';
import AdminMenu from '../screens/AdminMenu';
import React from 'react';
import AddItem from '../screens/AddItem'
import UpdateItem from '../screens/UpdateItem'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const screens = {

  Home: {
    screen: Home,
    navigationOptions:({navigation})=>{

      return{
        title: 'LSD',
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

   Kitchen:{
    screen:Kitchen    
  },

  Store:{
    screen:Store
  },

  AdminMenu:{
    screen:AdminMenu,
    HeaderTitle:"Items"
  },

  AddItem:{
      screen: AddItem,
      HeaderTitle:"Add an item"
  },

  UpdateItem:{
      screen:UpdateItem,
      navigationOptions:{
              title:"Item name"
            }
  }

};

const AdminStack = createStackNavigator(screens, {
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

export default AdminStack