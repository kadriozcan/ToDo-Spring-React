import './App.css';
import Login from './components/Login';
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Error from './components/Error';
import ListToDos from './components/ListToDos';
import Header from './components/Header';
import Footer from './components/Footer';
import Logout from './components/Logout';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/welcome/:username' element={<Welcome />} />
          <Route path='/todos' element={<ListToDos />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='*' element={<Error />} />
        </Routes>

        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
