import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import ThemeProvider from './context/ThemeProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
