import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/Containers/index.scss';
import App from './Components/Containers/App';
import store from './Redux/Store/Index';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>,

document.getElementById("root")
);

