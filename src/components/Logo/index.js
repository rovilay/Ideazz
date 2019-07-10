import React, { useState, useEffect } from "react";
import { withNavigation } from 'react-navigation';

import { handleNavigation } from "../../helpers/utils"; 
import LinkText from '../LinkText/index';
import logoStyles from './style';

const Logo = (props) => {
    return (
        <LinkText fontLoaded={props.fontLoaded}
            customStyles={logoStyles.title}
            onPress={() => handleNavigation(props.navigation, 'Home')}
        >
            IDEAS
        </LinkText>
    );
}

export default withNavigation(Logo);
