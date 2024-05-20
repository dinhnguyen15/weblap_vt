import styles from './Call.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function CallForPapers() {
   return <h2 className={cx('text')}>Call For Papers page</h2>;
}

export default CallForPapers;
