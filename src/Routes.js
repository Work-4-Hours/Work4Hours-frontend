import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Chat } from 'Modules/Main/Chat/Chat'
import { Index } from 'Modules/Main/Index/Index'
import { Login } from 'Modules/Main/Login/Login' 
import { Registry } from 'Modules/Main/Registry/Registry'
import { Users } from 'Modules/Admin/Users/Users'

export const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>} />
        <Route path='/chat' element={<Chat/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/registry' element={<Registry />} /> 
        <Route path='/AdminUsers' element={<Users />} />
        <Route path='*' element={<h1>Not found</h1>} />     
      </Routes>
    </BrowserRouter>
  )
}