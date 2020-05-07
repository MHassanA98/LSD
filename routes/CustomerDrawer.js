import { createDrawerNavigator} from 'react-navigation-drawer';
import {Dimensions} from 'react-native'
import HomeStack from './HomeStack';
import CustomerOrderStack from './CustomerOrderStack';
import ProfileStack from './ProfileStack';
import CDrawer from './CDrawer'

const Stacks = {

    Home:{
        screen:HomeStack
    },

    Order:{
        screen:CustomerOrderStack
    },

    Profile:{
        screen:ProfileStack
    },

};

const CustomerDrawer = createDrawerNavigator(Stacks,
  {
    drawerWidth:Dimensions.get('window').width-120,
    contentComponent: CDrawer,
    gesturesEnabled: false,
    edgeWidth:0
  }
)

export default CustomerDrawer;
// export default CustomerDrawer