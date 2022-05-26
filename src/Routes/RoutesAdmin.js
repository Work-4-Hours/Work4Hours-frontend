import React from 'react'
import { AdminProvider } from 'Context/AdminContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DataAdmin } from 'Modules/Admin/DataAdmin/DataAdmin'


export const RoutesAdmin = () => {
  return (
    <AdminProvider>
        <BrowserRouter>
           <Routes>
              <Route path='/AdminUsers' element={<DataAdmin />} />

           </Routes>
        </BrowserRouter>
    </AdminProvider>
  ) 
}