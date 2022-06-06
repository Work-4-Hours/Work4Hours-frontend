import React from 'react'
import { AdminProvider } from 'Context/AdminContext'
import { Services } from 'Modules/Admin/Services/Services'
import { Users } from 'Modules/Admin/Users/Users'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const RoutesAdmin = () => {
  return (
    <AdminProvider>
        <BrowserRouter>
           <Routes>
              <Route path='/AdminUsers' element={<Users />} />
              <Route path='/AdminServices' element={<Services />}/>
           </Routes>
        </BrowserRouter>
    </AdminProvider>
  ) 
}