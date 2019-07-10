import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { Header } from "react-native-elements";
import { withNavigation } from 'react-navigation';

import { fontLoader } from "../../helpers/utils"; 
import Logo from '../Logo/index';
import layoutStyle from "./styles";

const Layout = (props) => {
    const { children, navigation } = props;
    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        const loadFonts = async () => {
            await fontLoader();

            setFontLoaded(true);
        }

        loadFonts();
    }, []);

    return (
        <View style={layoutStyle.container}>
            {fontLoaded ?
                <React.Fragment>
                    <Header
                        placement="left"
                        centerComponent={<Logo 
                            fontLoaded={fontLoaded} 
                        />}
                        rightComponent={{ icon: 'menu', color: '#fff' }}
                        statusBarProps={{ barStyle: 'light-content' }}
                        containerStyle={layoutStyle.header}
                    />
                    <View style={layoutStyle.content}>
                        {children}
                    </View>
                </React.Fragment> : <ActivityIndicator />
            }

        </View>
    );
}

export default Layout;