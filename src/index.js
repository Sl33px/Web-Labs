import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';
import ItemsContextProvider from "./context/itemsContext";
import {Provider} from "react-redux";
import {store} from "./store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <ItemsContextProvider>
          <App />
      </ItemsContextProvider>
  </Provider>
);