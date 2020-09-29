import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings115602Navigator from '../features/Settings115602/navigator';
import UserProfile115595Navigator from '../features/UserProfile115595/navigator';
import Settings115594Navigator from '../features/Settings115594/navigator';
import Settings115592Navigator from '../features/Settings115592/navigator';
import SignIn2115590Navigator from '../features/SignIn2115590/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings115602: { screen: Settings115602Navigator },
UserProfile115595: { screen: UserProfile115595Navigator },
Settings115594: { screen: Settings115594Navigator },
Settings115592: { screen: Settings115592Navigator },
SignIn2115590: { screen: SignIn2115590Navigator },

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
