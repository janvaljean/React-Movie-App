import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from "../components/Navbar";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MovieDetail from "../pages/MovieDetail";
import PrivateRouter from './PrivateRouter';

const AppRouter = () => {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route  path="/details/:id" element={<PrivateRouter/>}>
        <Route path="" element={<MovieDetail/>}/>
      </Route>
    </Routes>
    </div>
  )
}

export default AppRouter

