import { useTranslation } from 'react-i18next';
import styles from './News.module.scss';
import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function News() {
   const { t } = useTranslation();
   const [news, setNews] = useState([]);

   useEffect(() => {
      fetch('/web-lab-vt/newsData/news.json')
         .then((response) => response.json())
         .then((data) => setNews(data));
   }, []);

   if (news.length === 0) {
      return <div>Loading...</div>; // Loading state
   }

   const hlNews = news[news.length - 1]; // Lấy phần tử cuối cùng làm nổi bật
   const otherNews = news.slice(0, news.length - 1); // Các phần tử còn lại

   return (
      <div className={cx('wrapper')}>
         <div className={cx('page-head')}>
            <div className={cx('page-tl')}>{t('news')}</div>
            <div className={cx('page-des')}>{t('news_des')}</div>
         </div>
         <div className={cx('container')}>
            <div className={cx('body-news')}>
               <div className={cx('body-hl')}>
                  <Link to={`/news/${hlNews.id}`} key={hlNews.id}>
                     <div className={cx('news-hl')}>
                        <div className={cx('hl-left')}>
                           <div className={cx('news-name-hl')}>{hlNews.title}</div>
                           <div className={cx('news-content-hl')}>{hlNews.content}</div>
                        </div>
                        <div className={cx('hl-right')}>
                           <img className={cx('news-img-hl')} src={hlNews.image} alt={hlNews.title} />
                        </div>
                     </div>
                  </Link>
               </div>
               <div className={cx('news-list')}>
                  {otherNews.map((item) => (
                     <div key={item.id} className={cx('news-item')}>
                        <Link to={`/news/${item.id}`}>
                           <div className={cx('img-body')}>
                              <img className={cx('news-img')} src={item.image} alt={item.title} />
                           </div>
                           <div className={cx('news-name')}>{item.title}</div>
                           <div className={cx('news-content')}>{item.content}</div>
                        </Link>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}

export default News;
