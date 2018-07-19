import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";

import './index.css';
import RootContainer from './features/RootContainer';

import registerServiceWorker from './registerServiceWorker';
import SocketIOShell from "./features/SocketIOShell";
import configureStore from './store/configureStore';

const store = configureStore({});

ReactDOM.render(
    <Provider store={store}>
        <SocketIOShell>
            <RootContainer />
        </SocketIOShell>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
