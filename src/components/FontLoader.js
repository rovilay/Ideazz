import React, { useState, useEffect, createContext } from "react";
import PropTypes from 'prop-types';

import { fontLoader } from "../helpers/utils"; 
import { ActivityIndicator } from 'react-native';

export const FontContext = createContext(false);

const FontProvider = (props) => {
    const [fontLoaded, setFontLoaded] = useState(false);
    const { children } = props;

    useEffect(() => {

        const loadFonts = async () => {
            try {
                await fontLoader();
                setFontLoaded(true);
            } catch (error) {
                setFontLoaded(false);
            }
        }

        loadFonts();
    }, []);

    return (
        <FontContext.Provider value={fontLoaded}>
            {fontLoaded ?
                children
                :
                <ActivityIndicator />
            }
            {/* {children} */}
        </FontContext.Provider>
    );
}

export default FontProvider;
