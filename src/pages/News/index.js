import styles from './News.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function News() {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('page-head')}>
            <div className={cx('page-tl')}>Tin tức</div>
            <div className={cx('page-des')}>Tin tức sự kiện nghiên cứu</div>
         </div>
         <div className={cx('container')}>
            <div className={cx('body-news')}>
               <div className={cx('news-hl')}>
                  <div className={cx('hl-left')}></div>
                  <div className={cx('hl-right')}></div>
               </div>
               <div className={cx('news-list')}>
                  <div className={cx('news-item')}>
                     <div className={cx('news-img')}></div>
                     <div className={cx('news-name')}>Phó trưởng lab </div>
                     <div className={cx('news-content')}>
                        Phòng Đào tạo và Khoa học công nghệ - Học viện Công nghệ Bưu chính Viễn thông
                     </div>
                  </div>
                  <div className={cx('news-item')}>
                     <div className={cx('news-img')}></div>
                     <div className={cx('news-name')}>Phó trưởng lab </div>
                     <div className={cx('news-content')}>
                        Phòng Đào tạo và Khoa học công nghệ - Học viện Công nghệ Bưu chính Viễn thông
                     </div>
                  </div>
                  <div className={cx('news-item')}>
                     <div className={cx('news-img')}></div>
                     <div className={cx('news-name')}>Phó trưởng lab </div>
                     <div className={cx('news-content')}>
                        Phòng Đào tạo và Khoa học công nghệ - Học viện Công nghệ Bưu chính Viễn thông
                     </div>
                  </div>
                  <div className={cx('news-item')}>
                     <div className={cx('news-img')}></div>
                     <div className={cx('news-name')}>Phó trưởng lab </div>
                     <div className={cx('news-content')}>
                        Phòng Đào tạo và Khoa học công nghệ - Học viện Công nghệ Bưu chính Viễn thông
                     </div>
                  </div>
                  <div className={cx('news-item')}>
                     <div className={cx('news-img')}></div>
                     <div className={cx('news-name')}>Phó trưởng lab </div>
                     <div className={cx('news-content')}>
                        Phòng Đào tạo và Khoa học công nghệ - Học viện Công nghệ Bưu chính Viễn thông
                     </div>
                  </div>
                  <div className={cx('news-item')}>
                     <div className={cx('news-img')}></div>
                     <div className={cx('news-name')}>Phó trưởng lab </div>
                     <div className={cx('news-content')}>
                        Phòng Đào tạo và Khoa học công nghệ - Học viện Công nghệ Bưu chính Viễn thông
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default News;
