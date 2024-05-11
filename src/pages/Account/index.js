import classNames from "classnames/bind";
import styles from './Account.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faKey } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import { Link } from 'react-router-dom';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
const cx = classNames.bind(styles)
function Account() {
    return (
        <div className={cx('register')}>
            <div className={cx('wrapper')}>
                <span className={cx('icon-close')}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </span>
                <div className={cx('loginForm')}>
                    <h2>Login</h2>
                    <form>
                        <div className={cx('input-box')}>
                            <span className={cx('icon')}>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </span>
                            <input type="email" id="email" name="email" required="" />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className={cx('input-box')}>
                            <span className={cx('icon')}>
                                <FontAwesomeIcon icon={faKey} />
                            </span>
                            <input type="password" id="password" name="password" required="" />
                            <label htmlFor="password">Password</label>
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
                                <Link className={cx('register-link')}>Register</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Account;