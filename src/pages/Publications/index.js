import { useTranslation } from 'react-i18next';
import styles from './Publications.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Publications() {
   const { t } = useTranslation();
   const [publications, setPublications] = useState([]);
   const [filter, setFilter] = useState('1'); // 1: Newest, 2: Oldest

   useEffect(() => {
      fetch('/web-lab-vt/publicationsData/publications.json')
         .then((response) => response.json())
         .then((data) => {
            const parsedData = data.map((pub) => ({
               ...pub,
               originalDate: pub.date_time,
               date_time: new Date(pub.date_time.split('/').reverse().join('-')),
            }));
            setPublications(parsedData);
         });
   }, []);

   const handleFilterChange = (e) => {
      setFilter(e.target.value);
   };

   const sortedPublications = [...publications].sort((a, b) => {
      if (filter === '1') {
         return b.date_time - a.date_time; // Newest first
      } else {
         return a.date_time - b.date_time; // Oldest first
      }
   });

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
                  <select
                     className={cx('filter-name')}
                     id="status"
                     name="status"
                     value={filter}
                     onChange={handleFilterChange}
                  >
                     <option className={cx('filter-status')} value="1">
                        {t('filter_newest')}
                     </option>
                     <option className={cx('filter-status')} value="2">
                        {t('filter_oldest')}
                     </option>
                  </select>
               </div>
               <div className={cx('research-list')}>
                  {sortedPublications.map((pub) => (
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
                        {/* Hiển thị như trong json */}
                        <div className={cx('research-date')}>{pub.originalDate}</div>

                        {/* <div className={cx('research-date')}>{pub.date_time.toLocaleDateString()}</div>Hiển thị định dạng tháng/ngày/năm */}
                     </a>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}

export default Publications;
