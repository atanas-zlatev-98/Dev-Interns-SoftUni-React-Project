import React, { useEffect, useState } from 'react'
import './ApplicationDetails.scss';
import { getApplcationById } from '../../api/applications-api';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { stackIcon } from '../../home/applications-list/Stack';

const ApplicationDetails = () => {

    const [currentApp,setCurrentApp] = useState({});

    const {appId} = useParams();

    useEffect(()=>{
        const findAppById = async () =>{
            const app = await getApplcationById(appId);
            setCurrentApp(app);
        }
        findAppById();
    },[])
    console.log(currentApp);
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
                <NavLink className='app-navlink' to={'/'}>Apply Now!</NavLink>
            </div>
        </div>
    </div>

    <div className='app-main'>
        <div className='app-main-content'>
            <div>
                <h3 className='stack-icons-app'>Tech Stack: {currentApp.stack?.map(language => stackIcon(language))}</h3>
            </div>
        </div>
        <div className='app-main-company'></div>
    </div>

   </div>
  )
}

export default ApplicationDetails