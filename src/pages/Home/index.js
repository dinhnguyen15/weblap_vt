import { useTranslation } from 'react-i18next';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function CustomArrow(props) {
   return null; // Ẩn mũi tên điều hướng trái phải
}

function Home() {
   const { t, i18n } = useTranslation();
   const [news, setNews] = useState([]);

   useEffect(() => {
      const fetchNews = fetch('/web-lab-vt/newsData/news.json').then((response) => response.json());

      Promise.all([fetchNews])
         .then(([newsData]) => {
            setNews(newsData);
         })
         .catch((error) => {
            console.error('Error fetching data:', error);
         });
   }, []);

   // Sắp xếp bài viết theo ID giảm dần và lấy ra 5 bài viết đầu tiên
   const latestNews = news.sort((a, b) => b.id - a.id).slice(1, 6);

   // hightlight 1 news
   const hlNews = news.sort((a, b) => b.id - a.id).slice(0, 1);

   const [members, setMembers] = useState([]);

   useEffect(() => {
      const loadMembersData = (language) => {
         const url =
            language === 'en' ? '/web-lab-vt/membersData/members-en.json' : '/web-lab-vt/membersData/members-vi.json';

         fetch(url)
            .then((response) => response.json())
            .then((data) => setMembers(data))
            .catch((error) => console.error('Error fetching members data:', error));
      };

      // Load data on initial render
      loadMembersData(i18n.language);

      // Reload data when language changes
      const handleLanguageChange = (lng) => {
         loadMembersData(lng);
      };

      i18n.on('languageChanged', handleLanguageChange);

      return () => {
         i18n.off('languageChanged', handleLanguageChange);
      };
   }, [i18n]);

   const [publications, setPublications] = useState([]);

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

   const newestPublications = publications.sort((a, b) => b.date_time - a.date_time).slice(0, 3);

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
                  <div className={cx('about-content')}>
                     <div dangerouslySetInnerHTML={{ __html: t('about_content') }} />
                  </div>
               </div>
            </div>

            <div className={cx('news-body')}>
               <div className={cx('news-body-left')}>
                  <div className={cx('about-tl')}>{t('news')}</div>
                  <ul className={cx('news-list')}>
                     {latestNews.map((item) => (
                        <Link to={`/news/${item.id}`} key={item.id}>
                           <li key={item.id} className={cx('news-item')}>
                              {item.title}
                           </li>
                        </Link>
                     ))}
                     {/* <li className={cx('news-item')}>IoT Challenge 2023</li> */}
                  </ul>
               </div>
               <div className={cx('news-body-right')}>
                  {hlNews.map((item) => (
                     <Link to={`/news/${item.id}`} key={item.id}>
                        <div className={cx('news-high')}>
                           <div className={cx('img-body')}>
                              <img className={cx('news-img')} src={item.image} alt={item.title} />
                           </div>
                           <h5 className={cx('news-tl')}>{item.title}</h5>
                           <p className={cx('news-content')}>{item.content}</p>
                        </div>
                     </Link>
                  ))}
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
                     {members.map((member) => (
                        <div id={member.id} key={member.id} className={cx('members-item')}>
                           <Link to={`/members#${member.id}`}>
                              <div className={cx('members-box')}>
                                 <img className={cx('members-img')} src={member.image} alt={member.name} />
                                 <h5 className={cx('members-name')}>{member.name}</h5>
                                 <p className={cx('members-address')}>{member.description}</p>
                              </div>
                           </Link>
                        </div>
                     ))}
                  </Slider>
               </div>
            </div>
         </div>

         <div className={cx('container')}>
            <div className={cx('publications-body')}>
               <div className={cx('about-tl')}>{t('publications')}</div>
               <div className={cx('pub-list')}>
                  {newestPublications.map((pub) => (
                     <a
                        href={pub.link_pub}
                        key={pub.id}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cx('pub-item')}
                     >
                        <div className={cx('pub-date')}>{pub.originalDate}</div>
                        <div className={cx('pub-tl')}>{pub.title}</div>
                        <div className={cx('pub-content')}>{pub.author}</div>
                     </a>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}

export default Home;
