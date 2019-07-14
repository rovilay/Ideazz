import React from 'react';
import Hyperlink from 'react-native-hyperlink';

import Text from '../CustomText';
import PropTypes from 'prop-types';

const LinkText = (props) => {
    const { 
        fontLoaded, customStyles,
        children, onPress
    } = props;

    const renderText = () => {
        return (
            <Hyperlink {...props} onPress={onPress}>
                <Text {...props} customStyles={customStyles}
                    fontLoaded={fontLoaded}
                >
                    {children}
                </Text>
            </Hyperlink>
        );
    }
    
    return renderText();
}

LinkText.propTypes = {
    fontLoaded: PropTypes.bool,
    customStyles: PropTypes.object,
    onPress: PropTypes.func
};

LinkText.defaultProps = {
    fontLoaded: false,
    customStyles: {},
    onPress: () => {}
};

export default LinkText;