import React, { useEffect } from "react";
import { View, ImageBackground, ActivityIndicator } from "react-native";
import PropTypes from 'prop-types';

import Layout from "../../components/Layout";
import Text from "../../components/CustomText";
import generalStyles from "../../components/generalStyles";
import homePageStyles from "./styles";
import { loginScreenName, ideaFeedsScreenName } from "../../helpers/defaults";
import { handleNavigation, getUserDetails } from "../../helpers/utils";

const delayAuth = 2000;

const HomeScreen = (props) => {
    const { navigation } = props;

    useEffect(() => {
        setTimeout(() => {
            checkAuth();
        }, delayAuth);
    }, []);

    const checkAuth = async () => {
        const user = await getUserDetails();

        if (user.isAuthenticated) {
            handleNavigation(ideaFeedsScreenName);
        } else {
            handleNavigation(loginScreenName);
        }
    }

    const renderScreen = () => {
        return (
            <ImageBackground source={require('../../../assets/idea2.jpg')}
                style={homePageStyles.backgroundImage}
            >
                <View style={generalStyles.overlay}>
                    <View style={homePageStyles.content}>
                        <ActivityIndicator />
                        <View style={homePageStyles.introContainer}>
                            <Text customStyles={homePageStyles.intro}>Think</Text>
                            <Text customStyles={homePageStyles.intro}>Analyze</Text>
                            <Text customStyles={homePageStyles.intro}>Do</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        );
    }

    return (

            <Layout navigation={navigation}>
                {renderScreen()}
            </Layout>
    );
}

HomeScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default HomeScreen;
