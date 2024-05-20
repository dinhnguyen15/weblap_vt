import styles from './Contact.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Contact() {
   return <h2 className={cx('text')}>Contact us page</h2>;
}

export default Contact;
