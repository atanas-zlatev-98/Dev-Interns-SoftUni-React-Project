import React from 'react'
import './Filters.scss';

const Filters = () => {
    return (
        <div className='filtters'>
            <h2>Filters</h2>
            <div className='filter-group'>
                <label>Location</label>
                <select name="city" id="city">
                    <option value="Sofia">Sofia</option>
                    <option value="Plovdiv">Plovdiv</option>
                    <option value="Varna">Varna</option>
                    <option value="Burgas">Burgas</option>
                </select>
            </div>

            <div className='filter-group'>
                <label>Remote Work</label>
                <select name="remote-work" id="remote-work">
                    <option value="Home">Home Office</option>
                    <option value="Remote">Remote</option>
                    <option value="On-Site">On-Site</option>
                    <option value="Hybrid">Hybrid</option>
                </select>
            </div>

            <div className='filter-group'>
                <label>Position</label>
                <select name="Position" id="Position">
                    <option value="Full Stack">Full Stack</option>
                    <option value="Font-End">Font-End</option>
                    <option value="Back-End">Back-End</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="Node">Node.js</option>
                    <option value="React">React</option>
                </select>
            </div>

            <div className='filter-group'>
                <label>Seniority</label>
                <select name="Seniority" id="Seniority">
                    <option value="Inter">Inter</option>
                    <option value="Junior">Junior</option>
                    <option value="Mid">Mid</option>
                    <option value="Senior">Senior</option>
                  
                </select>
            </div>


        </div>
    )
}

export default Filters