import ReactDOM from 'react-dom';
import React from "react";

import './global.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <App/>
      </React.StrictMode>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);