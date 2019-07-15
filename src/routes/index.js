import React from 'react';
import { 
    createBottomTabNavigator,
    createStackNavigator,
    createAppContainer
} from "react-navigation";
import { Header } from "react-native-elements";

import AuthenticateScreen from '../components/Hoc/Auth';
import HomeScreen from '../screens/Home';
import AuthScreen from '../screens/Auth';
import CreateIdeasScreen from '../screens/CreateIdeas';
import IdeaFeedsScreen from '../screens/IdeaFeeds';
import SettingsScreen from '../screens/Settings';
import {
    loginScreenName, signupScreenName, ideaFeedsScreenName,
    homeScreenName, ideasScreenName, settingsScreenName,
    createIdeaScreenName, updateIdeaScreenName
} from '../helpers/defaults';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import generalStyles from '../components/generalStyles';
import Logo from '../components/Logo';
import SortMenu from '../components/SortMenu';

const signup = createStackNavigator({ 
    [signupScreenName]: {
        screen: AuthScreen,
        params: { view: 'sign up' }
    }
}, {
    defaultNavigationOptions: ({ navigation }) => {
        const routeName = navigation.getParam('view');

        return {
            header: <Header
                    centerComponent={<Logo title={routeName} />}
                    statusBarProps={{ barStyle: 'light-content' }}
                    containerStyle={{
                        height: '100%',
                        borderBottomColor: 'transparent',
                        backgroundColor: generalStyles.defaultColor.color
                    }}
                />,
        }
    }  
});

const login = createStackNavigator({ 
    [loginScreenName]: {
        screen: AuthScreen,
        params: { view: 'log in' }
    }
}, {
    defaultNavigationOptions: ({ navigation }) => {
        const routeName = navigation.getParam('view');

        return {
            header: <Header
                    centerComponent={<Logo title={routeName} />}
                    statusBarProps={{ barStyle: 'light-content' }}
                    containerStyle={{
                        height: '100%',
                        borderBottomColor: 'transparent',
                        backgroundColor: generalStyles.defaultColor.color
                    }}
                />,
        }
    }  
});

const ideaStack = createStackNavigator({
    [createIdeaScreenName]: {
        screen: AuthenticateScreen(CreateIdeasScreen),
        params: { view: createIdeaScreenName }
    },
    [updateIdeaScreenName]: {
        screen: AuthenticateScreen(CreateIdeasScreen),
        params: { view: updateIdeaScreenName }
    },
}, {
    defaultNavigationOptions: ({ navigation }) => {
        return {
            header: <Header
                    centerComponent={<Logo title={'ideas'} />}
                    statusBarProps={{ barStyle: 'light-content' }}
                    containerStyle={{
                        height: '100%',
                        borderBottomColor: 'transparent',
                        backgroundColor: generalStyles.defaultColor.color
                    }}
                />
        }
    },
});

const ideaFeedStack = createStackNavigator({
    [ideaFeedsScreenName]: {
        screen: AuthenticateScreen(IdeaFeedsScreen),
        navigationOptions: ({ navigation }) => {
            const view = navigation.getParam('view', 'ideas');
    
            return {
                header: <Header
                        centerComponent={<Logo title={view} />}
                        rightComponent={<SortMenu />}
                        statusBarProps={{ barStyle: 'light-content' }}
                        containerStyle={{
                            height: '100%',
                            borderBottomColor: 'transparent',
                            backgroundColor: generalStyles.defaultColor.color
                        }}
                    />
            }
        }
    },
});

const settingsStack = createStackNavigator({
    [settingsScreenName]:{
        screen: AuthenticateScreen(SettingsScreen),
        navigationOptions: ({ navigation }) => {
            const view = navigation.getParam('view', 'ideas');
    
            return {
                header: <Header
                        centerComponent={<Logo title={view} />}
                        statusBarProps={{ barStyle: 'light-content' }}
                        containerStyle={{
                            height: '100%',
                            borderBottomColor: 'transparent',
                            backgroundColor: generalStyles.defaultColor.color
                        }}
                    />
            }
        }
    }
})

const TabsNavigator = createBottomTabNavigator({
    ideaFeedStack: {
        screen: ideaFeedStack,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <Icon name="format-list-bulleted" color={tintColor} size={24} /> 
            },
        }
    },
    ideaStack: {
        screen: ideaStack,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <Icon name="lightbulb-on" color={tintColor} size={24} />  
            },
        }
    },
    settingsStack: {
        screen: settingsStack,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <Icon name="logout" color={tintColor} size={24} /> 
            },
        }
    }
}, {
    defaultNavigationOptions: {
        tabBarOptions: {
            activeTintColor: generalStyles.defaultColor.color,
            inactiveTintColor: generalStyles.disabledColor.color,
            showLabel: false
        }
    },
})

const Root = createStackNavigator({
    TabsNavigator,
    [homeScreenName]: {
        screen: HomeScreen,
        headerMode: 'none',
        navigationOptions: {
            tabBarVisible: false
        }
    },
    signup,
    login,
}, {
    headerMode: 'none',
    initialRouteName:  homeScreenName,
});

const AppContainer = createAppContainer(Root);

export default AppContainer;
