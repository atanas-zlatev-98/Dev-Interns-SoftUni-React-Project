
import './App.scss'
import { useState } from 'react';
import Login from './components/auth/login/Login.jsx';
import { Register } from './components/auth/register/Register.jsx';
import { AuthContext } from './components/context/authContext.js';
import ApplicationDetails from './components/details/application-details/ApplicationDetails.jsx';
import Home from './components/home/Home.jsx';
import NavBar from './components/navigation/NavBar.jsx';
import { Routes,Route } from "react-router-dom";
import Create from './components/create-item/Create.jsx';
import Profile from './components/profile/Profile.jsx';

function App() {

  const [authState, setAuthState] = useState({});

  const changeAuthState = (state) => {
    sessionStorage.setItem('accessToken',state.accessToken);
    setAuthState(state);
  }

  const contextData = {
    userId: authState._id,
    email: authState.email,
    summary: authState.summary,
    username: authState.username,
    logoUrl: authState.logoUrl,
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
            <Route path="/create" element={<Create/>}/>
            <Route path="/profile" element={<Profile/>}/>

          </Routes>


      </div>
    </AuthContext.Provider>
  )
}

export default App
