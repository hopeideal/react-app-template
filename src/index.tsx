import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import VConsole from 'vconsole';
import App from './pages/index';

if (process.env.REACT_APP_ENV !== 'pro') {
  // eslint-disable-next-line no-new
  new VConsole();
}

ReactDOM.render(<App />, document.getElementById('root'));
