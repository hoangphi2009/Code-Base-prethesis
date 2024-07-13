import FaCompany from "./FaCompany";
import classNames from 'classnames/bind';
import styles from './Home.module.scss'
const cx = classNames.bind(styles);
function Home() {
    return ( 
        <div>
            <div className={cx("container")}>
                <h1>this is tassadsasdadag home</h1>
            </div>
            <FaCompany />
        </div>
        
     );
}

export default Home;