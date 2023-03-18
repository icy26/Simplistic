import React from 'react';
//import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import App from './App';

import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH_DOMAIN;
const clientID = process.env.REACT_APP_AUTH_CLIENTID;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientID}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);