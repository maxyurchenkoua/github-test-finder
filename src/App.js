import React from 'react'
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import axios from 'axios';

import { Header } from './components/app/Header/Header'
import SearchPage from './components/SearchPage/SearchPage'
import UserPage from './components/UserPage/UserPage'

import './styles/styles.scss'

axios.defaults.baseURL = 'https://api.github.com'
axios.defaults.headers.common = { 'Content-Type': 'application/json' }

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="user/:id" element={<UserPage />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App