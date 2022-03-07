import { StrictMode } from 'react';
import { render } from 'react-dom';
import { GlobalStyle } from 'styles/GlobalStyle';
import { App } from './components';
// import './reportWebVitals';

render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
