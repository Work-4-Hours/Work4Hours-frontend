import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Chat } from './Modules/Main/Chat/Chat';
import { Index } from './Components/Pages/Index/Index';
import { Login } from './Components/Pages/Login/Login';
import { Registry } from './Components/Pages/Registry/Registry';

export const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>} />
        <Route path='/chat' element={<Chat/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/registry' element={<Registry />} />
        <Route path='*' element={<h1>Not found</h1>} />     
      </Routes>
    </BrowserRouter>
  )
}