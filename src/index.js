import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'mobx-react';
import MainStore from './store/Store'

ReactDOM.render(
    <Provider MainStore={MainStore}>
        <App/>
    </Provider>
, document.getElementById('root'));