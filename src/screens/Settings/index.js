import React, { Fragment } from "react";
import { connect } from 'react-redux';
import axios from 'axios';
import { View, AsyncStorage } from "react-native";
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';

import { handleNavigation } from "../../helpers/utils";
import settingsPageStyles from "./styles";
import { jwtKey, loginScreenName } from "../../helpers/defaults";
import { signUpUser, logOutUser } from '../../redux/actionCreators/userActions';

const SettingsScreen = (props) => {
    const { logOutUser } = props;
    
    const handleLogOut = async () => {
        await AsyncStorage.removeItem(jwtKey);
        axios.defaults.headers.common['Authorization'] = '';
        logOutUser();
        handleNavigation(loginScreenName);
    }

    const renderScreen = () => {
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
        <View style={settingsPageStyles.container}>
            {renderScreen()}
        </View>
    );
}

SettingsScreen.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    signUpUser: PropTypes.func.isRequired,
    logOutUser: PropTypes.func.isRequired,
};

export const mapStateToProps = ({ auth }) => ({ 
    isLoading: auth.isLoading 
});
const mapDispatchToProps = {
    signUpUser,
    logOutUser
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
