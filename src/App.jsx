import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navigations from './components/Navigations'
import Books from './components/Books';
import SingleBook from './components/SingleBook';
import Login from './components/Login'
import Register from './components/Register'
import Account from './components/Account';
function App() {
  return (
    <>
      <header>
        <Navigations/>
        <Routes>
            <Route path="/" element={<Books />}/>
            <Route path="/:name" element={<SingleBook />}/>
            <Route path="/login" element={<Login />}/>  
            <Route path="/register" element={<Register />}/>
            <Route path="/Account" element={<Account />}/>
        </Routes>
      </header>
    </>
  )
}

export default App
