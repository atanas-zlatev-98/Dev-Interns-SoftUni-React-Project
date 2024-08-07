import React from 'react'
import './Home.scss';
import LatestJobs from './latest-jobs/LatestJobs';
import { NavLink } from 'react-router-dom';
import Filters from '../filters/Filters';

const Home = () => {

    return (
        <div className='main-home'>
            <div className='header-image'>
                <div className='header-inner'>
                    <h2 className='m-0 header-text welcome'>Welcome, to the Realm of the Developers,</h2>
                    <h3 className='m-0 header-text-lower'>a place where you will find the perfect opportunity to prove yourself worthy! </h3>
                </div>
            </div>
            <div className='main-content'>
                <div className='filters'>
                    <Filters/>
                </div>

                <div className='content'>
                    <div className='all-apps-header'>
                        <div className='job-opp'>
                            <p className='job-opp-inner m-0'> Recent job opportunities found</p>
                            {/*<p className='m-0 job-opp-inner-2'>You can see all available jobs below.</p>*/}
                        </div>
                        <NavLink to='/jobs' className='newsletter'><p className='newsletter-inner'>Check out all Jobs</p></NavLink>
                    </div>
                    <LatestJobs/>
                </div>

            </div>
        </div>
    )
}

export default Home