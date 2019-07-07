import React from "react";
import { View, Text } from "react-native";
import { Header } from 'react-native-elements';

import CustomButton from '../../components/CustomButton';
import homePageStyles from "./styles";

const HomeScreen = (props) => {
    const handleLoginButton = () => {
        const { navigate } = props.navigation;

        return navigate('Signup');
    }

    return (
        <View style={homePageStyles.container}>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
            <Text style={homePageStyles.title}>Welcome to Ideazz!</Text>
            <CustomButton
                title="touch here"
                handleButtonPress={handleLoginButton}
            />
        </View>
    );
}

export default HomeScreen;
