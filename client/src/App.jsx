
import './App.css'
import Login from './components/auth/login/Login.jsx';
import { Register } from './components/auth/register/Register.jsx';
import Home from './components/home/Home.jsx';
import NavBar from './components/navigation/NavBar.jsx';
import { Routes,Route } from "react-router-dom";

function App() {

  return (
    <>
      <div className='main'>
        <NavBar></NavBar>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
          </Routes>


      </div>
    </>
  )
}

export default App
