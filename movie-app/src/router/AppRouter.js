import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Login from '../pages/Login'
import Main from '../pages/Main'
import Register from '../pages/Register'


const AppRouter = () => {
  return (
    
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<Main/>}/>
        </Routes>

    </BrowserRouter>
  )
}

export default AppRouter
