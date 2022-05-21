import { AdminProvider } from 'Context/AdminContext'
import React from 'react'

const RoutersAdmin = () => {
  return (
    <AdminProvider>
        <BrowserRouter>
            <Route path='/AdminUsers' element={<Users />} />
            <Route path='/AdminServices' element={<Services/>}/>
        </BrowserRouter>
    </AdminProvider>
  )
}

export default RoutersAdmin