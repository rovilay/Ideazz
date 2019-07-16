import React, { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import layoutStyle from "./styles";
import {
    loadFonts,
    loadFontsFailure,
    loadFontsSuccess
} from '../../redux/actionCreators/utilsActions';
import * as NavigationService from '../../services/NavigationService';
import { FontContext } from '../FontLoader';

const Layout = (props) => {
    const { children, navigation } = props;

    useEffect(() => {
        NavigationService.setNavigator(navigation);
    }, []);

    return (
        <View style={layoutStyle.container}>
            <FontContext.Consumer>
                {
                    (fontLoaded) => {
                        if (fontLoaded) {
                            return (
                                <View style={layoutStyle.content}>
                                    {children}
                                </View>
                            );
                        }

                        return <ActivityIndicator />;
                    }
                }
            </FontContext.Consumer>
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
