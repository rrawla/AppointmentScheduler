import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'react-phone-number-input/rrui.css';
import 'react-phone-number-input/style.css';
import './styles/index.css';
import App from './containers/App';
import { Provider}  from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers';
let store = createStore(rootReducer);

if (process.env.NODE_ENV === `development`) {
   store = createStore(rootReducer,window.devToolsExtension && window.devToolsExtension());  
}

ReactDOM.render(
   <Provider store={store}>
    <App />
  </Provider>   
, document.getElementById('root'));
