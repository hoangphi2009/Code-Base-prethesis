import React from 'react'
import classNames from 'classnames/bind';
import styles from './FaCompany.module.scss'
const cx = classNames.bind(styles);
function FaCompany() {
  return (
    <div className={cx('container')} >
          <h1>this FaCompany tag</h1>
    </div>
  )
}

export default FaCompany
