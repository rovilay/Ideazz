import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { MenuProvider } from 'react-native-popup-menu';

import * as NavigationService from './services/NavigationService';
import store from './redux/store';
import Routes from './routes';

const App = () => {
    let navigator;

    useEffect(() => {
        NavigationService.setNavigator(navigator);
    }, []);

    return ( 
        <Provider store = {store}>
            <MenuProvider>
                <Routes ref={nav => {
                    navigator = nav; }}
                />
            </MenuProvider>
        </Provider>
    );
}

export default App;
