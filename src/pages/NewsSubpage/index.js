import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';

const cx = classNames.bind();

function NewsSubpage() {
   const { id } = useParams();
   const [newsItem, setNewsItem] = useState(null);

   useEffect(() => {
      fetch('/web-lab-vt/newsData/news.json')
         .then((response) => response.json())
         .then((data) => {
            const item = data.find((news) => news.id === parseInt(id, 10));
            setNewsItem(item);
         });
   }, [id]);

   if (!newsItem) {
      return <div>Loading...</div>;
   }
   return (
      <div className={cx('wrapper')}>
         <div className={cx('page-head')}>
            <div className={cx('page-tl')}>{newsItem.title}</div>
            <div className={cx('page-des')}></div>
         </div>
         <div className={cx('body-sp')}>
            <div dangerouslySetInnerHTML={{ __html: newsItem.body }} />
         </div>
      </div>
   );
}

export default NewsSubpage;
