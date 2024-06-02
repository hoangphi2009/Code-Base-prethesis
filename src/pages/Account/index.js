import classNames from "classnames/bind";
import styles from './Account.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faKey } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import './LoginValidation';
import Validation from "./LoginValidation";
import axios from 'axios';
const cx = classNames.bind(styles)
function Account() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({
    })
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if (errors.email === "" && errors.password === "") {
            axios.post('http://localhost:5500/account', values)
                .then(res => {
                    if (res.data === "Success") {
                        navigate('/')
                    } else {
                        alert("Email or password is incorrect")
                    }
                })
                .catch(err => console.log(err));
        }
    }
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }
    return (
        <div className={cx('register')}>
            <div className={cx('wrapper')}>
                <button className={cx('icon-close')}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                <div className={cx('loginForm')}>
                    <h2>Login</h2>
                    <form action="" onSubmit={handleSubmit}>
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
                        <div className={cx('remember-forgot')}>
                            <label>
                                <input type="checkbox" />
                                Remenber me
                            </label>
                            <Link>Forgot Password</Link>
                        </div>
                        <button type="submit" className={cx('btn-account')}>
                            Login
                        </button>
                        <div className={cx('login-register')}>
                            <p>
                                Don't have an account?
                                <Link to="/signup" className={cx('register-link')}>Register</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Account;