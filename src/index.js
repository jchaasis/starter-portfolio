import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

//import react router
import {BrowserRouter} from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ,
  document.getElementById('root')
);


registerServiceWorker();
