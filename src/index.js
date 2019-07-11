import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

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
            <Routes ref={nav => {
                navigator = nav; }}
            />
        </Provider>
    );
}

export default App;
