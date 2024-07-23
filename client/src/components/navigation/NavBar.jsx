import { useState } from 'react';
import profileImg from '../../assets/images/profile.png';
import { IoCreateOutline, IoApps, IoExitOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiUsers } from "react-icons/fi";
import { Link } from 'react-router-dom';

import './NavBar.scss';

const NavBar = () => {

    const [showNav, setShowNav] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

    const hasUser = false;

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
                    {!hasUser ? <ul className='login'>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/register'>Register</Link></li>
                    </ul> : <div onClick={() => { setShowProfile(current => !current), setShowNav(false) }} className='profile-container'>
                        <img src={profileImg} className='user-profile'></img>
                        <div className={`profile-content ${showProfile ? 'active-content' : ''}`}>
                            <div className='profile-link-container'>
                                <Link className='profile-link'>
                                    <img src={profileImg} width={50} height={50}></img>
                                    <p>Profile name</p>
                                </Link>
                                <p className='separator'></p>

                                <Link to="" className='created-offers'>
                                    <span id='mini-menu-span-bg'><IoApps /></span>
                                    <span >Created Offers</span>
                                </Link>
                            </div>
                            <div>
                                <Link href='' className='mini-menu'>
                                    <span id='mini-menu-span-bg'><IoCreateOutline className='mini-menu-icon' /></span>
                                    <span id='mini-menu-span'>Create Application</span>
                                </Link>
                                <Link href='' className='mini-menu'>
                                    <span id='mini-menu-span-bg'><FiUsers className='mini-menu-icon' /></span>
                                    <span id='mini-menu-span'>View Application</span>
                                </Link>
                                <Link to='' className='mini-menu'>
                                    <span id='mini-menu-span-bg'><IoMdNotificationsOutline className='mini-menu-icon' /></span>
                                    <span id='mini-menu-span'>Notifications</span>
                                </Link>
                                <Link to='' className='mini-menu'>
                                    <span id='mini-menu-span-bg'><IoExitOutline className='mini-menu-icon' /></span>
                                    <span id='mini-menu-span'>Logout</span>
                                </Link>
                            </div>
                        </div>

                    </div>}

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

                {!hasUser && <ul id='mobile-login'>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/register'>Register</Link></li>
                </ul>}

            </div>


        </header>
    )

}

export default NavBar