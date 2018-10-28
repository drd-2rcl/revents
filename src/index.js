import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App';
import { hot } from 'react-hot-loader';
import * as serviceWorker from './serviceWorker';

const rootEl = document.getElementById('root');


let render = () => {
    ReactDOM.render(<App />, rootEl)
}

if ( module.hot ) {
    module.hot.accept('./app/layout/App', () => {
        setTimeout(render)
    })
}

render();

serviceWorker.unregister();
