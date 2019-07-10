import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Card } from 'react-native-elements';

import { fontLoader } from "../../helpers/utils";
import authPagesStyles from "./styles";

const SignupScreen = (props) => {
    const {
        placeholder, containerStyle,
        inputContainerStyle, errorMessage,
        errorStyle, errorProps, inputComponent,
        inputStyle, label, labelStyle, labelProps,
        leftIcon, leftIconContainerStyle,
    } = props;
    const renderView = () => {
        if (fontLoaded) {
            return (
                        <Input
                            placeholder='Full Name'
                            leftIcon={
                                <Icon
                                    name='user-o'
                                    size={24}
                                    color='red'
                                />
                            }
                            inputContainerStyle={{
                                borderColor: 'red',
                                borderWidth: 1,
                                width: '100%',
                                borderRadius: 4,
                                borderStyle: 'solid',
                                paddingTop: 14,
                                paddingRight: 5,
                                paddingBottom: 14,
                                paddingLeft: 5,
                            }}
                            leftIconContainerStyle={{
                                marginRight: 10,
                            }}
                        />
            );
        }

        return <ActivityIndicator />
    }

    return (
        <View>
            {renderView()}
        </View>
    );
}

export default SignupScreen;
