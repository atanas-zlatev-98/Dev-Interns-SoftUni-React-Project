import React, { useContext, useEffect, useState } from 'react'
import { deleteJob, getJobById } from '../api/jobs-api';
import { useNavigate, useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import './JobDetails.scss';

const JobDetails = () => {

    const [currentJob, setCurrentJob] = useState({});

    const { userId,isAuthenticated } = useContext(AuthContext);
    const { jobId } = useParams();

    const navigate = useNavigate();

    const removeJob = async () => {
        const isConfirmed = confirm(`Are you sure you want to delete ${currentJob.title}`)
        try {
            if (isConfirmed) {
                await deleteJob(jobId);
                navigate('/');
            }

        } catch (err) {
            throw new Error(err.message);
        }

    }


    useEffect(() => {
        const findJobById = async () => {
            try{
                const job = await getJobById(jobId);
                setCurrentJob(job);
            }catch(err){
                throw new Error(err.message);
            }
          
        }

        findJobById();

    }, [])
    return (
        <div className='app-details'>

            <div className='app-details-header'>
                <div className='app-header'>
                    <div>
                        <img className='app-details-logo' src={currentJob.logoUrl} alt={currentJob.title} />
                    </div>
                    <div className='m-0 p-1 app-text'>
                        <div className=''>
                            <h3 className='m-0 black'>{currentJob.title}</h3>
                            <h5 className='m-0 mb-1 gray'>{currentJob.position}</h5>
                        </div>
                        <div>
                            <p className='info-location m-0'>{currentJob.location} | {currentJob.remote}</p>
                        </div>
                    </div>
                </div>

                <div className='apply-now'>
                    <div>
                        {isAuthenticated && <div>{userId == currentJob.userId ?
                            (<div><NavLink className='app-navlink' to={`/job/edit/${jobId}`}>Edit</NavLink><NavLink className='app-navlink-delete' onClick={removeJob}>Delete</NavLink></div>) :
                            (<NavLink className='app-navlink' to={'/'}>Apply Now!</NavLink>)}</div>}
                       

                    </div>
                </div>
            </div>

            <div className='app-main'>
                <div className='app-main-content'>
                    <div>
                        <h2 className='main-h2'>{currentJob.title}</h2>
                        <ul className='main-ul'>
                            <h3>Job Description</h3>
                            <li>Position - {currentJob.position}</li>
                            <li>Location - {currentJob.location}</li>
                            <li>Position Required - {currentJob.remote}</li>
                            <h3>Description</h3>
                            <p>{currentJob.description}</p>
                        </ul>
                    </div>

                </div>
                <div className='app-main-company'>

                    <img alt='' />



                </div>
            </div>

        </div>
    )
}

export default JobDetails