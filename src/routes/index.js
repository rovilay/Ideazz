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


const a = createStackNavigator({
    d: {
        screen: AuthenticateScreen(IdeaFeedsScreen),
        params: { view: 'feeds' },
        navigationOptions: ({ navigation }) => {
            const routeName = navigation.getParam('view', 'ogo');
    
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
    }
});

const b = createStackNavigator({
    e: {
        screen: AuthenticateScreen(CreateIdeasScreen),
        // params: { view: 'create' },
    }
}, {
    defaultNavigationOptions: ({ navigation }) => {
        const routeName = navigation.getParam('view', 'create');

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

const c = createStackNavigator({
    f: {
    screen: AuthenticateScreen(SettingsScreen),
    params: { view: 'Bye' },
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

const Tabs = createBottomTabNavigator({
    [ideaFeedsScreenName]: {
        screen: a,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <Icon name="format-list-bulleted" color={tintColor} size={24} /> 
            },
        }
    },
    [ideasScreenName]: {
        screen: b,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <Icon name="lightbulb-on" color={tintColor} size={24} />  
            },
        }
    },
    [settingsScreenName]:{
        screen: c,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <Icon name="logout" color={tintColor} size={24} /> 
            },
        }
    }
}, {
    defaultNavigationOptions: ({ navigation }) => {
        const routeName = navigation.getParam('view', 'ideas');

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
            tabBarOptions: {
                activeTintColor: generalStyles.defaultColor.color,
                inactiveTintColor: generalStyles.disabledColor.color,
                showLabel: false
            }
        }
    },
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
    headerMode: 'none',
})

const TabsNavigator = createBottomTabNavigator({
    [ideaFeedsScreenName]: {
        screen: AuthenticateScreen(IdeaFeedsScreen),
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
    [settingsScreenName]:{
        screen: AuthenticateScreen(SettingsScreen),
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

const AuthStack = createStackNavigator({
    TabsNavigator
},  {
    defaultNavigationOptions: ({ navigation }) => {
        const routeName = navigation.getParam('view', 'ideas');

        return {
            header: <Header
                    centerComponent={<Logo title={routeName} />}
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



const Root = createStackNavigator({
    AuthStack,
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
