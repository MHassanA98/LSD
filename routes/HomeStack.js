import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Icon from "react-native-vector-icons/MaterialIcons"
import Login from '../screens/Login';
import Registration from '../screens/Registration';
import Forgotpwemail from '../screens/Forgotpwemail';
import Home from '../screens/Home';
import Kitchen from '../screens/Kitchen';
import Store from '../screens/Store';
import AdminMenu from '../screens/AdminMenu';
import CustMenu from '../screens/CustMenu';
import Pending_Order_Admin from '../screens/Pending_Order_Admin';
import ShoppingCart from '../screens/Shopping_cart'
// import Subcategory from '../screens/Subcategory';
import Customer_Profile from '../screens/Customer_Profile';
import change_password_customer from '../screens/change_password_customer';
// import Forgotpw from '../screens/Forgotpw';
// import Change_Password from '../screens/ChangePassword';
import React from 'react';
import { Button,TouchableOpacity,Text } from 'react-native';
import Checkout from '../screens/Checkout'
import AsyncStorage from '@react-native-community/async-storage';
// import firebase from '@react-native-firebase/app';
// import ReviewDetails from '../screens/reviewDetails';

// async function emptyitems(name) {
//     try {
//       const item = await AsyncStorage.removeItem(name)
//     } catch(e) {
//       console.log(e)
//     }

//   }

// async function removeData() {
  
//   try {
//     const value = await AsyncStorage.getAllKeys()
//     if(value !== null) {
//       value.forEach(function(name) {
//         emptyitems(name)
//       })
//     }
//     console.log("Here")
//     // const keys=await AsyncStorage.getAllKeys()
//     // await AsyncStorage.multiRemove(keys)
//   }
//    catch(e) {
//     console.log(e)
//   }
// }

const screens = {

  // Home: {
  //   screen: Home,
  //   navigationOptions:{
  //     title: 'LSD',
  //     headerLeft:() => null,
  //     // gestureEnabled:true
  //   }
  // },

  // Login: {
  //   screen: Login,
  //   navigationOptions:{
  //     headerShown:false
  //   }
  // },

  // Registration: {
  //   screen: Registration,
  //   navigationOptions:{
  //     title:null,
  //     headerTransparent: true
  //   }
  // },

  // Forgotpwemail: {
  //   screen: Forgotpwemail,
  //   navigationOptions:{
  //     title:null,
  //     headerTransparent: true
  //   }
  // },

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

  // AdminMenu:{
  //   screen:AdminMenu
  // },

  ShoppingCart:{
    screen:ShoppingCart,
    // navigationOptions:{
    //   headerRight:()=>null
    // }
    navigationOptions:({navigation})=>{

      return{
        title: 'Home',
        headerTintColor:'white',
        headerRight:()=>null,
        // headerRight:()=>(
        //   <Text>
        //     asd
        //   </Text>
        // )
        // headerLeft:() => (
        //   <TouchableOpacity
        //     onPress={() => {
        //       // removeData().then(navigation.goBack())
        //       navigation.goBack()
              
        //     }
        //   }
        //     // title="Info"
        //     // color="#e8e8e8"
        //     style={{paddingLeft:16}}
        //   >
        //     <Icon name='arrow-back' size={24} color={'white'}/>


        //   </TouchableOpacity>
        // ),
      }
    }
  },

  Checkout:{
    screen:Checkout,
    navigationOptions:{
      headerRight:()=>null
    }
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
          // title="Info"
          // color="#e8e8e8"
          activeOpacity={0.4}
          style={{paddingRight:16}}
        >
          <Icon name='shopping-cart' size={28} color={'white'}/>


        </TouchableOpacity>
      ),

    }
  }
  //   headerTintColor: '#444',
  //   headerStyle: { 
  //     backgroundColor: '#d00f16', 
  //     height: 60,
  //     shadowColor: "black",
  //     shadowOffset: {
  //         width: 0,
  //         height: 2,
  //       },
  //     shadowOpacity: 0.9,
  //     shadowRadius: 1.50,
  //     elevation: 3,
    
  //   headerRight:() => (
  //     <TouchableOpacity
  //       onPress={() => navigation.toggleDrawer()}
  //       // title="Info"
  //       // color="#e8e8e8"
  //       style={{paddingLeft:16}}
  //     >
  //       <Icon name='shopping_cart' size={28} color={'white'}/>


  //     </TouchableOpacity>
  //   ),

  // },

  
    
  }
);

// export default createAppContainer(HomeStack);
export default HomeStack