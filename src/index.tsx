import * as React from 'react';
import * as ReactDOM from 'react-dom';


import { configure } from 'mobx';
import { Provider } from 'mobx-react';

import Framework7 from 'framework7/framework7.esm.bundle';
import Framework7React from 'framework7-react';

import * as stores from './stores';

import './assets/css/var.css';
import './assets/css/framework7.ios.main.css';
import './assets/css/f7-css/sheet-modal.css';
import './assets/css/f7-css/popup.css';
import './assets/css/f7-css/accordion.css';
import './assets/css/f7-css/tabs.css';
// import './assets/css/typography.css';
import './assets/css/index.css';

import './assets/css/iconfont.css';

import App from './App';

import registerServiceWorker from './registerServiceWorker';

Framework7.use(Framework7React);

configure({ isolateGlobalState: true });

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
