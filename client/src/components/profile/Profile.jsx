import React, { useContext, useEffect, useState } from 'react'
import {getAllJobs } from '../api/jobs-api';
import './Profile.scss';
import { AuthContext } from '../context/authContext';
import JobListItem from '../home/job-list/JobListItem';

const Profile = () => {

    const { ...userData } = useContext(AuthContext);

    const [allJobs, setAllJobs] = useState([]);
    
    useEffect(() => {
        const getJobs = async () => {

            const result = await getAllJobs();

            setAllJobs(result);

        }
        getJobs();
    }, [])

    const filteredJobs = allJobs.filter(job => job.userId === userData.userId);

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
                        <h2>Created Jobs</h2>
                        {filteredJobs.length > 0 ? filteredJobs.map(job => <JobListItem key={job._Id} {...job} />) : <p className='no-apps'>No Jobs created</p>}
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile