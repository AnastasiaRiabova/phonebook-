import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './redux/store';
import 'modern-normalize/modern-normalize.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate loading={<CircularProgress />} persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
