import React from 'react';
import ReactDOM from 'react-dom';
import Typography from 'typography';
import oceanBeachTheme from 'typography-theme-ocean-beach';

import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

const typography = new Typography(oceanBeachTheme);

typography.injectStyles();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
