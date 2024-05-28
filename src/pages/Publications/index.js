import { useTranslation } from 'react-i18next';
import styles from './Publications.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Publications() {
   const { t } = useTranslation();
   const [publications, setPublications] = useState([]);

   useEffect(() => {
      fetch('/web-lab-vt/publicationsData/publications.json')
         .then((response) => response.json())
         .then((data) => setPublications(data));
   }, []);

   return (
      <div className={cx('wrapper')}>
         <div className={cx('page-head')}>
            <div className={cx('page-tl')}>{t('publications')}</div>
            <div className={cx('page-des')}></div>
         </div>
         <div className={cx('container')}>
            <div className={cx('body-Pub')}>
               <div className={cx('filter-research')}>
                  <label className={cx('filter-tl')} htmlFor="status">
                     {t('filter')}
                  </label>
                  <select className={cx('filter-name')} id="status" name="status">
                     <option className={cx('filter-status')} value="1">
                        {t('filter_newest')}
                     </option>
                     <option className={cx('filter-status')} value="2">
                        {t('filter_oldest')}
                     </option>
                  </select>
               </div>
               <div className={cx('research-list')}>
                  {publications.map((pub) => (
                     <a
                        href={pub.link_pub}
                        key={pub.id}
                        className={cx('research-item')}
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <div className={cx('line-research')}></div>
                        <div className={cx('research-name')}>{pub.title}</div>
                        <div className={cx('research-des')}>{pub.author}</div>
                        <div className={cx('research-date')}>{pub.date_time}</div>
                     </a>
                  ))}
                  {/* <div className={cx('research-item')}>
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
                  </div> */}
               </div>
            </div>
         </div>
      </div>
   );
}

export default Publications;
