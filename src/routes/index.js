import React from 'react';
import { createBottomTabNavigator, createMaterialTopTabNavigator, createDrawerNavigator, createAppContainer, createStackNavigator } from "react-navigation";

import AuthenticateScreen from '../components/Hoc/Auth';
import HomeScreen from '../views/HomeScreen';
import AuthScreen from '../views/Auth';
import IdeasScreen from '../views/Ideas';
import SettingsScreen from '../views/Settings';
import {
    loginScreenName, signupScreenName,
    homeScreenName, ideasScreenName, settingsScreenName
} from '../helpers/defaults';
import { getInitialRouteName } from '../helpers/utils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import generalStyles from '../components/generalStyles';


const Routes = {
    [homeScreenName]: {
        screen: HomeScreen
    },
    [signupScreenName]: {
        screen: AuthScreen
    },
    [loginScreenName]: {
        screen: AuthScreen
    },
    [ideasScreenName]: {
        screen: IdeasScreen
    }
};

// const ModalStack = createStackNavigator({
//     modal: {
//         screen: AuthScreen
//     },
// },  {
//     mode: 'modal',
//     headerMode: 'none',
// });

// const initialRouteName = getInitialRouteName();
// console.log(initialRouteName, '---------------')
const Tabs = createBottomTabNavigator({
    "IdeaFeeds": {
        screen: AuthScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <Icon name="format-list-bulleted" color={tintColor} size={24} /> 
            },
            // tabBarVisible: false,
            tabBarOptions: {
                activeTintColor: generalStyles.defaultColor.color,
                inactiveTintColor: generalStyles.disabledColor.color,
                showLabel: false
            },
        }
    },
    [ideasScreenName]: {
        screen: AuthenticateScreen(IdeasScreen),
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <Icon name="lightbulb-on" color={tintColor} size={24} /> 
            },
            tabBarOptions: {
                activeTintColor: generalStyles.defaultColor.color,
                inactiveTintColor: generalStyles.disabledColor.color,
                showLabel: false
            },
        }
    },
    [settingsScreenName]: {
        screen: AuthenticateScreen(SettingsScreen),
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <Icon name="settings" color={tintColor} size={24} /> 
            },
            tabBarOptions: {
                activeTintColor: generalStyles.defaultColor.color,
                inactiveTintColor: generalStyles.disabledColor.color,
                showLabel: false
            },
        }
    },
}, {
    initialRouteName: settingsScreenName
});

const Root = createStackNavigator({
    Tabs: {
        screen: Tabs
    },
    [homeScreenName]: {
        screen: AuthenticateScreen(HomeScreen)
    },
    [signupScreenName]: {
        screen: AuthScreen
    },
    [loginScreenName]: {
        screen: AuthScreen
    },
    "Test": {
        screen: AuthenticateScreen(SettingsScreen)
    }
}, {
    headerMode: 'none',
    initialRouteName:  homeScreenName
});

const AppNavigator = createDrawerNavigator(Routes, { 
    initialRouteName: homeScreenName,
    defaultNavigationOptions: {
        header: null
    },
    drawerPosition: 'right'
});

const AppContainer = createAppContainer(Root);

export default AppContainer;
