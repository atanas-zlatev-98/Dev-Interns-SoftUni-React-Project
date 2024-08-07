import React from 'react'
import { useState,useEffect } from 'react';
import './Jobs.scss';
import JobListItem from '../home/job-list/JobListItem';
import { getAllJobs } from '../api/jobs-api';
import Filters from '../filters/Filters';

const Jobs = () => {
    const [allJobs, setAllJobs] = useState([]);

    useEffect(() => {

        const getJobs = async () => {

            try {
                const result = await getAllJobs();
                setAllJobs(result);

            } catch (err) {
                throw new Error(err.message);
            }
        }

        getJobs();
    }, [])
    return (
        <div className='main-home'>
            <div className='header-image'>
                <div className='header-inner'>
                    <h2 className='m-0 header-text welcome'>Welcome, to the Jobs Page,</h2>
                    <h3 className='m-0 header-text-lower'>We have found { allJobs ? allJobs.length : '0'} jobs for you! </h3>
                </div>
            </div>
            <div className='main-content'>
                <div className='filters'>
                    <Filters/>
                </div>

                <div className='content'>
                    <div className='all-apps-header'>
                        <div className='job-opp'>
                            <p className='job-opp-inner m-0'> { allJobs ? allJobs.length : '0'} job opportunities found</p>
                            {/*<p className='m-0 job-opp-inner-2'>You can see all available jobs below.</p>*/}
                        </div>
                    </div>
                    {allJobs.map(job => <JobListItem key={job._id} {...job}/>)}
                </div>

            </div>
        </div>
    )
}

export default Jobs