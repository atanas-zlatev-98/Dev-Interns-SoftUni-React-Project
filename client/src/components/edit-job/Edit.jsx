import React, { useContext, useEffect, useState } from 'react'
import './Edit.scss';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { getJobById, updateJob } from '../api/jobs-api';
import { AuthContext } from '../context/authContext';


const initialValues = {
    title: "",
    position: "",
    location: "",
    remote: "",
    description: "",
    banner: '',
}

const Edit = () => {

    const [job, setJob] = useState({});
    const [error,setError] = useState('');
    const navigate = useNavigate();

    const { jobId } = useParams();
    const { ownerId} = useContext(AuthContext)

    useEffect(() => {

        const getJob = async () => {
            try {
                const currentJob = await getJobById(jobId)
                setJob(currentJob);
            } catch (err) {
                console.log(err.message);
            }


        }

        getJob();

    }, []);

    if (job && job.userId !== ownerId) {
        navigate(`/job/details/${jobId}`);
    }

    const { changeHandler, submitHandler, values, setValues } = useForm(Object.assign(initialValues, job), async (values) => {

        if (!values.title) {
            return setError('Title field is required!')
        }

        if (!values.position) {
            return setError('Position field is required!')
        }

        if (!values.location) {
            return setError('Location field is required!')
        }
        if (!values.remote) {
            return setError('Remote field is required!')
        }
        if (!values.description) {
            return setError('Description field is required!')
        }
        if (!values.banner) {
            return setError('Banner field is required!')
        }
        const confirmEdit = confirm('Are you sure you want to edit this job?');

        if (confirmEdit) {
            try{
                await updateJob(jobId, values);
                navigate(`/job/details/${jobId}`)
            }catch(err){
                throw new Error(err.message);
            }
            
        }

    });


    return (
        <div className='edit-conteiner'>
            <div className='edit-form'>

                <div className='logo-edit'>
                    <Link to='/' className='logo-text'>DEV<span>.</span>INTERNS</Link>
                </div>

                <p id='edit-text'>Edit Application</p>
                <form onSubmit={submitHandler}>
                    <div id='form-group'>
                        <label htmlFor='title'>Title</label>
                        <input type="text" id="title" name="title" placeholder="Title..." value={values.title} onChange={changeHandler} />
                    </div>

                    <div id='form-group'>
                        <label htmlFor='position'>Position</label>
                        <input type="text" id="position" name="position" placeholder="Position..." value={values.position} onChange={changeHandler} />
                    </div>

                    <div id='form-group'>
                        <label htmlFor='location'>Location</label>
                        <input type="text" id="location" name="location" placeholder='Location...' value={values.location} onChange={changeHandler} />
                    </div>

                    <div id='form-group'>
                        <label htmlFor='remote'>Remote {`(Home/On-Site/Hybrid)`}</label>
                        <input type="text" id="remote" name="remote" placeholder='Remote...' value={values.remote} onChange={changeHandler} />
                    </div>

                    <div id='form-group'>
                        <label htmlFor='description'>Description</label>
                        <textarea type="text" id="description" name="description" rows={5} placeholder='Description...' value={values.description} onChange={changeHandler}></textarea>
                    </div>

                    <div id='form-group'>
                        <label htmlFor='logo'>Banner</label>
                        <input type="text" id="Banner" name="banner" rows={5} placeholder='Banner URL...' value={values.banner} onChange={changeHandler} />
                    </div>

                    <div id='form-group'>
                        {error ? <span className='error'>{error}</span> : <span></span>}
                    </div>

                    <div id='form-group'>
                        <input id='btn-edit' type="submit" value='Edit' />
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Edit