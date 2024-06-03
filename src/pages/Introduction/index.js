import styles from './Introduction.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Introduction() {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('page-head2')}>Introduction page</div>
         <div className={cx('container')}></div>
      </div>
   );
}

export default Introduction;
