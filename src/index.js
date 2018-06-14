import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Landing from './routes/Landing';
import Home from './routes/Home';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

function reducer(state) {
    return state;
}

const store = createStore(reducer);

console.log(store.getState());

ReactDOM.render(
    <Provider store = { store }>
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Landing}/>
                <Route path="/home" component={Home}/>
            </div>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

registerServiceWorker();
