import React, { useContext, useEffect, useState } from 'react'
import './Edit.scss';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { getJobById, updateJob } from '../api/jobs-api';


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
    const navigate = useNavigate();

    const { jobId } = useParams();

    useEffect(() => {

        const getJob = async () => {
            const currentJob = await getJobById(jobId)
            setJob(currentJob);
        }

        getJob();

    }, [])

    const { changeHandler, submitHandler, values, setValues } = useForm(Object.assign(initialValues, job), async (values) => {

        const confirmEdit = confirm('Are you sure you want to edit this job?');

        if (confirmEdit) {
            await updateJob(jobId, values);
            navigate(`/job/details/${jobId}`)
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
                        <label htmlFor='remote'>Remote</label>
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
                        <input id='btn-edit' type="submit" value='Edit' />
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Edit