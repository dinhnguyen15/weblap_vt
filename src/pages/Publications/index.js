import { useTranslation } from 'react-i18next';
import styles from './Publications.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Publications() {
   const { t } = useTranslation();

   return (
      <div className={cx('wrapper')}>
         <div className={cx('page-head')}>
            <div className={cx('page-tl')}>{t('publications')}</div>
            <div className={cx('page-des')}></div>
         </div>
         <div className={cx('container')}>
            <div className={cx('body-Pub')}>
               <div className={cx('filter-research')}>
                  <label className={cx('filter-tl')} for="status">
                     Bộ lọc:
                  </label>
                  <select className={cx('filter-name')} id="status" name="status">
                     <option className={cx('filter-status')} value="1">
                        Bài mới nhất
                     </option>
                     <option className={cx('filter-status')} value="2">
                        Bài cũ nhất
                     </option>
                  </select>
               </div>
               <div className={cx('research-list')}>
                  <div className={cx('research-item')}>
                     <div className={cx('line-research')}></div>
                     <div className={cx('research-name')}>Machine Learning for Mobile Communications</div>
                     <div className={cx('research-des')}>
                        Mirdula K, Chandrakumar T, Mohd Asif Shah, Duc-Tan Tran, NR Physical Layer
                     </div>
                     <div className={cx('research-date')}>Tháng 1 năm 2024</div>
                  </div>
                  <div className={cx('research-item')}>
                     <div className={cx('line-research')}></div>
                     <div className={cx('research-name')}>Machine Learning for Mobile Communications</div>
                     <div className={cx('research-des')}>
                        Mirdula K, Chandrakumar T, Mohd Asif Shah, Duc-Tan Tran, NR Physical Layer
                     </div>
                     <div className={cx('research-date')}>Tháng 1 năm 2024</div>
                  </div>
                  <div className={cx('research-item')}>
                     <div className={cx('line-research')}></div>
                     <div className={cx('research-name')}>Machine Learning for Mobile Communications</div>
                     <div className={cx('research-des')}>
                        Mirdula K, Chandrakumar T, Mohd Asif Shah, Duc-Tan Tran, NR Physical Layer
                     </div>
                     <div className={cx('research-date')}>Tháng 1 năm 2024</div>
                  </div>
                  <div className={cx('research-item')}>
                     <div className={cx('line-research')}></div>
                     <div className={cx('research-name')}>Machine Learning for Mobile Communications</div>
                     <div className={cx('research-des')}>
                        Mirdula K, Chandrakumar T, Mohd Asif Shah, Duc-Tan Tran, NR Physical Layer
                     </div>
                     <div className={cx('research-date')}>Tháng 1 năm 2024</div>
                  </div>
                  <div className={cx('research-item')}>
                     <div className={cx('line-research')}></div>
                     <div className={cx('research-name')}>Machine Learning for Mobile Communications</div>
                     <div className={cx('research-des')}>
                        Mirdula K, Chandrakumar T, Mohd Asif Shah, Duc-Tan Tran, NR Physical Layer
                     </div>
                     <div className={cx('research-date')}>Tháng 1 năm 2024</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Publications;
