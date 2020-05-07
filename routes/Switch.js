import { createDrawerNavigator} from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';  
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Login from '../screens/Login';
import Registration from '../screens/Registration';
import Forgotpwemail from '../screens/Forgotpwemail';
import Home from '../screens/Home';
import Kitchen from '../screens/Kitchen';
import Store from '../screens/Store';
import AdminMenu from '../screens/AdminMenu';
import CustMenu from '../screens/CustMenu';
import Pending_Order_Admin from '../screens/Pending_Order_Admin';
import PendingOrdersList from '../screens/PendingOrdersList';
import RedemptionPoints from '../screens/RedemptionPoints';
// import Subcategory from '../screens/Subcategory';
import Customer_Profile from '../screens/Customer_Profile';
import change_password_customer from '../screens/change_password_customer';
// import Forgotpw from '../screens/Forgotpw';
// import Change_Password from '../screens/ChangePassword';
import React from 'react';
import { Button } from 'react-native';
import OrderStack from './OrderStack';
import LoginStack from './LoginStack';
import RedemptionStack from './RedemptionStack';
import AdminDrawer from './AdminDrawer';
import CustomerStack from './CustomerStack';
import ProfileStack from './ProfileStack';
import CustomerDrawer from './CustomerDrawer';

const Switches = {

    LoginStack:{
        screen:LoginStack
    },

    AdminDrawer:{
        screen:AdminDrawer
    },

    CustomerDrawer:{
        screen:CustomerDrawer
    },
    
};

const Navigate = createSwitchNavigator(Switches)

export default createAppContainer(Navigate)