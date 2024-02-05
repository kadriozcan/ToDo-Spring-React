import React from 'react'
import './ToDo.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Welcome from './Welcome';
import Error from './Error';

export default function ToDo() {
  return (
    <div className='ToDo'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/welcome/:username' element={<Welcome/>}></Route>
          <Route path='*' element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
