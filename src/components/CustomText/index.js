import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import { FontContext } from '../FontLoader';

const CustomText = (props) => {
    const { customStyles, children } = props;
    
    const renderText = () => {
        return (
            <FontContext.Consumer>
                {
                    (fontLoaded) => {
                        if (fontLoaded) {
                            return (
                                <Text {...props} style={customStyles}>
                                    {children}
                                </Text>
                            );
                        }

                        return null;
                    }
                }
            </FontContext.Consumer>
        );
    }
    
    return renderText();
}

CustomText.propTypes = {
    customStyles: PropTypes.object,
};

CustomText.defaultProps = {
    customStyles: {},
};

export default CustomText;
