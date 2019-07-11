import React, { Fragment, useState, useEffect } from "react";
import { connect } from 'react-redux';
import { View, AsyncStorage } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import PropTypes from 'prop-types';

import { handleNavigation } from "../../helpers/utils";
import settingsPageStyles from "./styles";
import { jwtKey, homeScreenName } from "../../helpers/defaults";
import { postUserData, logOutUser } from '../../redux/actionCreators/userActions';

const SettingsScreen = (props) => {
    const { 
        utils: { fontLoaded }, navigation, 
        isLoading, postUserData, logOutUser
    } = props;
    
    const { routeName } = navigation.state;

    const handleLogOut = async () => {
        await AsyncStorage.removeItem(jwtKey);
        logOutUser();
        handleNavigation(navigation, homeScreenName);
    }

    const renderView = () => {
        return (
            <Fragment>
                <Button
                    title="Log out"
                    containerStyle={settingsPageStyles.formButtonContainer}
                    buttonStyle={settingsPageStyles.formButton}
                    titleStyle={settingsPageStyles.formButtonText}
                    onPress={handleLogOut}
                />
            </Fragment>
        );
    }

    return (
        // <Layout navigation={navigation}>
            <View style={settingsPageStyles.container}>
                {renderView()}
            </View>
        // </Layout>
    );
}

SettingsScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
    utils: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    postUserData: PropTypes.func.isRequired,
    logOutUser: PropTypes.func.isRequired,
};

export const mapStateToProps = ({ utils, auth }) => ({ 
    utils,
    isLoading: auth.isLoading 
});
const mapDispatchToProps = {
    postUserData,
    logOutUser
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
