import React, { Fragment, useState, useEffect } from "react";
import { connect } from 'react-redux';
import { View } from "react-native";
import { Input, Button, Slider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

import Text from "../../components/CustomText";
import generalStyles from "../../components/generalStyles";
import ideasScreenStyles from "./styles";
import { 
    confidenceRatingTitle, easeRatingTitle, createIdeaScreenName,
    impactRatingTitle, minimumRating, maximumRating, updateIdeaScreenName
} from "../../helpers/defaults";
import { 
    createIdea, updateIdea,
    removeIdeaOnFocus 
} from '../../redux/actionCreators/ideaActions';

const IdeasScreen = (props) => {
    const {
        ideaOnFocus, updateIdea, isLoading,
        navigation, removeIdeaOnFocus
    } = props;

    const initialFormState = {
        title: {
            valid: false,
            value: ideaOnFocus.title || '',
            errorMessage: ''
        },
        confidence: {
            valid: true,
            value: ideaOnFocus.confidence || 1,
            errorMessage: ''
        },
        ease: {
            valid: true,
            value: ideaOnFocus.ease || 1,
            errorMessage: ''
        },
        impact: {
            valid: true,
            value: ideaOnFocus.impact || 1,
            errorMessage: ''
        },
    };

    const [ideaForm, setIdeaForm] = useState(initialFormState);
    const [view, setView] = useState(createIdeaScreenName);

    const willBlurEvent = navigation.addListener('willBlur', () => {
        removeIdeaOnFocus();
    });

    const willFocusEvent = navigation.addListener('willFocus', () => {
        setView(navigation.getParam('view', createIdeaScreenName));
        setIdeaForm(initialFormState);
    });

    useEffect(() => {
        // remove event listener when component unmount
        return () => {
            willBlurEvent.remove();
            willFocusEvent.remove();
        }
    }, []);

    const handleFormChange = (value, field) => {
        const confirmField = {
            ...ideaForm[field],
            value,
            valid: !!value,
        };

        if (!confirmField.valid) {
            confirmField.errorMessage = `${field} is required`;
        } else {
            confirmField.errorMessage = ''
        }

        if (view === updateIdeaScreenName &&
            field !== 'title' && ideaForm.title.value &&
            !ideaForm.title.valid
            ) {
                ideaForm.title.valid = true;
            }

        setIdeaForm({
            ...ideaForm,
            [field]: confirmField 
        });
    }

    const disableSubmit = () => {
        const { title, confidence, ease, impact } = ideaForm;
        const disable =  isLoading || !title.valid ||
            !confidence.valid || !ease.valid || !impact.valid;

        return disable;
    }

    const handleFormSubmit = () => {
        const idea = {
            title: ideaForm.title.value,
            confidence: ideaForm.confidence.value,
            ease: ideaForm.ease.value,
            impact: ideaForm.impact.value,
        }

        if (view === createIdeaScreenName) {
            createIdea(idea);
        } else {
            updateIdea(ideaOnFocus.id, idea);
        }
    }

    const renderRatingSlider = (rating) => {
        return (
            <View style={ideasScreenStyles.rating}>
                <View>
                    <Text customStyles={ideasScreenStyles.title}>
                        {rating}: {ideaForm[rating].value}
                    </Text>
                </View>
                <View style={ideasScreenStyles.slider}
                >
                    <Slider
                        value={ideaForm[rating].value}
                        onSlidingComplete={value => handleFormChange(value, rating)}
                        step={1}
                        minimumValue={minimumRating}
                        maximumValue={maximumRating}
                        minimumTrackTintColor={generalStyles.defaultColor.color}
                        maximumTrackTintColor={generalStyles.disabledColor.color}
                        thumbTintColor={generalStyles.defaultColor.color}
                    />
                </View>
            </View>
        );
    }

    const renderTitleInput = () => {
        return (
            <View>
                <Input
                    placeholder="title"
                    leftIcon={
                        <Icon
                            name="lightbulb-on"
                            size={24}
                            color={generalStyles.defaultColor.color}
                        />
                    }
                    inputContainerStyle={ideasScreenStyles.formInputContainer}
                    inputStyle={ideasScreenStyles.formInput}
                    leftIconContainerStyle={{ marginRight: 10 }}
                    onChangeText={value => handleFormChange(
                        value, "title")}
                    selectionColor={generalStyles.defaultColor.color}
                    textContentType="name"
                    errorMessage={ideaForm.title.errorMessage}
                    errorStyle={ideasScreenStyles.error}
                    value={ideaForm.title.value}
                    autoCapitalize="none"
                    editable={!isLoading}
                />
            </View>
        );
    }

    const renderRatings = () => {
        return (
            <View style={ideasScreenStyles.ratings}>
                {renderRatingSlider(confidenceRatingTitle)}
                {renderRatingSlider(easeRatingTitle)}
                {renderRatingSlider(impactRatingTitle)}
            </View>
        );
    }

    const renderFormButton = () => {
        return (
            <Button
                title={view}
                containerStyle={ideasScreenStyles.formButtonContainer}
                buttonStyle={ideasScreenStyles.formButton}
                titleStyle={ideasScreenStyles.formButtonText}
                disabled={disableSubmit()}
                disabledStyle={{
                    backgroundColor: generalStyles.disabledColor.color
                }}
                disabledTitleStyle={{
                    color: generalStyles.whiteColor.color
                }}
                onPress={handleFormSubmit}
                loading={isLoading}
                loadingStyle={ideasScreenStyles.formButton}
            />
        );
    }
    const renderForm = () => {
        return (
            <View style={{ ...ideasScreenStyles.formContainer, marginTop: "10%" }}>
                {renderTitleInput()}
                {renderRatings()}
                {renderFormButton()}
            </View>
        );
    }

    return (
        <View style={ideasScreenStyles.container}> 
            {renderForm()}
        </View>
    );
}

IdeasScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
    utils: PropTypes.object.isRequired,
    ideaOnFocus: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    createIdea: PropTypes.func.isRequired,
    updateIdea: PropTypes.func.isRequired,
    removeIdeaOnFocus: PropTypes.func.isRequired,
};

export const mapStateToProps = ({ idea, utils }) => ({ 
    utils,
    ideaOnFocus: idea.ideaOnFocus,
    isLoading: idea.isLoading
});

const mapDispatchToProps = {
    createIdea,
    updateIdea,
    removeIdeaOnFocus
};

export default connect(mapStateToProps, mapDispatchToProps)(IdeasScreen);
