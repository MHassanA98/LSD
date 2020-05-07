import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../screens/Login';
import Registration from '../screens/Registration';
import Forgotpwemail from '../screens/Forgotpwemail';
import Home from '../screens/Home';
import Kitchen from '../screens/Kitchen';
import Store from '../screens/Store';
import AdminMenu from '../screens/AdminMenu';
import CustMenu from '../screens/CustMenu';
import Pending_Order_Admin from '../screens/Pending_Order_Admin';
// import Subcategory from '../screens/Subcategory';
import Customer_Profile from '../screens/Customer_Profile';
import change_password_customer from '../screens/change_password_customer';
// import Forgotpw from '../screens/Forgotpw';
// import Change_Password from '../screens/ChangePassword';
import React from 'react';
import { Button } from 'react-native';
import AddItem from '../screens/AddItem'
import UpdateItem from '../screens/UpdateItem'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import firebase from '@react-native-firebase/app';
// import ReviewDetails from '../screens/reviewDetails';

const screens = {

//   Home: {
//     screen: Home,
//     navigationOptions:{
//       title: 'LSD',
//       headerLeft:() => null,
//       // gestureEnabled:true
//     }
//   },

//   Login: {
//     screen: Login,
//     navigationOptions:{
//       headerShown:false
//     }
//   },

//   Registration: {
//     screen: Registration,
//     navigationOptions:{
//       title:null,
//       headerTransparent: true
//     }
//   },

//   Forgotpwemail: {
//     screen: Forgotpwemail,
//     navigationOptions:{
//       title:null,
//       headerTransparent: true
//     }
//   },

  Home: {
    screen: Home,
    navigationOptions:({navigation})=>{

      return{
        title: 'Home',
        headerTintColor:'white',
        headerLeft:() => (
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            // title="Info"
            // color="#e8e8e8"
            style={{paddingLeft:16}}
          >
            <Icon name='menu' size={28} color={'white'}/>


          </TouchableOpacity>
        ),
      }
    }
      
      // gestureEnabled:true
      // headerLeft: () => (
      //   <Button
      //     onPress={() => navigation.openDrawer}
      //     title="Info"
      //     color="#e8e8e8"
      //   />)
      
      },
      
    // },
    

  Kitchen:{
    screen:Kitchen
    
  },

  Store:{
    screen:Store
  },

//   CustMenu:{
//     screen:CustMenu
//   },

  AdminMenu:{
    screen:AdminMenu,
    navigationOptions:({navigation})=>{

      return{
        title: navigation.getParam('Sub'),
        headerTintColor:'white',
      }
    }
    
  },

  AddItem:{
      screen: AddItem,
      navigationOptions:({navigation})=>{

        return{
          title: 'Add item',
          headerTintColor:'white',
        }
      }
  },

  UpdateItem:{
      screen:UpdateItem,
      navigationOptions:{
              title:"Update Item"
            }
      // title:"Item Name"
  }



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

// export default createAppContainer(HomeStack);
export default AdminStack