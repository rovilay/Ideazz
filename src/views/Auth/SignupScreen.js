import React from "react";
import { View, Text } from "react-native";
import authPagesStyles from "./styles";

const SignupScreen = () => {
    return (
        <View style={authPagesStyles.container}>
            <Text style={authPagesStyles.title}>Signup Page</Text>
        </View>
    );
}

export default SignupScreen;
