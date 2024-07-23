import React, { useEffect, useState } from 'react'
import { getAllApplications } from '../api/applications-api';
import './Home.scss';
import ApplicationsListItem from './applications-list/ApplicationsListItem';

const Home = () => {

    const [allApplications, setAllApplications] = useState([]);

    useEffect(() => {

        const getApplications = async () => {

            const result = await getAllApplications();

            setAllApplications(result);

        }

        getApplications();
    }, [])

    return (
        <div className='main-home'>
            <div className='header-image'>
                <div className='header-inner'></div>
            </div>
            <div className='main-content'>
                <div className='filters'></div>

                <div className='content'>
                    {allApplications.map(app => <ApplicationsListItem key={app._id} {...app} />)}
                </div>

            </div>
        </div>
    )
}

export default Home