import React from 'react';
import dayjs from 'dayjs';
import classNames from 'classnames/bind';
import styles from './JobCart.module.scss';

const cx = classNames.bind(styles);

function JobCard(props) {
    const date1 = dayjs(Date.now());
    const diffInDays = date1.diff(props.postedOn, 'day');

    return (
        <div className={cx('container')}>
            <div className={cx('jobcard')}>
                <div className={cx('inforcard')}>
                    <h1>{props.title} - {props.company}</h1>
                    <p>{props.type} &#x2022; {props.experience} &#x2022; {props.location}</p>
                    <div className={cx('skills-btn')}>
                        {props.skills.map((skill, index) =>
                            <p key={index}>{skill}</p>
                        )}
                    </div>
                </div>
                <div className={cx('postcard')}>
                    <p>Posted {diffInDays > 1 ? `${diffInDays} days` : `${diffInDays} day`} ago</p>
                    <a href={props.job_link}><button>Apply</button></a>
                </div>
            </div>
        </div>
    );
}

export default JobCard;
