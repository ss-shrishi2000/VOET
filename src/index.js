import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from './context/context';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <Provider>
    <App />
    </Provider> , 
document.getElementById('root') );
