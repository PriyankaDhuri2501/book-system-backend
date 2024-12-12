import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom' or 'react-dom/client' based on your version of React
import './index.css'; // TailwindCSS or custom styles
import App from './App'; // Main App component

// Render the App component inside the root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
