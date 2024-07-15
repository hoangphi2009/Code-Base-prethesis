import React from 'react'
import classNames from 'classnames/bind';
import styles from './SliderBar.module.scss'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import 'normalize.css'
const cx = classNames.bind(styles);

function SliderBar() {

    const data = [
        {
            name: "International University - VNU",
            img: "https://hcmiu.edu.vn/wp-content/uploads/2017/08/logo-vector-IU-01.png",
            review: "abc abc abc",
            addr_link: "https://hcmiu.edu.vn/"
        },
        {
            name: "RMIT University",
            img: "/images/logo_units/logo-rmit.png",
            review: "abc abc abc",
            addr_link: "https://hcmiu.edu.vn/"
        },
        {
            name: "University of Economy Law",
            img: "/images/logo_units/logo-uel.jpg",
            review: "abc xzc xcz",
            addr_link: "https://hcmiu.edu.vn/"
        },
        {
            name: "University of Science",
            img: "/images/logo_units/logo-us.jpg",
            review: "abc abc abc",
            addr_link: "https://hcmiu.edu.vn/"
        },
        {
            name: "University of Information Technology",
            img: "/images/logo_units/logo-uit.jfif",
            review: "The University of Information Technology, or VNU-HCM University of Information Technology, " +
                "is a public university located in Ho Chi Minh City, Vietnam, " +
                "a member of Vietnam National University, Ho Chi Minh City. ",
            addr_link: "https://hcmiu.edu.vn/"
        },
        {
            name: "Foreign Trade University",
            img: "/images/logo_units/logo-ftu.jpg",
            review: "Foreign Trade University is a public university established in 1960, located in Hanoi, Vietnam, " +
                "with satellite campuses in Ho Chi Minh City and Quảng Ninh.",
            addr_link: "https://hcmiu.edu.vn/"
        }
    ]
    const settings = {
        dots: true,
        Infinity: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        
    }

    return (
        <div className={cx('swiper-container')}>
            <div className={cx('card-holder')}>
                <Slider {...settings}>
                    {data.map((d, index) => (
                        <div key={index} className={cx('cartBox')}>
                            <div className={cx('card')}>
                                <div className={cx('image-holder')}>
                                    <img src={d.img} alt="" className={cx('image')} />
                                </div>
                                <div className={cx('info')}>
                                    <p className={cx('name')}>{d.name}</p>
                                    <p>{d.review}</p>
                                    <a href={d.addr_link}><button className={cx('read-btn')}>Read more</button></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default SliderBar;

