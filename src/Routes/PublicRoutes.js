import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Index } from 'Modules/Main/Index/Index'
import { Login } from 'Modules/Main/Login/Login'
import { Registry } from 'Modules/Main/Registry/Registry'
import { UserProvider } from 'Context/UserContext'
import { SearchService } from 'Modules/Main/SearchService/SearchService'
import { IsAuth } from 'Context/IsAuth'
import { InfoService } from 'Modules/Main/InfoService/InfoService'
import { ForgottenPassword } from 'Modules/Main/ForgottenPassword/ForgottenPassword'

export const PublicRoutes = () => {
    return (
        <UserProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Index />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/registry' element={<Registry />} />
                    <Route path='/service/:query' element={<SearchService />} />
                    <Route path='/CO/service/:servicename' element={<IsAuth> <InfoService /> </IsAuth>} />
                    <Route path='/password/forgotten' element={<ForgottenPassword />} />
                </Routes>
            </BrowserRouter>
        </UserProvider>
    )
}