
import './App.scss'
import { useState } from 'react';
import Login from './components/auth/login/Login.jsx';
import { Register } from './components/auth/register/Register.jsx';
import { AuthContext } from './components/context/authContext.js';
import ApplicationDetails from './components/details/application-details/ApplicationDetails.jsx';
import Home from './components/home/Home.jsx';
import NavBar from './components/navigation/NavBar.jsx';
import { Routes,Route } from "react-router-dom";

function App() {

  const [authState, setAuthState] = useState({});

  const changeAuthState = (state) => {

    localStorage.setItem('accessToken',state.accessToken);
    setAuthState(state);
  }

  const contextData = {
    userId: authState._id,
    email: authState.email,
    username: authState.username,
    accessToken: authState.accessToken,
    isAuthenticated: !!authState.email,
    changeAuthState,
  }

  return (
    <AuthContext.Provider value={contextData}>
      <div className='main'>
        <NavBar></NavBar>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/application/details/:appId" element={<ApplicationDetails/>}/>
          </Routes>


      </div>
    </AuthContext.Provider>
  )
}

export default App
