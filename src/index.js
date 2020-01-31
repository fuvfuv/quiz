import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const application = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDom.render(application, document.getElementById(`root`));
