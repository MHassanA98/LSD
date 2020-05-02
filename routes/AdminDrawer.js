import { createDrawerNavigator} from 'react-navigation-drawer';
import {Dimensions} from 'react-native'
// import { createStackNavigator } from 'react-navigation-stack';  
// import { createAppContainer } from 'react-navigation';
// import Login from '../screens/Login';
// import Registration from '../screens/Registration';
// import Forgotpwemail from '../screens/Forgotpwemail';
// import Home from '../screens/Home';
// import Kitchen from '../screens/Kitchen';
// import Store from '../screens/Store';
// import AdminMenu from '../screens/AdminMenu';
// import CustMenu from '../screens/CustMenu';
// import Pending_Order_Admin from '../screens/Pending_Order_Admin';
// import PendingOrdersList from '../screens/PendingOrdersList';
// import RedemptionPoints from '../screens/RedemptionPoints';
import Signout from '../screens/Signout';
// import Subcategory from '../screens/Subcategory';
// import Customer_Profile from '../screens/Customer_Profile';
// import change_password_customer from '../screens/change_password_customer';
// import Forgotpw from '../screens/Forgotpw';
// import Change_Password from '../screens/ChangePassword';
import React from 'react';
// import { Button } from 'react-native';
import OrderStack from './OrderStack';
// import LoginStack from './LoginStack';
import RedemptionStack from './RedemptionStack';
import AdminStack from './AdminStack';
import CustomerStack from './CustomerStack';
import ProfileStack from './ProfileStack';
import CustomerDrawer from '../assets/Drawer';

// import firebase from '@react-native-firebase/app';
// import ReviewDetails from '../screens/reviewDetails';

const Stacks = {

    Home:{
        screen:AdminStack
    },

    Orders:{
        screen:OrderStack
    },

    Redemption:{
        screen:RedemptionStack,
        navigationOptions:{
          title:"Redemption Points"
        }
    },

    Customers:{
      screen:CustomerStack
    },

    Profile:{
      screen:ProfileStack
    },

    Signout: {
      screen:Signout

    },

   
    


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

//   Home: {
//     screen: Home,
//     navigationOptions:{
//       title: 'LSD',
//       headerLeft:() => null,
//       // gestureEnabled:true
//     }
//   },

//   Kitchen:{
//     screen:Kitchen
    
//   },

//   Store:{
//     screen:Store
//   },

//   CustMenu:{
//     screen:CustMenu
//   },

//   AdminMenu:{
//     screen:AdminMenu
//   },

//   AddItem:{
//       screen: AddItem
//   },

//   UpdateItem:{
//       screen:UpdateItem
//   }

  

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
const AdminDrawer = createDrawerNavigator(Stacks,
  {
    drawerWidth:Dimensions.get('window').width-120,
    contentComponent: CustomerDrawer
  })
//   , {
//   defaultNavigationOptions: {
//     headerTintColor: '#444',
//     headerStyle: { 
//     backgroundColor: '#d00f16', 
//     height: 60,
//     shadowColor: "black",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.9,
//     shadowRadius: 1.50,
//     elevation: 3,
//   },

  
    
//   }
// });

// export default createAppContainer(HomeStack);
export default AdminDrawer;