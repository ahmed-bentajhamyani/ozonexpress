import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'assets/style/Style.css';
import 'assets/style/darkModeToggle.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { DarkModeProvider } from 'context/DarkModeContext';
import { AuthProvider } from 'context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkModeProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </DarkModeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
