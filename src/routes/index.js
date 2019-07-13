import React from 'react';
import { createBottomTabNavigator, createMaterialTopTabNavigator, createDrawerNavigator, createAppContainer, createStackNavigator } from "react-navigation";

import AuthenticateScreen from '../components/Hoc/Auth';
import HomeScreen from '../screens/Home';
import AuthScreen from '../screens/Auth';
import CreateIdeasScreen from '../screens/CreateIdeas';
import SettingsScreen from '../screens/Settings';
import {
    loginScreenName, signupScreenName, ideaFeedsScreenName,
    homeScreenName, ideasScreenName, settingsScreenName
} from '../helpers/defaults';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import generalStyles from '../components/generalStyles';
import IdeaFeedsScreen from '../screens/IdeaFeeds';


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
        screen: CreateIdeasScreen
    }
};

const Tabs = createBottomTabNavigator({
    [ideaFeedsScreenName]: {
        screen: AuthenticateScreen(IdeaFeedsScreen),
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
        screen: AuthenticateScreen(CreateIdeasScreen),
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
                return <Icon name="logout" color={tintColor} size={24} /> 
            },
            tabBarOptions: {
                activeTintColor: generalStyles.defaultColor.color,
                inactiveTintColor: generalStyles.disabledColor.color,
                showLabel: false
            },
        }
    },
}, {
    initialRouteName: ideaFeedsScreenName
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
