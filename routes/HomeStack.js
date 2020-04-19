import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
// import ReviewDetails from '../screens/reviewDetails';

const screens = {
    Home: {
      screen: Home,
    },
    // ReviewDetails: {
    //   screen: ReviewDetails,
    // },
  };

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#d00f16', height: 60 }
  }
});

export default createAppContainer(HomeStack);