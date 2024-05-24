import { useTranslation } from 'react-i18next';
import styles from './News.module.scss';
import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function News() {
   const [news, setNews] = useState([]);

   useEffect(() => {
      fetch('/web-lab-vt/newsData/news.json')
         .then((response) => response.json())
         .then((data) => setNews(data));
   }, []);
   const { t } = useTranslation();
   return (
      <div className={cx('wrapper')}>
         <div className={cx('page-head')}>
            <div className={cx('page-tl')}>{t('news')}</div>
            <div className={cx('page-des')}>Tin tức sự kiện nghiên cứu</div>
         </div>
         <div className={cx('container')}>
            <div className={cx('body-news')}>
               <div className={cx('news-hl')}>
                  <div className={cx('hl-left')}></div>
                  <div className={cx('hl-right')}></div>
               </div>
               <div className={cx('news-list')}>
                  {news.map((item) => (
                     <div key={item.id} className={cx('news-item')}>
                        <Link to={`/news/${item.id}`}>
                           <div className={cx('news-img')}></div>
                           <div className={cx('news-name')}>{item.title}</div>
                           <div className={cx('news-content')}>{item.content}</div>
                        </Link>
                     </div>
                  ))}
                  {/* <div className={cx('news-item')}>
                     <div className={cx('news-img')}></div>
                     <div className={cx('news-name')}>Phó trưởng lab </div>
                     <div className={cx('news-content')}>
                        Phòng Đào tạo và Khoa học công nghệ - Học viện Công nghệ Bưu chính Viễn thông
                     </div>
                  </div> */}
               </div>
            </div>
         </div>
      </div>
   );
}

export default News;
