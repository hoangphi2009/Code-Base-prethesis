import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './SearchBar.module.scss';

const cx = classNames.bind(styles);

function SearchBar(props) {
    const [jobCriteria, setJobCriteria] = useState({
        title: "",
        location: "",
        experience: "",
        type: ""
    });

    const handleChange = (e) => {
        setJobCriteria((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };
    console.log(jobCriteria)
    const search = async () => {
        await props.fetchJobsCustom(jobCriteria);
    };

    return (
        <div className={cx('container')}>
            <select onChange={handleChange} name="title" value={jobCriteria.title} className={cx('searchBar-btn')}>
                <option value="" disabled hidden>Job Roles</option>
                <option value="IOS Developer">IOS Developer</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="Android Developer">Android Developer</option>
                <option value="Developer Advocate">Developer Advocate</option>
            </select>
            <select onChange={handleChange} name="type" value={jobCriteria.type} className={cx('searchBar-btn')}>
                <option value="" disabled hidden>Job Type</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Contract">Contract</option>
            </select>
            <select onChange={handleChange} name="location" value={jobCriteria.location} className={cx('searchBar-btn')}>
                <option value="" disabled hidden>Location</option>
                <option value="Remote">Remote</option>
                <option value="In-Office">In-Office</option>
                <option value="Hybrid">Hybrid</option>
            </select>
            <select onChange={handleChange} name="experience" value={jobCriteria.experience} className={cx('searchBar-btn')}>
                <option value="" disabled hidden>Experience</option>
                <option value="Fresher">Fresher</option>
                <option value="Junior Level">Junior Level</option>
                <option value="Mid Level">Mid Level</option>
                <option value="Senior Level">Senior Level</option>
            </select>
            <button onClick={search} className={cx('search-btn')}>Search</button>
        </div>
    );
}

export default SearchBar;
