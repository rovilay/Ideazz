import React, { Fragment, useState, useEffect } from "react";
import { connect } from 'react-redux';
import { View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import PropTypes from 'prop-types';

import { handleNavigation, getAuthPageAttributes } from "../../helpers/utils";
import Text from "../../components/CustomText";
import Layout from '../../components/Layout';
import authPagesStyles from "./styles";
import generalStyles from "../../components/generalStyles";
import { emailRegx, nameRegx, signupScreenName, loginScreenName } from "../../helpers/defaults";
import LinkText from '../../components/LinkText';
import { signUpUser, logInUser } from '../../redux/actionCreators/userActions';

const AuthScreen = (props) => {
    const { 
        utils: { fontLoaded }, navigation, 
        isLoading, signUpUser, logInUser,
        authError
    } = props;
    
    const { routeName } = navigation.state;
    const [formFields, setFormFields] = useState({
        name: {
            valid: false,
            value: '',
            errorMessage: ''
        },
        email: {
            valid: false,
            value: '',
            errorMessage: ''
        },
        password: {
            valid: false,
            value: '',
            errorMessage: ''
        },
        confirmPassword: {
            valid: false,
            value: '',
            errorMessage: ''
        }
    });

    const validateNameField = (value) => {
        const text = value.trimLeft();
        const nameField = {
            ...formFields.name,
            value: text
        };

        if (!text) {
            nameField.valid = false;
            nameField.errorMessage = 'name is required';
        } else if (!nameRegx.test(text)) {
            nameField.valid = false;
            nameField.errorMessage = "name can only contain letters and/or '-'";
        } else {
            nameField.valid = true;
            nameField.errorMessage = '';
        }

        setFormFields({
            ...formFields,
            name: nameField
        });
    };

    const validateEmailField = (value) => {
        const text = value.trim();
        const emailField = {
            ...formFields.email,
            value: text
        };

        if (!text) {
            emailField.valid = false;
            emailField.errorMessage = 'email is required';
        } else if (!emailRegx.test(text)) {
            emailField.valid = false;
            emailField.errorMessage = "email is invalid";
        } else {
            emailField.valid = true;
            emailField.errorMessage = '';
        }

        setFormFields({
            ...formFields,
            email: emailField
        });
    };

    const validatePasswordField = (value) => {
        const text = value;
        const passwordField = {
            ...formFields.password,
            value: text,
            valid: !!text
        };

        if (routeName === signupScreenName) {
            const confirmPasswordField = {
                ...formFields.confirmPassword
            };
    
            if (!text) {
                passwordField.valid = false;
                passwordField.errorMessage = 'password is required';
                confirmPasswordField.valid = false;
                confirmPasswordField.errorMessage = 'password is required';
    
            } else if (text.length < 7 || 
                text !== formFields.confirmPassword.value
            ) {
                passwordField.valid = false;
                passwordField.errorMessage = "password is invalid";
                confirmPasswordField.valid = false;
                confirmPasswordField.errorMessage = "password is invalid";
    
            } else {
                passwordField.valid = true;
                passwordField.errorMessage = "";
                confirmPasswordField.valid = true;
                confirmPasswordField.errorMessage = "";
            }
    
            setFormFields({
                ...formFields,
                password: passwordField,
                confirmPassword: { 
                    ...formFields.confirmPassword, 
                    ...confirmPasswordField 
                },
            });
        } else {
            setFormFields({
                ...formFields,
                password: passwordField
            });
        }
    };

    const validateConfirmPasswordField = (value) => {
        const text = value;
        const confirmPasswordField = {
            ...formFields.confirmPassword,
            value: text
        };

        const passwordField = {
            ...formFields.password
        };

        if (!text) {
            confirmPasswordField.valid = false;
            confirmPasswordField.errorMessage = 'password is required';
            passwordField.valid = false;
            passwordField.errorMessage = 'password is required';
        } else if (text.length < 7 || 
            formFields.password.value !== text
        ) {
            confirmPasswordField.valid = false;
            confirmPasswordField.errorMessage = "password is invalid";
            passwordField.valid = false;
            passwordField.errorMessage = "password is invalid";
        } else {
            confirmPasswordField.valid = true;
            confirmPasswordField.errorMessage = '';
            passwordField.valid = true;
            passwordField.errorMessage = "";
        }

        setFormFields({
            ...formFields,
            password: { 
                ...formFields.password, 
                ...passwordField 
            },
            confirmPassword: confirmPasswordField
        });
    };

    const {
        pageTitle, otherAuth, promptMsg, currentAuth 
    } = getAuthPageAttributes(routeName);
    
    const handlePromptClick = () => {
        handleNavigation(props.navigation, otherAuth);
    };

    const disableSubmit = () => {
        let disable = isLoading || !formFields.password.valid || !formFields.email.valid;
        if (!disable && routeName === signupScreenName) {
            disable = !formFields.confirmPassword.valid || !formFields.name.valid;
        }

        return disable;
    }

    const handleFormSubmit = () => {
        const userData = {
            name: formFields.name.value,
            email: formFields.email.value,
            password: formFields.password.value,
        }

        if (currentAuth === signupScreenName) {
            return signUpUser(userData);
        }
            
        logInUser(userData);
    }

    const pagePostion = currentAuth === signupScreenName ? '10%' : '30%';

    const renderForm = () => {
        return (
            <View style={{ ...authPagesStyles.formContainer, marginTop: pagePostion }}>
                <Text fontLoaded={fontLoaded} 
                    customStyles={authPagesStyles.title}
                >
                    {pageTitle}
                </Text>
                <View style={authPagesStyles.form}>
                    {authError.state &&
                        <Text fontLoaded={fontLoaded} 
                            customStyles={{ ...authPagesStyles.error, paddingLeft: 10 }}
                        >
                            {authError.message}
                        </Text>
                    }
                    <Fragment>
                        {routeName === signupScreenName &&
                            <Input
                                placeholder='Full Name'
                                leftIcon={
                                    <Icon
                                        name='user'
                                        size={24}
                                        color={generalStyles.defaultColor.color}
                                    />
                                }
                                inputContainerStyle={authPagesStyles.formInputContainer}
                                inputStyle={authPagesStyles.formInput}
                                leftIconContainerStyle={{ marginRight: 10 }}
                                onChangeText={validateNameField}
                                selectionColor={generalStyles.defaultColor.color}
                                textContentType="name"
                                errorMessage={formFields.name.errorMessage}
                                errorStyle={authPagesStyles.error}
                                value={formFields.name.value}
                                autoCapitalize="none"
                                editable={!isLoading}
                            />
                        }
                    </Fragment>
                    <Input
                        placeholder='Email'
                        leftIcon={
                            <Icon
                                name='envelope'
                                size={24}
                                color={generalStyles.defaultColor.color}
                            />
                        }
                        inputContainerStyle={{
                            borderColor: generalStyles.defaultColor.color,
                            borderWidth: 1,
                            width: '100%',
                            borderRadius: 4,
                            borderStyle: 'solid',
                            paddingTop: 14,
                            paddingRight: 5,
                            paddingBottom: 14,
                            paddingLeft: 5,
                            marginTop: 10
                        }}
                        inputStyle={{
                            fontFamily: 'vince',
                            fontSize: 24
                        }}
                        leftIconContainerStyle={{
                            marginRight: 10,
                        }}
                        onChangeText={validateEmailField}
                        selectionColor={generalStyles.defaultColor.color}
                        textContentType="emailAddress"
                        errorMessage={formFields.email.errorMessage}
                        errorStyle={authPagesStyles.error}
                        value={formFields.email.value}
                        editable={!isLoading}
                        autoCapitalize="none"
                    />
                    <Input
                        placeholder='Password'
                        leftIcon={
                            <Icon
                                name='lock'
                                size={30}
                                color={generalStyles.defaultColor.color}
                            />
                        }
                        inputContainerStyle={authPagesStyles.formInputContainer}
                        inputStyle={authPagesStyles.formInput}
                        leftIconContainerStyle={{ marginRight: 15 }}
                        onChangeText={validatePasswordField}
                        secureTextEntry={true}
                        selectionColor={generalStyles.defaultColor.color}
                        textContentType="password"
                        errorMessage={formFields.password.errorMessage}
                        errorStyle={authPagesStyles.error}
                        value={formFields.password.value}
                        autoCapitalize="none"
                        editable={!isLoading}
                    />
                    <Fragment>
                        {routeName === 'Signup' &&
                            <Input
                                placeholder='Confirm Password'
                                leftIcon={
                                    <Icon
                                        name='lock'
                                        size={30}
                                        color={generalStyles.defaultColor.color}
                                    />
                                }
                                inputContainerStyle={authPagesStyles.formInputContainer}
                                inputStyle={authPagesStyles.formInput}
                                leftIconContainerStyle={{ marginRight: 15 }}
                                onChangeText={validateConfirmPasswordField}
                                selectionColor={generalStyles.defaultColor.color}
                                textContentType="password"
                                secureTextEntry={true}
                                errorMessage={formFields.confirmPassword.errorMessage}
                                errorStyle={authPagesStyles.error}
                                value={formFields.confirmPassword.value}
                                autoCapitalize="none"
                                editable={!isLoading}
                            />
                        }
                    </Fragment>
                </View>
                <Button
                    title="submit"
                    containerStyle={authPagesStyles.formButtonContainer}
                    buttonStyle={authPagesStyles.formButton}
                    titleStyle={authPagesStyles.formButtonText}
                    disabled={disableSubmit()}
                    disabledStyle={{
                        backgroundColor: generalStyles.disabledColor.color
                    }}
                    disabledTitleStyle={{
                        color: generalStyles.whiteColor.color
                    }}
                    onPress={handleFormSubmit}
                    loading={isLoading}
                    loadingStyle={authPagesStyles.formButton}
                />
                <LinkText fontLoaded={fontLoaded}
                    customStyles={authPagesStyles.prompt}
                    onPress={handlePromptClick}
                >
                    {promptMsg}
                </LinkText>
            </View>
        );
    }

    return (
        <Layout navigation={navigation}>
            <View style={authPagesStyles.container}>
                {renderForm()}
            </View>
        </Layout>
    );
}

AuthScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
    utils: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    signUpUser: PropTypes.func.isRequired,
    logInUser: PropTypes.func.isRequired,
    authError: PropTypes.object.isRequired
};

export const mapStateToProps = ({ utils, auth }) => ({ 
    utils,
    isLoading: auth.isLoading,
    authError: auth.errors,
});

const mapDispatchToProps = {
    signUpUser,
    logInUser
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);
