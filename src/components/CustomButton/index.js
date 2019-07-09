import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Button } from 'react-native-elements';

import PropTypes from 'prop-types';

import buttonStyles from './styles';

const CustomButton = (props) => {
    const { 
        title, customStyles,
        customTextStyles, handleButtonPress,
        icon
    } = props;
    
    return (
        <Button 
            buttonStyle={customStyles}
            onPress={handleButtonPress}
            title={title}
            titleStyle={{ textTransform: 'capitalize', ...customTextStyles }}
            icon={icon}
        />
    );
}

CustomButton.propTypes = {
    title: PropTypes.string,
    customStyles: PropTypes.object,
    customTextStyles: PropTypes.object,
    handleButtonPress: PropTypes.func,
    icon: PropTypes.func
};

CustomButton.defaultProps = {
    title: 'click here',
    customStyles: {},
    customTextStyles: {},
};

export default CustomButton;
