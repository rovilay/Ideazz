import React from 'react';
import { Text } from 'react-native';

import PropTypes from 'prop-types';

const CustomText = (props) => {
    const { 
        fontLoaded, customStyles,
        children
    } = props;
    
    const renderText = () => {
        if (fontLoaded) {
            return (
                <Text {...props} style={{ ...customStyles }}>
                    {children}
                </Text>
            );
        }

        return null;
    }
    
    return renderText();
}

CustomText.propTypes = {
    fontLoaded: PropTypes.bool,
    customStyles: PropTypes.object,
};

CustomText.defaultProps = {
    fontLoaded: true,
    customStyles: {},
};

export default CustomText;
