import React from 'react';
import ReactDOM from 'react-dom';
import {StrictMode} from "react";
import './index.css';
import App from "./components/app/app";

ReactDOM.render(
  <StrictMode>
      <App />         
  </StrictMode>,
  document.getElementById('root')
);   