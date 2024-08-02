import React, { useContext, useEffect, useState } from 'react'
import './ApplicationDetails.scss';
import { getApplcationById } from '../../api/applications-api';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

const ApplicationDetails = () => {

    const [currentApp,setCurrentApp] = useState({});

    const {userId} = useContext(AuthContext);
    const {appId} = useParams();

    useEffect(()=>{
        const findAppById = async () =>{
            const app = await getApplcationById(appId);
            setCurrentApp(app);
        }
        
        findAppById();
      
    },[])
  return (
   <div className='app-details'>

    <div className='app-details-header'>
        <div className='app-header'>
            <div>
                <img className='app-details-logo' src={currentApp.logoUrl} alt={currentApp.title}/>
            </div>
            <div className='m-0 p-1 app-text'>
                <div className=''>
                <h3 className='m-0 black'>{currentApp.title}</h3>
                <h5 className='m-0 mb-1 gray'>{currentApp.position}</h5>
                </div>
                <div>
                <p className='info-location m-0'>{currentApp.location} | {currentApp.remote}</p>
                </div>
            </div>
        </div>

        <div className='apply-now'>
            <div>
                {userId == currentApp.userId ? 
                (<div><NavLink className='app-navlink' to={'/'}>Edit</NavLink><NavLink className='app-navlink-delete' to={'/'}>Delete</NavLink></div>) :
                (<NavLink className='app-navlink' to={'/'}>Apply Now!</NavLink>)}
                
            </div>
        </div>
    </div>

    <div className='app-main'>
        <div className='app-main-content'>
        <div>
        <h2 className='main-h2'>{currentApp.title}</h2>
            <ul className='main-ul'>
                <h3>Job Description</h3>
                <li>Position - {currentApp.position}</li>
                <li>Location - {currentApp.location}</li>
                <li>Position Required - {currentApp.remote}</li>
                <h3>Description</h3>
                <p>{currentApp.description}</p>
            </ul>
        </div>
           
        </div>
        <div className='app-main-company'>

                    <img  alt=''/>



        </div>
    </div>

   </div>
  )
}

export default ApplicationDetails