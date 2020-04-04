import * as React from "react";
import { render } from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./store/reducers/";
import { Provider } from "react-redux";
import logger from "redux-logger";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
