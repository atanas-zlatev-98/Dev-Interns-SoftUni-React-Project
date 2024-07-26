import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

import './NavBar.scss';
import GuestUser from './guestUser';
import LoggedUser from './loggedUser';


const NavBar = () => {

    const {isAuthenticated,...userData} = useContext(AuthContext);

    const [showNav, setShowNav] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

    return (
        <header className="navbar">

            <div className='navbar-desktop'>

                <div className="navbar-logo">
                    <Link to='/' className='logo-text'>DEV<span>.</span>INTERNS</Link>
                </div>

                <div className="navbar-ul">
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='#'>Jobs</Link></li>
                        <li><Link to='#'>Companies</Link></li>
                        <li><Link to='#'>Information</Link></li>
                    </ul>
                </div>

                <div className="navbar-profile">
                    {isAuthenticated ? (<LoggedUser {...userData}/>) :(<GuestUser/>)}

                    <Link className='navbar-dropdown' onClick={() => { setShowNav(current => !current); setShowProfile(false) }}>
                        <div className='hamburger-menu'>
                            <span id='hamburger'></span>
                            <span id='hamburger'></span>
                            <span id='hamburger'></span>
                        </div>
                    </Link>
                </div>

            </div>

            <div className={`navbar-mobile ${showNav ? 'active' : ''}`}>

                <ul id='mobile-menu'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='#'>Jobs</Link></li>
                    <li><Link to='#'>Companies</Link></li>
                    <li><Link to='#'>Information</Link></li>
                </ul>

                {isAuthenticated && <ul id='mobile-login'>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/register'>Register</Link></li>
                </ul>}

            </div>


        </header>
    )

}

export default NavBar