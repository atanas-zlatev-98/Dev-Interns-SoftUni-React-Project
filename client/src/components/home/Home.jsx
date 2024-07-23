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
                <div className='header-inner'>
                    <h2 className='m-0 header-text welcome'>Welcome, to the Realm of the Developers,</h2>
                    <h3 className='m-0 header-text-lower'>a place where you will find the perfect opportunity to prove yourself worthy! </h3>
                </div>
            </div>
            <div className='main-content'>
                <div className='filters'></div>

                <div className='content'>
                    <div className='all-apps-header'>
                        <div className='job-opp'>
                            <p className='job-opp-inner m-0'>{allApplications.length} Job opportunities found</p>
                            {/*<p className='m-0 job-opp-inner-2'>You can see all available jobs below.</p>*/}
                        </div>
                        <div className='newsletter'><p className='newsletter-inner'>Subscribe for our Newsletter</p></div>
                    </div>
                    {allApplications.map(app => <ApplicationsListItem key={app._id} {...app} />)}
                </div>

            </div>
        </div>
    )
}

export default Home