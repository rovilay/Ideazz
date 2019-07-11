import React, { Fragment, Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { ActivityIndicator, AsyncStorage } from 'react-native';

import Layout from "../Layout";
import { authenticateScreen, userDetails, fontLoader } from "../../helpers/utils";
import { signUpUserSuccess, signUpUserFailure } from '../../redux/actionCreators/userActions';
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
                this.props.signUpUserSuccess(userData);
            } else {
                this.props.signUpUserFailure("invalid token");
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
        signUpUserSuccess: PropTypes.func.isRequired,
        signUpUserFailure: PropTypes.func.isRequired,
    };

    const actionCreators = {
        loadFonts,
        loadFontsSuccess,
        loadFontsFailure,
        signUpUserSuccess,
        signUpUserFailure
    };

    return connect('', actionCreators)(AuthenticateScreen);
}
