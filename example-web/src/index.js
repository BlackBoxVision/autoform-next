import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './redux/store';

import App from './App';

const ReduxApp = props => (
    <Provider store={props.store}>
        <App />
    </Provider>
);

ReactDOM.render(<ReduxApp store={configureStore()} />, document.getElementById('root'));
