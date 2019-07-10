import * as Font from 'expo-font';
import { loginScreenName, signupScreenName } from './defaults';

export const fontLoader = () => {
    return Font.loadAsync({
        'vince': require('../../assets/fonts/vinchand.ttf'),
    });
}

export const handleNavigation = (navigationProp, pageName) => {
    const { navigate } = navigationProp;
    return navigate(pageName);
}

export const getAuthPageAttributes = (routeName) => {
    let pageTitle = "log in";
    let currentAuth = loginScreenName;
    let otherAuth = signupScreenName;
    let promptMsg = "don't have an account? Sign up";

    if (routeName === signupScreenName) {
        pageTitle = "sign up";
        currentAuth = signupScreenName;
        otherAuth = loginScreenName;
        promptMsg = "already have an account? Log in"
    }

    return { pageTitle, currentAuth, otherAuth, promptMsg };
}
