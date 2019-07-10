import React from "react";
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import LinkText from '../LinkText/index';
import logoStyles from './style';
import generalStyles from '../generalStyles';

const Hamburger = (props) => {
    return (
        <LinkText fontLoaded={props.fontLoaded}
            customStyles={logoStyles.title}
            onPress={() => props.navigation.openDrawer()}
        >
            <Icon
                name='bars'
                size={24}
                color={generalStyles.whiteColor.color}
            />
        </LinkText>
    );
}

export default withNavigation(Hamburger);
