import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../pages/login/Login'
import { Home } from '../pages/home/Home'
import { Landing } from '../pages/landing/Landing'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={ <Landing /> } />
        <Route path='/login' element={ <Login /> }/>
        <Route path='/home' element={ <Home /> } />
    </Routes>
  )
}

export default AppRouter