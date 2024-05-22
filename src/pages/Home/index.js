import { useTranslation } from 'react-i18next';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const cx = classNames.bind(styles);

function CustomArrow(props) {
   return null; // Ẩn mũi tên điều hướng trái phải
}

function Home() {
   const { t } = useTranslation();
   const settings = {
      dots: true, // Hiển thị chấm tròn chỉ định slide hiện tại
      infinite: true, // Vòng lặp vô hạn
      speed: 500, // Tốc độ chuyển slide (ms)
      slidesToShow: 3, // Số lượng slide hiển thị cùng lúc
      slidesToScroll: 1, // Số lượng slide cuộn khi chuyển
      autoplay: true, // Tự động chạy
      autoplaySpeed: 3000, // Thời gian chờ giữa các slide (ms)
      prevArrow: <CustomArrow />,
      nextArrow: <CustomArrow />,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
         },
         {
            breakpoint: 650,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   };
   return (
      <div className={cx('wrapper')}>
         <div className={cx('background-home')}>
            <h3 className={cx('tl-home')}>ICN LAB</h3>
         </div>
         <div className={cx('container')}>
            <div className={cx('about-body')}>
               <div className={cx('about-img')}>
                  <div className={cx('item-img1')}></div>
                  <div className={cx('item-img2')}></div>
               </div>
               <div className={cx('about-info')}>
                  <div className={cx('about-tl')}>{t('about_us')}</div>
                  <div className={cx('about-content')}>{t('about_content')}</div>
               </div>
            </div>

            <div className={cx('news-body')}>
               <div className={cx('news-body-left')}>
                  <div className={cx('about-tl')}>{t('news')}</div>
                  <ul className={cx('news-list')}>
                     <li className={cx('news-item')}>2023 VINIF PhD scholarships</li>
                     <li className={cx('news-item')}>IoT Challenge 2023</li>
                  </ul>
               </div>
               <div className={cx('news-body-right')}>
                  <div className={cx('news-high')}>
                     <div className={cx('news-img')}></div>
                     <h5 className={cx('news-tl')}>2023 VINIF PhD scholarships</h5>
                     <p className={cx('news-content')}>
                        Congratulations to Vu Hoang Dieu, a key member of SSALab, for winning the VinIF PhD.
                        scholarship. The announcement ceremony was held on Jan. 17, 2024.
                     </p>
                  </div>
               </div>
            </div>
         </div>

         <div className={cx('members-body')}>
            <div className={cx('members-intro')}>
               <div className={cx('about-tl')}>{t('members')}</div>
               <div className={cx('members-content')}>
                  Welcome to SSA laboratory. Our research delivers impact across the whole spectrum of communications,
                  algorithms, and signal processing, ...
               </div>
            </div>
            <div className={cx('members-slide')}>
               <div className={cx('members-bg')}></div>
               <div className={cx('members-slide-list')}>
                  <Slider {...settings}>
                     <div className={cx('members-item')}>
                        <div className={cx('members-box')}>
                           <img
                              className={cx('members-img')}
                              src={'/web-lab-vt/images/members/htm.png'}
                              alt={'PGS.TS Hoang Trong Minh'}
                           />
                           <h5 className={cx('members-name')}>PGS.TS Hoàng Trọng Minh</h5>
                           <p className={cx('members-address')}>Học viện Công nghệ Bưu chính Viễn thông</p>
                        </div>
                     </div>
                     <div className={cx('members-item')}>
                        <div className={cx('members-box')}>
                           <img
                              className={cx('members-img')}
                              src={'/web-lab-vt/images/members/nkq.png'}
                              alt={'TS Nguyen Kim Quang'}
                           />
                           <h5 className={cx('members-name')}>TS Nguyễn Kim Quang</h5>
                           <p className={cx('members-address')}>Học viện Công nghệ Bưu chính Viễn thông</p>
                        </div>
                     </div>
                     <div className={cx('members-item')}>
                        <div className={cx('members-box')}>
                           <img
                              className={cx('members-img')}
                              src={'/web-lab-vt/images/members/htm.png'}
                              alt={'PGS.TS Hoang Trong Minh'}
                           />
                           <h5 className={cx('members-name')}>PGS.TS Hoàng Trọng Minh</h5>
                           <p className={cx('members-address')}>Học viện Công nghệ Bưu chính Viễn thông</p>
                        </div>
                     </div>
                     <div className={cx('members-item')}>
                        <div className={cx('members-box')}>
                           <img
                              className={cx('members-img')}
                              src={'/web-lab-vt/images/members/nkq.png'}
                              alt={'TS Nguyen Kim Quang'}
                           />
                           <h5 className={cx('members-name')}>TS Nguyễn Kim Quang</h5>
                           <p className={cx('members-address')}>Học viện Công nghệ Bưu chính Viễn thông</p>
                        </div>
                     </div>
                  </Slider>
               </div>
            </div>
         </div>

         <div className={cx('container')}>
            <div className={cx('publications-body')}>
               <div className={cx('about-tl')}>{t('publications')}</div>
               <div className={cx('pub-item')}>
                  <div className={cx('pub-tl')}>
                     2024<br></br>
                     ISI/SCOPUS JOURNALS/BOOK CHAPTERS
                  </div>
                  <div className={cx('pub-content')}>
                     2. Mirdula K, Chandrakumar T, Mohd Asif Shah, Duc-Tan Tran, NR Physical Layer, Machine Learning for
                     Mobile Communications, 1st Edition, CRC Press, 17 pages, ISBN 9781003306290, 2024 .<br></br>
                     1. Pham, Q. T., Pham, D. D., Can, K. L., To, H. D., & Vu, H. D. (2024). Vehicle Type Classification
                     with Small Dataset and Transfer Learning Techniques. EAI Endorsed Transactions on Industrial
                     Networks and Intelligent Systems, 11(2), e2-e2. 
                  </div>
               </div>
               <div className={cx('pub-item')}>
                  <div className={cx('pub-tl')}>
                     2023<br></br>
                     ISI/SCOPUS JOURNALS/BOOK CHAPTERS
                  </div>
                  <div className={cx('pub-content')}>
                     9. Tran Duc Tan, Tran Duc Nghia, Nguyen Quang Huy, The system monitors and classifies user
                     activities using a three-axis acceleration sensor combined with a carried smartphone, Nov. 2023.
                     This "useful solution" has been certificated by the Intellectual Property Department, Ministry of
                     Science and Technology, No.3417. <br></br>
                     8. Duc-Tan Tran, Ha, N. T. T., Hai, L. Q., Tran, D. N., & Shankar, A. (2023). Shear complex modulus
                     imaging utilizing frequency combination in the least mean square/algebraic Helmholtz
                     inversion. Multimedia Tools and Applications,
                     1-18, https://doi.org/10.1007/s11042-023-17061-7 , [Q1,R2] <br></br>
                     7. Nhung Tran Thi Hong, Giang L. Nguyen, Nguyen Quang Huy, Do Viet Manh, Duc-Nghia Tran, Duc-Tan
                     Tran, A Low-cost Real-time IoT Human Activity Recognition System Based on Wearable Sensor and the
                     Supervised Learning Algorithms, Measurement, 2023, 113231, ISSN 0263-2241, Vol. 218, August 2023,
                     113231, [Q1,R7]<br></br>
                     6. Van, N. H., Van Thanh, P., Tran, D. N., Duc-Tan Tran* (2023). A new model of air quality
                     prediction using lightweight machine learning. International Journal of Environmental Science and
                     Technology, 20(3), 2983-2994. [Q1,R2]
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Home;
