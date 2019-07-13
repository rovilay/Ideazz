import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { Header } from "react-native-elements";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fontLoader, authenticateScreen } from "../../helpers/utils"; 
import Logo from '../Logo/index';
import layoutStyle from "./styles";
import Hamburger from "../Hamburger";
import {
    loadFonts,
    loadFontsFailure,
    loadFontsSuccess
} from '../../redux/actionCreators/utilsActions';

const Layout = (props) => {
    const { children, utils: { fontLoaded }, navigation } = props;

    useEffect(() => {
        const loadFonts = async () => {
            try {
                props.loadFonts(false);
                await fontLoader();
                props.loadFontsSuccess(true);
            } catch (error) {
                props.loadFontsFailure(false);
            }
        }

        loadFonts();
    }, []);

    return (
        <View style={layoutStyle.container}>
            {fontLoaded ?
                <React.Fragment>
                    <Header
                        // placement="left"
                        centerComponent={<Logo 
                            fontLoaded={fontLoaded} 
                        />}
                        // rightComponent={<Hamburger fontLoaded={fontLoaded} />}
                        statusBarProps={{ barStyle: 'light-content' }}
                        containerStyle={layoutStyle.header}
                    />
                    <View style={layoutStyle.content}>
                        {children}
                    </View>
                </React.Fragment> : <ActivityIndicator />
            }

        </View>
    );
}

Layout.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export const mapStateToProps = ({ utils }) => ({ utils });

const actionCreators = {
    loadFonts,
    loadFontsSuccess,
    loadFontsFailure
};

export default connect(mapStateToProps, actionCreators)(Layout);
