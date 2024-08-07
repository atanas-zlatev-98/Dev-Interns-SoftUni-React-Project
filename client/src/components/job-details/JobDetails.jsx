import React, { useContext, useEffect, useState } from 'react'
import { deleteJob, getJobById, updateJob } from '../api/jobs-api';
import { useNavigate, useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import './JobDetails.scss';

const JobDetails = () => {

    const [currentJob, setCurrentJob] = useState({});

    const { userId, isAuthenticated } = useContext(AuthContext);
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
            try {
                const job = await getJobById(jobId);
                setCurrentJob(job);
            } catch (err) {
                throw new Error(err.message);
            }

        }

        findJobById();

    }, [])


    const followUs = async () => {

        const isSaved = currentJob.savedList.includes(userId);

        if (isSaved) {

            const filterSavedList = currentJob.savedList.filter(savedUser => savedUser !== userId);
            currentJob.savedList = filterSavedList;

            setCurrentJob(currentJob);

            try {
                await updateJob(jobId, currentJob);
                navigate(`/job/details/${jobId}`)

            } catch (err) {
                throw new Error(err.message);
            }

            console.log('isSaved' + currentJob.savedList);
        }

        if (!isSaved) {
            currentJob.savedList.push(userId);
            setCurrentJob(currentJob)
            try {
                await updateJob(jobId, currentJob);
                navigate(`/job/details/${jobId}`)

            } catch (err) {
                throw new Error(err.message);
            }

            console.log('is not saved' + currentJob.savedList);
        }

    }
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
                        {isAuthenticated && <div>{userId == currentJob.ownerId ?
                            (<div><NavLink className='app-navlink' to={`/job/edit/${jobId}`}>Edit</NavLink><NavLink className='app-navlink-delete' onClick={removeJob}>Delete</NavLink></div>) :
                            (<NavLink className='app-navlink' to={'/'}>Apply Now!</NavLink>)}</div>}


                    </div>
                </div>
            </div>

            <div className='app-main'>
                <div className='app-main-content'>
                    <div>
                        <h2 className='main-h2'>{currentJob.title}</h2>
                        <img className='banner' src={currentJob.banner} alt={currentJob.title} />
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

                    <h3>Information</h3>

                    <img src={currentJob.logoUrl} alt={currentJob.title} />
                    <p>{currentJob.ownerName}</p>

                    <p className='owner-summary'>{currentJob.ownerSummary}</p>

                    {isAuthenticated ?
                        <div className='save-btn-container'>
                            <p>{currentJob.savedList?.length > 0 ? currentJob.savedList.length : "0"} people have saved this job!</p>
                            {currentJob.ownerId != userId ? <NavLink className='app-navlink' onClick={followUs}>
                                {currentJob.savedList?.includes(userId) ? "Saved" : 'Save Job'}
                            </NavLink> : <p className='cant-save-own-job'>You can't save your own job</p>}

                        </div> : <p className='cant-save-own-job'>Login to Save jobs</p>
                    }
                </div>
            </div>

        </div>
    )
}

export default JobDetails