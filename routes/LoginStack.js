import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/Login';
import Registration from '../screens/Registration';
import Forgotpwemail from '../screens/Forgotpwemail';
import splashscreen from '../screens/splashscreen';

const screens = {

  splashscreen: {
    screen: splashscreen,
    navigationOptions:{
      headerShown:false
    }
  },

  Login: {
    screen: Login,
    navigationOptions:{
      headerShown:false
    }
  },

  Registration: {
    screen: Registration,
    navigationOptions:{
      title:null,
      headerTransparent: true
    }
  },

  Forgotpwemail: {
    screen: Forgotpwemail,
    navigationOptions:{
      title:null,
      headerTransparent: true
    }
  },


};

const LoginStack = createStackNavigator(screens, {
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

export default LoginStack