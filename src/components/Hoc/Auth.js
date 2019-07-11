import React, { Fragment, Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { ActivityIndicator, AsyncStorage } from 'react-native';

import Layout from "../Layout";
import { authenticateScreen, userDetails, fontLoader } from "../../helpers/utils";
import { logInUserSuccess, logInUserFailure } from '../../redux/actionCreators/userActions';
import { jwtKey } from '../../helpers/defaults';
import {
    loadFonts,
    loadFontsFailure,
    loadFontsSuccess
} from '../../redux/actionCreators/utilsActions';

export default function(Screen) {
    class AuthenticateScreen extends Component {
        state = {
            isAuthenticating: false
        }

        async componentWillMount() {
            this.props.navigation.addListener(
                'willFocus', async () => {
                    await authenticateScreen(this.props.navigation);
                }
            );
        }

        async componentDidMount() {
            const userData = await userDetails();
            // await AsyncStorage.removeItem(jwtKey);
            if (userData.isAuthenticated) {
                this.props.logInUserSuccess(userData);
            } else {
                this.props.logInUserFailure("invalid token");
            }
            // await this.loadFonts();
        }

        loadFonts = async () => {
            try {
                this.props.loadFonts(false);
                await fontLoader();
                this.props.loadFontsSuccess(true);
            } catch (error) {
                this.props.loadFontsFailure(false);
            }

        }

        render() {
            return (
                <Layout navigation={this.props.navigation}>
                    {this.state.isAuthenticating ?
                        <ActivityIndicator />
                        :
                        <Screen navigation={this.props.navigation} />
                    }
                </Layout>
            );
        }
    }

    AuthenticateScreen.propTypes = {
        navigation: PropTypes.object.isRequired,
        loadFonts: PropTypes.func.isRequired,
        loadFontsSuccess: PropTypes.func.isRequired,
        loadFontsFailure: PropTypes.func.isRequired,
        logInUserSuccess: PropTypes.func.isRequired,
        logInUserFailure: PropTypes.func.isRequired,
    };

    const actionCreators = {
        loadFonts,
        loadFontsSuccess,
        loadFontsFailure,
        logInUserSuccess,
        logInUserFailure
    };

    return connect('', actionCreators)(AuthenticateScreen);
}
