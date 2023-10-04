import React from 'react';
import { createRoot } from 'react-dom';
import App from './App'; // Import your main App component

const root = document.getElementById('root');
const rootElement = createRoot(root);

rootElement.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
