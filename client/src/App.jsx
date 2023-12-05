import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import Login from './Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './home'

function App() {

  return (
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />}></Route>
     <Route path='/join' element={<Signup />}></Route>
     <Route path='/login' element={<Login />}></Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
