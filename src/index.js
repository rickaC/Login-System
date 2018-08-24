import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
// import App from './App';
import Bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './Redux/reducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import App from './Components/App';
import {firebase} from "./Firebase/firebase"

const store = createStore(rootReducer, applyMiddleware(thunk));


ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));
