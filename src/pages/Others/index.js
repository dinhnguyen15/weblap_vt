import styles from './Others.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Others() {
   return <h2 className={cx('text')}>Others page</h2>;
}

export default Others;
