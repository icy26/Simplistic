import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const DOMAIN = process.env.REACT_APP_AUTH_DOMAIN;
const CLIENTID = process.env.REACT_APP_AUTH_CLIENTID;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain= {DOMAIN}
      clientId= {CLIENTID}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
