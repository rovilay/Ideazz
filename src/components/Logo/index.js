import React from "react";
import PropTypes from 'prop-types';

import LinkText from '../LinkText/index';
import logoStyles from './style';

const Logo = (props) => {
    return (
        <LinkText fontLoaded={props.fontLoaded}
            customStyles={{ ...logoStyles.title, ...props.customStyles }}
        >
            {props.title}
        </LinkText>
    );
}

Logo.propTypes = {
    fontLoaded: PropTypes.bool,
    title: PropTypes.string,
    customStyles: PropTypes.object
}

Logo.defaultProps = {
    fontLoaded: true,
    title: '',
    customStyles: {}
}

export default Logo;
