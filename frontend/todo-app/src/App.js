import './App.css';
import Login from './components/Login';
import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Error from './components/Error';
import ListToDos from './components/ListToDos';
import Header from './components/Header';
import Footer from './components/Footer';
import Logout from './components/Logout';
import AuthProvider, { useAuth } from './components/security/AuthContext';

function AuthenticatedRoute({ children }) {
  const authContext = useAuth()
  if (authContext.isAuthenticated) {
    return children
  }
  return <Navigate to="/" />
}

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />

            <Route path='/welcome/:username' element={
              <AuthenticatedRoute><Welcome /></AuthenticatedRoute>} />

            <Route path='/todos' element={<AuthenticatedRoute><ListToDos /></AuthenticatedRoute>} />

            <Route path='/logout' element={<AuthenticatedRoute><Logout /></AuthenticatedRoute>} />

            <Route path='*' element={<Error />} />
          </Routes>

          <Footer />
        </BrowserRouter>
        <Footer />
      </AuthProvider>


    </div>
  );
}

export default App;
