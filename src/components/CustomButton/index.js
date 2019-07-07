import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types';

import buttonStyles from './styles';

const CustomButton = (props) => {
    const { 
        title, customStyles,
        customTextStyles, handleButtonPress
    } = props;
    
    return (
        <TouchableOpacity 
            style={[buttonStyles.button, customStyles]}
            onPress={handleButtonPress}
        >
            <View>
                <Text style={[buttonStyles.buttonText, customTextStyles]}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

CustomButton.propTypes = {
    title: PropTypes.string,
    customStyles: PropTypes.object,
    customTextStyles: PropTypes.object,
    handleButtonPress: PropTypes.func
};

CustomButton.defaultProps = {
    title: 'click here',
    customStyles: {},
    customTextStyles: {}
};

export default CustomButton;
