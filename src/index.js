import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import reducers from './reducers';

let store = createStore(reducers)

ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
registerServiceWorker();
