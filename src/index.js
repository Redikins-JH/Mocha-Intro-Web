import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import createStore from './createStore';

//import * as Reducers from './Reducers';

const theme = createMuiTheme({
    typography: {
        fontFamily: '"Noto Sans KR", serif',
    },
    palette: {
        primary: {
          light: '#f79859',
          main: '#f47510',
          dark: '#b54e09',
          contrastText: '#eecf8f',
        },
        secondary: {
          light: '#999999',
          main: '#fbeadc',
          dark: '#1f1311',
          contrastText: '#eecf8f',
        },
        appBar: {
          color: 'primary'
      }
    }
})

const store = createStore()

ReactDOM.render(
  <Provider store = {store}>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
