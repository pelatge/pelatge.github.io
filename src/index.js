import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';

import './main.css';

ReactDOM.render(
  <AppContainer>
  <HasRouter>
  <App />
  </HasRouter>
  </AppContainer>,
  document.getElementById('app')
);

if(module.hot){
    module.hot.accept('./App', () => {
    
    const NextApp = require('./App').default; 
    
    ReactDOM.render(
    <AppContainer>
    <NextApp />
    </AppContainer>,
    document.getElementById('root')
    );
    
 });
}
