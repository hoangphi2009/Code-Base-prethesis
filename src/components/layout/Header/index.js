import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('container')}>
            <div>
                <Link to="/" >
                    <img src='/images/logo1bg.png' alt="logo" className={cx('logo')} />
                </Link>
            </div>
            <div className={cx('MenuItems')}>
                <ul >
                    <li>
                        <Link to="/" >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/product" >
                            Product
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" >
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to="/account">
                            Account
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
