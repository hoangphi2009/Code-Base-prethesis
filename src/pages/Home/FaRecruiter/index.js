import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'; // Import autoplay CSS
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import styles from './FaRecruiter.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function FaRecruiter() {
    const data = [
        {
            img: "/images/logo_units/logo-rmit.png",
        },
        {
            img: "/images/logo_units/logo-uel.jpg",
        },
        {
            img: "/images/logo_units/logo-ftu.jpg",
        },
        {
            img: "/images/logo_units/logo-ftu.jpg",
        },
        {
            img: "/images/logo_units/logo-ftu.jpg",
        },
        {
            img: "/images/logo_units/logo-ftu.jpg",
        },
        {
            img: "/images/logo_units/logo-ftu.jpg",
        },
        {
            img: "/images/logo_units/logo-ftu.jpg",
        },
    ];

    return (
        <div className={cx('container')}>
            <h1 className={cx('heading')}>
                Featured Recruiter
            </h1>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                spaceBetween={300}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 20,
                    depth: 100,
                    modifier: 3,
                }}
                autoplay={{
                    delay: 3000, // Adjust the delay as needed
                    disableOnInteraction: false,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className={cx('swiper_container')}
            >
                {data.map((item, index) => (
                    <SwiperSlide className={cx('swiper-slide')} key={index}>
                        <img src={item.img} alt={`slide_image_${index}`} className={cx('image')} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default FaRecruiter;
