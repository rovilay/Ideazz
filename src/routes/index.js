import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from '../views/HomeScreen';
import SignupScreen from '../views/Auth/SignupScreen';
import LoginScreen from '../views/Auth/LoginScreen';

const Routes = {
    Home: {
        screen: HomeScreen
    },
    Signup: {
        screen: SignupScreen
    },
    Login: {
        screen: LoginScreen
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
