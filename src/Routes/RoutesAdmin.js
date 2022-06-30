import React from 'react'
import { AdminProvider } from 'Context/AdminContext'
import { Services } from 'Modules/Admin/Services/Services'
import { Users } from 'Modules/Admin/Users/Users'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Index } from 'Modules/Main/Index/Index'

export const RoutesAdmin = () => {
  return (
    <AdminProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/AdminUsers'/>} />
          <Route path='/AdminUsers' element={<Users />} />
          <Route path='/AdminServices' element={<Services />} />
        </Routes>
      </BrowserRouter>
    </AdminProvider>
  )
}