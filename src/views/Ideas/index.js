import React, { Fragment } from "react";
import { connect } from 'react-redux';
import { View, ImageBackground } from "react-native";
import PropTypes from 'prop-types';

import Layout from "../../components/Layout";
import CustomButton from "../../components/CustomButton";
import Text from "../../components/CustomText";
import generalStyles from "../../components/generalStyles";
import homePageStyles from "./styles";
import { loginScreenName } from "../../helpers/defaults";
import { handleNavigation } from "../../helpers/utils";

const IdeasScreen = (props) => {
    const { utils: { fontLoaded }, navigation } = props;

    const renderScreen = () => {
        return (
            <View style={{}}>
                <Text fontLoaded={fontLoaded}>Your Ideas</Text>
            </View>
        );
    }

    return (
        // <Layout>
            <Fragment>
                
            {renderScreen()}
            </Fragment>
        // </Layout>
    );
}

IdeasScreen.propTypes = {
    // navigation: PropTypes.object.isRequired,
    utils: PropTypes.object.isRequired
};


export const mapStateToProps = ({ utils }) => ({ utils });

export default connect(mapStateToProps, {})(IdeasScreen);
