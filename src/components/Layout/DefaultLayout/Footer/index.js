import styles from './Footer.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Footer() {
   return <h2 className={cx('wrapper')}>Footer layout</h2>;
}

export default Footer;
