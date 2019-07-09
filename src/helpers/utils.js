import * as Font from 'expo-font';

export const fontLoader = () => {
    return Font.loadAsync({
        'vince': require('../../assets/fonts/vinchand.ttf'),
    });
}
