import FaCompany from "./FaCompany";
import classNames from 'classnames/bind';
import styles from './Home.module.scss'
import FaRecruiter from "./FaRecruiter";
const cx = classNames.bind(styles);
function Home() {
    return (
        <div>
            <div className={cx('container')}>
                <div className={cx("welcomBar")}>
                    <div className={cx('hooker')}>
                        <h1>Welcome to the postgraduate opportunity website</h1>
                    </div>
                    <div className={cx('content')}>
                        <p>Are you looking for a new path for your future?</p>
                        <p>Are you confused by a huge amount of information?</p>
                        <p>Are you stressed searching for opportunity?</p>
                    </div>
                    <div className={cx('ending')}>
                        <h2>Let us help you </h2>
                    </div>
                </div>
            </div>
            <FaCompany />
            <div className={cx('FaRecruiter_container')}>
                <FaRecruiter />
            </div>
        </div>

    );
}

export default Home;