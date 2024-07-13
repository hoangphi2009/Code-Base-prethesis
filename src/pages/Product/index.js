import classNames from 'classnames/bind';
import styles from './Product.module.scss'
import SearchBar from './SearchBar';
import JobCard from './JobCart';
import { useEffect, useState } from "react"
// import jobListings from './JobCart/jobDummyData'
import { db } from '../../firebase.config';
import { collection, query, orderBy, where, getDocs } from "firebase/firestore";
const cx = classNames.bind(styles);
function Product() {
    const [jobs, setJobs] = useState([]);
    const [customSearch, setCustomSearch] = useState(false);

    const fetchJobs = async () => {
        setCustomSearch(false);
        const tempJobs = []
        const jobsRef = query(collection(db, "jobs"));
        const q = query(jobsRef, orderBy("postedOn", "desc"));
        const req = await getDocs(q);

        req.forEach((job) => {
            tempJobs.push({
                ...job.data(),
                id: job.id,
                postedOn: job.data().postedOn.toDate()
            })
        });
        setJobs(tempJobs);
        console.log("all jobs: ",tempJobs);
        
    }
    const fetchJobsCustom = async (jobCriteria) => {
        setCustomSearch(true);
        const tempJobs = []
        const jobsRef = query(collection(db, "jobs"));
        const q = query(jobsRef, where("type", "==", jobCriteria.type), where("title", "==", jobCriteria.title), where("experience", "==", jobCriteria.experience), where("location", "==", jobCriteria.location), orderBy("postedOn", "desc"));
        const req = await getDocs(q);

        req.forEach((job) => {
            // console.log(doc.id, " => ", doc.data());
            tempJobs.push({
                ...job.data(),
                id: job.id,
                postedOn: job.data().postedOn.toDate()
            })
        });
        setJobs(tempJobs);
        console.log(tempJobs);
    }
    useEffect(() => {
        fetchJobs()
    }, [])
    return (
        <div>
            <div className={cx('title')}>
                <div className={cx('content')}>
                    <h1>Your ideal job awaits, start the search</h1>
                    <p>Get latest job openings that best suits you!</p>
                </div>
            </div>
            <SearchBar fetchJobsCustom={fetchJobsCustom} />
            {customSearch &&
                <button onClick={fetchJobs}>
                    <p>Clear Filters</p>
                </button>
            }
            {jobs.length > 0 ? (
                jobs.map((job) => (
                    <JobCard key={job.id} {...job} />
                ))
            ) : (
                <p>No jobs found</p>
            )}
        </div>
    );
}

export default Product;