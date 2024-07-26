import React from 'react'
import { Link } from 'react-router-dom'
const GuestUser = () => {
    return (
        <ul className='login'>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/register'>Register</Link></li>
        </ul>
    )
}

export default GuestUser