
import './App.scss'
import Login from './components/auth/login/Login.jsx';
import { Register } from './components/auth/register/Register.jsx';
import { AuthProvider } from './components/context/authContext.jsx';
import JobDetails from './components/job-details/JobDetails.jsx';
import Home from './components/home/Home.jsx';
import NavBar from './components/navigation/NavBar.jsx';
import { Routes,Route } from "react-router-dom";
import Create from './components/create-job/Create.jsx';
import Profile from './components/profile/Profile.jsx';
import LogOut from './components/auth/logout/LogOut.jsx';

function App() {

  return (
    <AuthProvider>
      <div className='main'>
        <NavBar></NavBar>
        <Routes>

            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path='/logout' element={<LogOut/>}/>

            <Route path="/job/details/:jobId" element={<JobDetails/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path="/profile" element={<Profile/>}/>
            

          </Routes>


      </div>
    </AuthProvider>
  )
}

export default App
