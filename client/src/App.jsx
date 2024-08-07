
import './App.scss'
import { Register } from './components/auth/register/Register.jsx';
import { AuthProvider } from './components/context/authContext.jsx';
import { Routes,Route } from "react-router-dom";
import JobDetails from './components/job-details/JobDetails.jsx';
import Home from './components/home/Home.jsx';
import NavBar from './components/navigation/NavBar.jsx';
import Create from './components/create-job/Create.jsx';
import Edit from './components/edit-job/Edit.jsx';
import Profile from './components/profile/Profile.jsx';
import LogOut from './components/auth/logout/LogOut.jsx';
import Login from './components/auth/login/Login.jsx';
import RouteGuard from './components/guards/RouteGuard.jsx';
import RouteGuardLogged from './components/guards/RouteGuardLogged.jsx';
import CreatedJobs from './components/profile/created-jobs/CreatedJobs.jsx';

function App() {

  return (
    <AuthProvider>
      <div className='main'>
        <NavBar></NavBar>
        <Routes>

            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<RouteGuardLogged><Login/></RouteGuardLogged>}/>
            <Route path="/register" element={<RouteGuardLogged><Register/></RouteGuardLogged>}/>
            <Route path='/logout' element={<LogOut/>}/>

            <Route path="/job/details/:jobId" element={<JobDetails/>}/>
            <Route path="/create" element={<RouteGuard><Create/></RouteGuard>}/>
            <Route path="/job/edit/:jobId" element={<RouteGuard><Edit/></RouteGuard>}/>
            <Route path="/profile" element={<RouteGuard><Profile/></RouteGuard>}/>
            <Route path="/profile/created-jobs" element={<RouteGuard><CreatedJobs/></RouteGuard>}/>
            

          </Routes>


      </div>
    </AuthProvider>
  )
}

export default App
