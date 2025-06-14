import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from '@/App';
import OAuth2RedirectPage from "@/pages/auth/OAuth2RedirectPage";
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Router>
    <Routes>
      <Route path="/login/callback" element={<OAuth2RedirectPage />} />
      <Route path="/*" element={<App />} />
    </Routes>
  </Router>
  // </React.StrictMode>
);
