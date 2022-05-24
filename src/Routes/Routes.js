import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Chat } from 'Modules/Main/Chat/Chat'
import { Index } from 'Modules/Main/Index/Index'
import { Login } from 'Modules/Main/Login/Login'
import { Registry } from 'Modules/Main/Registry/Registry'

import { Profile } from 'Modules/Main/Profile/Profile'
import { InfoService } from 'Modules/Main/InfoService/InfoService'
import { AddService } from 'Modules/Main/AddService/AddService'
import { EditService } from 'Modules/Main/EditService/EditService'
import { Claim } from 'Modules/Main/Claim/Claim'
import { Dashboard } from 'Modules/Main/Dashboard/Dashboard'
import { Publications } from 'Components/Layout/Publications/Publications'
import { Saved } from 'Components/Layout/Saved/Saved'
import { UserProvider } from 'Context/UserContext'
import { SearchService } from 'Modules/Main/SearchService/SearchService'
import { IsAuth } from 'Context/IsAuth'

export const AllRoutes = () => {

  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registry' element={<Registry />} />
          <Route path='/service/:query' element={<SearchService />} />

          <Route path='/profile/:query' element={ <IsAuth> <Profile /> </IsAuth>} />
          <Route path='/:servicename' element={<IsAuth> <InfoService /> </IsAuth>} />
          <Route path='/service/add' element={ <IsAuth> <AddService /> </IsAuth>} />
          <Route path='/service/edit' element={ <IsAuth> <EditService /> </IsAuth>} />
          <Route path='/dashboard/*' element={ <IsAuth> <Dashboard /> </IsAuth>} >
            <Route path='publications' element={ <Publications />} />
            <Route path='saved' element={<Saved />} />
          </Route>
          <Route path='/claim' element={ <IsAuth> <Claim /> </IsAuth>} />
          <Route path='/chat' element={<IsAuth> <Chat /> </IsAuth>} />
          <Route path='*' element={<h1>Not found</h1>} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}