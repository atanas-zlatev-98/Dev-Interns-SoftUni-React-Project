import React from 'react'
import './Application.scss';
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";


import { Link, NavLink } from 'react-router-dom'
const ApplicationsListItem = ({ _id, title, position, stack, location, remote, imageUrl, description }) => {
    console.log(stack);

    const stackIcon = (language) => {
        if (language == 'Java') {
            return <span className='lang-icon'><FaJava className='icon' /></span>
        } else if (language == 'JavaScript') {
            return <span className='lang-icon'><IoLogoJavascript className='icon' /></span>
        }
    }
    return (
        <NavLink className="navlink-app" to={`/application/details/${_id}`}>
            <div className='link-content'>
                <img src={imageUrl} className='content-img' />
                <div className='application-content'>
                    <h3 className='m-0'>{title}</h3>
                    <h5 className='m-0 mb-1'>{position}</h5>
                    <p className='application-desc m-0 mb-3'>{description}</p>
                    <div className='application-info'>
                        <div>
                            <p className='info-location m-0'>{location} | {remote}</p>
                        </div>
                        <div className='m-0 tech-stack-content'><p className='m-0'></p> <div className='icon-content'>{stack.map(lang => stackIcon(lang))}</div></div>
                    </div>

                </div>
            </div>
        </NavLink>
    )
}

export default ApplicationsListItem