import * as Font from 'expo-font';

export const fontLoader = () => {
    return Font.loadAsync({
        'vince': require('../../assets/fonts/vinchand.ttf'),
    });
}

export const handleNavigation = (navigationProp, pageName) => {
    const { navigate } = navigationProp;
    return navigate(pageName);
}
