import React, { useState } from 'react';
import classNames from "classnames/bind";
import styles from "./Signup.module.scss";
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Validation from './SignupValidation';
import axios from 'axios';
const cx = classNames.bind(styles);

function Signup() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if (errors.name === "" && errors.email === "" && errors.password === "") {
            axios.post('http://localhost:5500/signup', values)
                .then(res => {
                    navigate('/account');
                })
                .catch(err => console.log(err));
        }
    };

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    return (
        <div className={cx('register')}>
            <div className={cx('wrapper')}>
                <button className={cx('icon-close')}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                <div className={cx('loginForm')}>
                    <h2>Sign-Up</h2>
                    <form action='' onSubmit={handleSubmit}>
                        <div className={cx('input-box')}>
                            <span className={cx('icon')}>
                                <FontAwesomeIcon icon={faUser} />
                            </span>
                            <input type="text" id="name" name="name" required="" onChange={handleInput} />
                            <label htmlFor="name">Name</label>
                            {errors.name && <span className={cx('warning')}>{errors.name}</span>}
                        </div>
                        <div className={cx('input-box')}>
                            <span className={cx('icon')}>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </span>
                            <input type="email" id="email" name="email" required="" onChange={handleInput} />
                            <label htmlFor="email">Email</label>
                            {errors.email && <span className={cx('warning')}>{errors.email}</span>}
                        </div>
                        <div className={cx('input-box')}>
                            <span className={cx('icon')}>
                                <FontAwesomeIcon icon={faKey} />
                            </span>
                            <input type="password" id="password" name="password" required="" onChange={handleInput} />
                            <label htmlFor="password">Password</label>
                            {errors.password && <span className={cx('warning')}>{errors.password}</span>}
                        </div>
                        <button type="submit" className={cx('btn-account')}>
                            SignUp
                        </button>
                    </form>
                    <button className={cx('btn-account')}>
                        <Link to="/account" className={cx('register-link')}>Login</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Signup;
