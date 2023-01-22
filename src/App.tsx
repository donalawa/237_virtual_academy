import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import logo from './logo.svg';
import { HomePage, LoginPage, SignupPage, DashboardLanding } from './pages';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
      {/* <LoginPage /> */}
      <BrowserRouter>
        <Routes>
            <Route path="/" element={(<HomePage />)} />
            <Route path="/login" element={(<LoginPage />)} />
            <Route path="/register" element={(<SignupPage />)} />
            <Route path="/dashboard" element={(<DashboardLanding />)} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

