import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { createMuiTheme } from "@material-ui/core/styles";
import { Dashboard } from './component/layout/dashboard/Dashboard';

const theme = createMuiTheme({
    typography: {
      fontFamily: ['-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', 'Oxygen-Sans', 'Ubuntu', 'Cantarell', "Helvetica Neue", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"].join(','),
    }
  });

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        {/* route container, redux container, etc... */}
        <Dashboard/>
    </MuiThemeProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
