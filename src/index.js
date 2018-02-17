import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './App.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { addUser } from './actions'
import reducers from './reducers'


let store = createStore(reducers);

ReactDOM.render(
    <Provider store = {store}>
         <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();


// commenting is a good way to work
//another commit in master