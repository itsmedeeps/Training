import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Link } from 'react-router-dom';
import './index.css';
import App from './App';
import TeamList from './components/Teamlist'
import VenueList from './components/VenueList'
import TeamDetailsWithUseState from './components/TeamDetailsWithUseState';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);