import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from 'axios';

axios.interceptors.request.use( (request) => {
  console.log(`A ${request.method} request sent to ${request.url}`);
  return request;
},
 
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use( (response) => {
  console.log( response);
  return response;
},
  
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
