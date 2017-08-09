import { Route, Router } from "react-router";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes.js';

ReactDOM.render(<Router routes={Routes()}  />, document.getElementById('root'));
registerServiceWorker();
