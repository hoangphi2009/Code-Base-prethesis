import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faBars } from '@fortawesome/fontawesome-free-solid';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('container')}>
            <Link to="/" >
                <img src='/images/logo1bg.png' alt="logo" className={cx('logo')} />
            </Link>
            <div className={cx('search')}>
                <input placeholder="Clothes and shoes" spellCheck={false} />
                <button className={cx('clear')}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                <FontAwesomeIcon className={cx('loaing')} icon={faSpinner} />
                {/* tippy is tooltip */}

                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
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
            <FontAwesomeIcon icon={faShoppingBag} className={cx('shop-btn')} />
            <FontAwesomeIcon icon={faBars} className={cx('menu-btn')} />
        </div>
    );
}

export default Header;
