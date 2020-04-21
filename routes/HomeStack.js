import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Registration from '../screens/Registration';
import firebase from '@react-native-firebase/app';
// import ReviewDetails from '../screens/reviewDetails';

const screens = {

    Home: {
      screen: Home,
      
    },
  	
  	// Login: {
    //   screen: Login,
    // },

    // Registration: {
    //   screen: Registration
    // }
  
  };

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
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

export default createAppContainer(HomeStack);