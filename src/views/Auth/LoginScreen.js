import React, { useState, useEffect } from "react";
import { View, ImageBackground, Overlay, ActivityIndicator } from "react-native";

import { fontLoader } from "../../helpers/utils";
import Text from "../../components/CustomText";
import Layout from '../../components/Layout';

const LoginScreen = (props) => {
    const [fontLoaded, setFontLoaded] = useState(false);

    const handleSignupButton = () => {
        const { navigate } = props.navigation;
        return navigate('Login');
    }

    useEffect(() => {
        const loadFonts = async () => {
            await fontLoader();

            setFontLoaded(true);
        }

        loadFonts();
    }, []);

    return (
        <Layout>
            <View>
                <Text fontLoaded={fontLoaded}>
                    Login Screen
                </Text>
            </View>
        </Layout>
    );
}

export default LoginScreen;
