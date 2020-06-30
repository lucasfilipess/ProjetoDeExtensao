import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import 'react-notifications-component/dist/theme.css';
import ReactNotification from 'react-notifications-component';
import './Assets/main.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ReactNotification />
    <MuiThemeProvider theme={theme}>
      <Routes />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
