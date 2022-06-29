import React from 'react'
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import axios from 'axios';

import { Header } from './components/app/Header/Header'
import SearchPage from './components/SearchPage'
import UserPage from './components/UserPage'

import './styles/styles.scss'

axios.defaults.baseURL = 'https://api.github.com'
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Authorization'] = `token ${process.env.AUTH_TOKEN}`;

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="user/:userName" element={<UserPage />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App