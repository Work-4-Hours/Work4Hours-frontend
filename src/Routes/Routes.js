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
import { ForgottenPassword } from 'Modules/Main/ForgottenPassword/ForgottenPassword'
import { NotFound } from 'Components/Layout/NotFound/NotFound'
import { NewService } from 'Components/Layout/NewService/NewService'
import { UpdateService } from 'Components/Layout/UpdateService/UpdateService'
import { AllServices } from 'Components/Layout/AllServices/AllServices'

export const AllRoutes = () => {

  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registry' element={<Registry />} />
          <Route path='/service/:query' element={<SearchService />} />
          <Route path='/password/:query' element={<ForgottenPassword />} />

          <Route path='/profile/:query' element={ <IsAuth> <Profile /> </IsAuth>} />
          <Route path='/CO/service/:servicename' element={<IsAuth> <InfoService /> </IsAuth>} />
          <Route path='/service/add' element={ <IsAuth> <AddService /> </IsAuth>} />
          <Route path='/service/edit' element={ <IsAuth> <EditService /> </IsAuth>} />
          <Route path='/dashboard/*' element={ <IsAuth> <Dashboard /> </IsAuth>} >
            <Route path='publications' element={ <Publications />} />
            <Route path='all' element={ <AllServices />} />
            <Route path='saved' element={<Saved />} />
            <Route path='new-service' element={<NewService />} />
            <Route path='update-service' element={<UpdateService />} />
          </Route>
          <Route path='/claim' element={ <IsAuth> <Claim /> </IsAuth>} />
          <Route path='/chat' element={<IsAuth> <Chat /> </IsAuth>} />

          <Route path='*' element={<NotFound/>} /> 
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}