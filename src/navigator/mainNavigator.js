import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignUp16189232Navigator from '../features/SignUp16189232/navigator';
import SignIn47189231Navigator from '../features/SignIn47189231/navigator';
import UserProfile8189230Navigator from '../features/UserProfile8189230/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignUp16189232: { screen: SignUp16189232Navigator },
SignIn47189231: { screen: SignIn47189231Navigator },
UserProfile8189230: { screen: UserProfile8189230Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
