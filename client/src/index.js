import React from "react";
import { createRoot } from 'react-dom/client';

import './global.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </Provider>
    </BrowserRouter>
);