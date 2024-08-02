import React from 'react'
import './Application.scss';


import { Link, NavLink } from 'react-router-dom'
const ApplicationsListItem = ({ _id, title, position, stack, location, remote, logoUrl, description }) => {
    
    return (
        <NavLink className="navlink-app" to={`/application/details/${_id}`}>
            <div className='link-content'>
                <img src={logoUrl} className='content-img' />
                <div className='application-content'>
                    <h3 className='m-0'>{title}</h3>
                    <h5 className='m-0 mb-1'>{position}</h5>
                    <p className='application-desc m-0 mb-3'>{description}</p>
                    <div className='application-info'>
                        <div>
                            <p className='info-location m-0'>{location} | {remote}</p>
                        </div>
                      
                    </div>

                </div>
            </div>
        </NavLink>
    )
}

export default ApplicationsListItem