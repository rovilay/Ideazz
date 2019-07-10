import { createStackNavigator, createAppContainer } from "react-navigation";

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

const AppNavigator = createStackNavigator(Routes, { 
    initialRouteName: "Signup",
    defaultNavigationOptions: {
        header: null
    }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
