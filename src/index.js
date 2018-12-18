import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import './styles/styles.css'; // webpack can import CSS files!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
// create instance of store
// you could set the initial state here, it would override the reducer courseReducer
const store = configureStore();
render(
    // Provider attaches redux store to container components
    <Provider store={store}>
        // access to push history
        <Router history={browserHistory} routes={routes} />,
        document.getElementById('app')
    </Provider>
);