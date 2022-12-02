import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ApolloProvider} from "@apollo/client";
import {ThemeProvider} from "@mui/material";
import client from "./apollo/client";
import {theme} from "./theme";
import './index.css';
import {BrowserRouter} from "react-router-dom";
import { REPO_NAME } from './constants/repo';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter basename={`/${REPO_NAME}/`}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);
