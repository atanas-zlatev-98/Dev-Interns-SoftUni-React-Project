import React, { useContext,useState,useEffect } from 'react'
import JobListItem from '../../home/job-list/JobListItem'
import { getAllJobs } from '../../api/jobs-api';
import { AuthContext } from '../../context/authContext';
import './CreatedJobs.scss';

const CreatedJobs = () => {

    const { ...userData } = useContext(AuthContext);

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

    const filteredJobs = allJobs.filter(job => job.ownerId === userData.userId);

    return (
        <div className='created-jobs-conteiner'>
            <div className='created-jobs'>

                    <h2 className='created-jobs-h2'>Created Jobs</h2>
                    {filteredJobs.length > 0 ? filteredJobs.map(job => <JobListItem key={job._Id} {...job} />) : <p className='no-jobs'>No Jobs created</p>}
                
            </div>
        </div>
    )
}

export default CreatedJobs