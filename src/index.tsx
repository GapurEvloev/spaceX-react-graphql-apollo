import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ApolloProvider} from "@apollo/client";
import {ThemeProvider} from "@mui/material";
import client from "./apollo/client";
import {theme} from "./theme";
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>
);
