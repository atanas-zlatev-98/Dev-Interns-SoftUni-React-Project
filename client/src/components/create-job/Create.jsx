import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { createJob } from '../api/jobs-api';
import { AuthContext } from '../context/authContext';
import './Create.scss';

const Create = () => {

    const [error, setError] = useState('');

    const navigate = useNavigate()

    const { userId, logoUrl,summary,username } = useContext(AuthContext);

    const initialValues = {
        ownerId: userId,
        logoUrl: logoUrl,
        ownerName: username, 
        ownerSummary: summary,
        title: "",
        position: "",
        location: "",
        remote: "",
        description: "",
        banner: '',
        savedList: [],
    }

    const createHandler = async (values) => {

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

        try {
            const { _id: jobId } = await createJob(values);
            navigate(`/job/details/${jobId}`);
        } catch (err) {
            throw new Error(err.message);
        }

    }


    const { values, changeHandler, submitHandler } = useForm(initialValues, createHandler);
    return (
        <div className='create-conteiner'>
            <div className='create-form'>

                <div className='logo-create'>
                    <Link to='/' className='logo-text'>DEV<span>.</span>INTERNS</Link>
                </div>

                <p id='create-text'>Create a new position</p>
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
                        {error ? <span className='error'>{error}</span> : <span></span>}
                    </div>

                    <div id='form-group'>
                        <input id='btn-create' type="submit" value='Create' />
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Create