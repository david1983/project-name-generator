import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import appState from "./state/appstate"

ReactDOM.render(<App store={appState} />, document.getElementById('root'));
registerServiceWorker();
