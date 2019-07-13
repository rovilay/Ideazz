import React, { Fragment } from "react";
import { connect } from 'react-redux';
import { View, ImageBackground } from "react-native";
import PropTypes from 'prop-types';

import CustomButton from "../../components/CustomButton";
import Text from "../../components/CustomText";
import generalStyles from "../../components/generalStyles";
import homePageStyles from "./styles";
import { loginScreenName } from "../../helpers/defaults";
import { handleNavigation } from "../../helpers/utils";

const HomeScreen = (props) => {
    const { utils: { fontLoaded }, navigation} = props;

    const handleLoginButton = () => {
        handleNavigation(navigation, loginScreenName);
    };

    const renderScreen = () => {
        return (
            <ImageBackground source={require('../../../assets/idea2.jpg')}
                style={homePageStyles.backgroundImage}
            >
                <View style={generalStyles.overlay}>
                    <View style={homePageStyles.content}>
                        <View style={{ 
                            marginBottom: 10, marginTop: 0, borderWidth: 0,
                            borderColor: 'red',
                            width: '100%', alignItems: 'flex-end',
                            padding: 10
                        }}>
                            <Text fontLoaded={fontLoaded} 
                                customStyles={homePageStyles.intro}>Think</Text>
                            <Text fontLoaded={fontLoaded} 
                                customStyles={homePageStyles.intro}>Analyze</Text>
                            <Text fontLoaded={fontLoaded} 
                                customStyles={homePageStyles.intro}>Do</Text>
                        </View>
                        <View style={{ padding: 10 }}>
                            <CustomButton
                                title="Log in"
                                handleButtonPress={handleLoginButton}
                                customStyles={{
                                    alignSelf: 'flex-end',
                                    justifyContent: 'center', padding: 5, 
                                    paddingLeft: 30, paddingRight: 30,
                                }}
                                customTextStyles={{  
                                    textAlign: 'center', fontFamily: 'vince',
                                    fontSize: 24
                                }}
                            />
                        </View>
                    </View>
                </View>
            </ImageBackground>
        );
    }

    return (
            <Fragment>
                {renderScreen()}
            </Fragment>
    );
}

HomeScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
    utils: PropTypes.object.isRequired
};


export const mapStateToProps = ({ utils }) => ({ utils });

export default connect(mapStateToProps, {})(HomeScreen);
