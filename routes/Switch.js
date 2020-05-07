import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginStack from './LoginStack';
import AdminDrawer from './AdminDrawer';
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