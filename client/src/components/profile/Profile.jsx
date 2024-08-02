import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/authContext';
import { getAllApplications } from '../api/applications-api';
import './Profile.scss';
import ApplicationsListItem from '../home/applications-list/ApplicationsListItem';

const Profile = () => {
    const { ...userData } = useContext(AuthContext);

    const [allApps, setAllApps] = useState([]);

    useEffect(() => {
        const getApplications = async () => {

            const result = await getAllApplications();

            setAllApps(result);

        }
        getApplications();
    }, [])

    const filteredApps = allApps.filter(app => app.userId === userData.userId);

    return (
        <div className='profile-conteiner'>
            <div className='profile'>
                <img id='logo' src={userData.logoUrl} alt={userData.username} />
                <div className='profile-data'>

                <div className='forms-data'>
                        <div>
                            <label>Email: </label>
                            <input type='text' value={userData.email} disabled></input>
                        </div>

                        <div>
                            <label>Username: </label>
                            <input type='text' value={userData.username} disabled></input>
                        </div>

                    </div>

                    <div className='summary-container'>
                        <p className='p-summary'>Summary:</p>
                        <textarea col={5} rows={5} value={userData.summary} disabled></textarea>
                    </div>

                    <div>
                        <h2>Created Applications</h2>
                        {filteredApps.length > 0 ? filteredApps.map(app => <ApplicationsListItem key={app._Id} {...app} />) : <p className='no-apps'>No Applications created</p>}
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile