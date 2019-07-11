import React, { Fragment, Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { ActivityIndicator } from 'react-native';

import Layout from "../Layout";
import { authenticateScreen, userDetails, fontLoader } from "../../helpers/utils";
import { postUserDataSuccess, postUserDataFailure } from '../../redux/actionCreators/userActions';
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
            if (userData.isAuthenticated) {
                this.props.postUserDataSuccess(userData);
            } else {
                this.props.postUserDataFailure("invalid token");
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
        postUserDataSuccess: PropTypes.func.isRequired,
        postUserDataFailure: PropTypes.func.isRequired,
    };

    const actionCreators = {
        loadFonts,
        loadFontsSuccess,
        loadFontsFailure,
        postUserDataSuccess,
        postUserDataFailure
    };

    return connect('', actionCreators)(AuthenticateScreen);
}
