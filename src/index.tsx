import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'mobx-react';

import * as stores from './stores';

import "../node_modules/framework7/dist/css/framework7.ios.min.css";
import "../node_modules/framework7/dist/css/framework7.ios.colors.min.css";
import './assets/css/index.css';

import App from './App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();


if (module['hot']) {
  module['hot'].accept();
}
