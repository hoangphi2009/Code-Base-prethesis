import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faBars, } from '@fortawesome/fontawesome-free-solid';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
    faEarthAsia,
    faKeyboard,
    faCircleQuestion,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',

                },
                {
                    code: 'vi',
                    title: 'VietNam',
                    type: 'language'
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    }
];
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0)
    }, []);
    return (
        <div className={cx('container')}>
            <Link to="/" >
                <img src='/images/logo1bg.png' alt="logo" className={cx('logo')} />
            </Link>

            <Tippy
                interactive
                visible={searchResult.length > 0}
            >
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
            </Tippy>


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
            <Tippy delay={[0, 200]} content="Shopping">
                <FontAwesomeIcon icon={faShoppingBag} className={cx('shop-btn')} />
            </Tippy>
            <Tippy>
                <FontAwesomeIcon icon={faBars} className={cx('menu-btn')} />
            </Tippy>

        </div>
    );
}

export default Header;
