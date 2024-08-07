import React, { useEffect, useState } from 'react'
import { getLatestJobs } from '../../api/jobs-api';
import JobListItem from '../job-list/JobListItem';

const LatestJobs = () => {

    const [latestJobs,setLatestJobs] = useState([]);

    useEffect(()=>{
        const getJobs = async () =>{

            try{
                const jobs = await getLatestJobs();
                setLatestJobs(jobs.reverse().slice(0,5));
            }catch(err){
                throw new Error(err.message);
            }

        }

        getJobs();
    },[]);

    return (
    <div>
        {latestJobs.map(job=><JobListItem key={job._id} {...job}/>)}
    </div>
  )
}

export default LatestJobs