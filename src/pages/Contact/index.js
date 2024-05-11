import classNames from 'classnames/bind';
import styles from './Contact.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
const cx = classNames.bind(styles);
function Contact() {
    return ( 
        <div className={cx('contact')}>
            <div className={cx('content')}>
                <h2>Contact Us</h2>
                <p>A Contact Us page provides guidance for existing customers
                    and offers an overview of your brand for new visitors. A
                    strong Contact Us page should contain several elements, such
                    as a phone number and links to social media channels. It
                    should also be easy to navigate, as this makes for a
                    positive customer experience.</p>
            </div>
            <div className={cx('inner')}>
                <div className={cx('contactInfo')}>
                    <div className={cx('local')}>
                        <FontAwesomeIcon icon={faLocationDot} className={cx('icon')}/>
                        <div className={cx('text')}>
                            <h3>Address</h3>
                            <p>International University,<br />HCM
                                City,<br />VietNamese</p>
                        </div>
                    </div>
                    <div className={cx('email')}>
                        <FontAwesomeIcon icon={faEnvelope} className={cx('icon')} />
                        <div className={cx('text')}>
                            <h3>Email</h3>
                            <p>ITITIU20273@student.hcmiu.edu.vn</p>
                        </div>
                    </div>
                    <div className={cx('phone')}>
                        <FontAwesomeIcon icon={faPhone} className={cx('icon')} />
                        <div className={cx('text')}>
                            <h3>Phone</h3>
                            <p>03-278-767-92</p>
                        </div>
                    </div>
                </div>
                <div className={cx('contactFrom')}>
                    <form>
                        <h2>Send Message</h2>
                        <div className={cx('inputBox')}>
                            <label htmlFor="fullName">Full Name</label>
                            <input type="text" id="fullName" name="fullName" required placeholder="VD: Nguyen Van A..." />
                        </div>
                        <div className={cx('inputBox')}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required placeholder="VD: Abc123@gmail.com..." />
                        </div>
                        <div className={cx('inputBox')}>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" required placeholder="Type your message..."></textarea>
                        </div>
                        <div className={cx('btn-send')}>
                            <input type="submit" value="Send" />
                        </div>
                    </form>
                </div>
            </div>   
        </div>
     );
}

export default Contact;