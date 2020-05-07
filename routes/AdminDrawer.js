import { createDrawerNavigator} from 'react-navigation-drawer';
import {Dimensions} from 'react-native'
import OrderStack from './OrderStack';
import RedemptionStack from './RedemptionStack';
import AdminStack from './AdminStack';
import CustomerStack from './CustomerStack';
import ProfileStack from './ProfileStack';
import ADrawer from './ADrawer';

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

};

// home stack navigator screens
const AdminDrawer = createDrawerNavigator(Stacks,
  {
    drawerWidth:Dimensions.get('window').width-120,
    contentComponent: ADrawer,
    gesturesEnabled: false,
    edgeWidth:0
  }
)
export default AdminDrawer;