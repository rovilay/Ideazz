import { createStackNavigator, createDrawerNavigator,createAppContainer } from "react-navigation";

import HomeScreen from '../views/HomeScreen';
import AuthScreen from '../views/Auth';
import { loginScreenName, signupScreenName, homeScreenName } from "../helpers/defaults";

const Routes = {
    [homeScreenName]: {
        screen: HomeScreen
    },
    [signupScreenName]: {
        screen: AuthScreen
    },
    [loginScreenName]: {
        screen: AuthScreen
    }
};

const AppNavigator = createDrawerNavigator(Routes, { 
    initialRouteName: loginScreenName,
    defaultNavigationOptions: {
        header: null
    },
    drawerPosition: 'right'
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
