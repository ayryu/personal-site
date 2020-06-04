import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: "#000",
    }
  },
  typography: {
    fontFamily: `'Work Sans', sans-serif`,
    "fontWeightRegular": 500
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={darkTheme}>
    <>
      <CssBaseline />
      <App />
    </>
  </MuiThemeProvider>,
  document.getElementById('root')
);

