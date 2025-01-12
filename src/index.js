import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Apply theme on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.classList.toggle('dark-mode', savedTheme === 'dark');
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);