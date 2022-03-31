import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Chat } from 'Modules/Main/Chat/Chat'
import { Index } from 'Modules/Main/Index/Index'
import { Login } from 'Modules/Main/Login/Login' 
import { Registry } from 'Modules/Main/Registry/Registry'
import { Users } from 'Modules/Admin/Users/Users'
import { Profile } from 'Modules/Main/Profile/Profile'
import { InfoService } from 'Modules/Main/InfoService/InfoService'
<<<<<<< HEAD
import { AddService } from 'Modules/Main/AddService/AddService'
=======
import { Services } from 'Modules/Admin/Services/Services'


>>>>>>> a15e1011c92e2370272c57b2c505640c20b577f5

export const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>} />      
        <Route path='/login' element={<Login/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/registry' element={<Registry />} /> 
        <Route path='/infoservice' element={<InfoService />} /> 
        <Route path='service/add' element={<AddService />} /> 

        <Route path='/chat' element={<Chat/>} />
        <Route path='/AdminUsers' element={<Users />} />
        <Route path='/AdminServices' element={<Services/>}/>
        <Route path='*' element={<h1>Not found</h1>} />     
      </Routes>
    </BrowserRouter>
  )
}