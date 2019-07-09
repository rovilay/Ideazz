import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from '../views/HomeScreen';
import SignupScreen from '../views/Auth/SignupScreen';

const Routes = {
    Home: {
        screen: HomeScreen
    },
    Signup: {
        screen: SignupScreen
    }
};

const AppNavigator = createStackNavigator(Routes, { 
    initialRouteName: "Home",
    defaultNavigationOptions: {
        header: null
    }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
