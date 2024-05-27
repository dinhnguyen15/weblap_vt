import { useTranslation } from 'react-i18next';
import styles from './Members.module.scss';
import classNames from 'classnames/bind';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

function Members() {
   const [members, setMembers] = useState([]);

   useEffect(() => {
      fetch('/web-lab-vt/membersData/members.json')
         .then((response) => response.json())
         .then((data) => setMembers(data));
   }, []);

   const { t } = useTranslation();

   const location = useLocation();
   const scrollRef = useRef(null);

   useEffect(() => {
      const hash = location.hash;
      if (hash) {
         const element = document.getElementById(hash.substring(1));
         if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
         }
      }
   }, [location]);

   return (
      <div className={cx('wrapper')}>
         <div className={cx('page-head')}>
            <div className={cx('page-tl')}>{t('members')} Lab</div>
            <div className={cx('page-des')}></div>
         </div>
         <div className={cx('container')}>
            <div className={cx('body-members')}>
               <div ref={scrollRef} className={cx('members-list')}>
                  {members.map((member) => (
                     <div id={member.id} key={member.id} className={cx('members-item')}>
                        <div className={cx('members-img')}>
                           <img src={member.image} alt={member.name} />
                        </div>
                        <div className={cx('members-info')}>
                           <div className={cx('members-name')}>{member.name}</div>
                           <div className={cx('members-position')}>{member.position}</div>
                           <div className={cx('members-des')}>{member.description}</div>
                           <ul className={cx('info-list')}>
                              <li className={cx('info-item')}>
                                 <div className={cx('line-info')}></div>
                                 Email: {member.email}
                              </li>
                              <li className={cx('info-item')}>
                                 <div className={cx('line-info')}></div>
                                 H-index: {member.hIndex}, {member.citations}
                              </li>
                              <li className={cx('info-item')}>
                                 <div className={cx('line-info')}></div>
                                 ISI-Scopus papers: {member.papers}
                              </li>
                              <li className={cx('info-item')}>
                                 <div className={cx('line-info')}></div>
                                 {member.researchAreas}
                              </li>
                           </ul>
                           <div className={cx('info-research')}>
                              {member.links.map((link, linkIndex) => (
                                 <div key={linkIndex}>
                                    <a className={cx('re-btn')} href={link.url}>
                                       {link.label}
                                    </a>
                                    {/* {link.label} */}
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
               {/* <div className={cx('members-list')}>
                  <div className={cx('members-item')}>
                     <div className={cx('members-img')}>
                        <img src={'/web-lab-vt/images/members/htm2.png'} alt={'PGS.TS Hoang Trong Minh'} />
                     </div>
                     <div className={cx('members-info')}>
                        <div className={cx('members-name')}>PGS.TS Hoàng Trọng Minh</div>
                        <div className={cx('members-position')}>Trưởng Lab</div>
                        <div className={cx('members-des')}>
                           Trưởng bộ môn ... Khoa Viễn thông 1 - Học viện Công nghệ Bưu chính Viễn thông
                        </div>
                        <ul className={cx('info-list')}>
                           <li className={cx('info-item')}>
                              <div className={cx('line-info')}></div>
                              Email: minhht@ptit.edu.vn
                           </li>
                           <li className={cx('info-item')}>
                              <div className={cx('line-info')}></div>
                              H-index: 21, &#62; 1400 citations
                           </li>
                           <li className={cx('info-item')}>
                              <div className={cx('line-info')}></div>
                              ISI-Scopus papers: &#62;50
                           </li>
                           <li className={cx('info-item')}>
                              <div className={cx('line-info')}></div>
                              Lĩnh vực nghiên cứu:
                           </li>
                        </ul>
                        <div className={cx('info-research')}>
                           <div className={cx('re-btn')}>Google Scholar</div>
                           <div className={cx('re-btn')}>Researchgate</div>
                           <div className={cx('re-btn')}>Orcid</div>
                        </div>
                     </div>
                  </div>
                  <div className={cx('members-item')}>
                     <div className={cx('members-img')}>
                        <img src={'/web-lab-vt/images/members/ttd.png'} alt={'PGS.TS Tran Trung Duy'} />
                     </div>
                     <div className={cx('members-info')}>
                        <div className={cx('members-name')}>PGS.TS Trần Trung Duy</div>
                        <div className={cx('members-position')}>Phó trưởng Lab</div>
                        <div className={cx('members-des')}>
                           Phòng Đào tạo và Khoa học công nghệ - Học viện Công nghệ Bưu chính Viễn thông
                        </div>
                        <ul className={cx('info-list')}>
                           <li className={cx('info-item')}>
                              <div className={cx('line-info')}></div>
                              Email: minhht@ptit.edu.vn
                           </li>
                           <li className={cx('info-item')}>
                              <div className={cx('line-info')}></div>
                              H-index: 21, &#62; 1400 citations
                           </li>
                           <li className={cx('info-item')}>
                              <div className={cx('line-info')}></div>
                              ISI-Scopus papers: &#62;50
                           </li>
                           <li className={cx('info-item')}>
                              <div className={cx('line-info')}></div>
                              Lĩnh vực nghiên cứu:
                           </li>
                        </ul>
                        <div className={cx('info-research')}>
                           <div className={cx('re-btn')}>Google Scholar</div>
                           <div className={cx('re-btn')}>Researchgate</div>
                           <div className={cx('re-btn')}>Orcid</div>
                        </div>
                     </div>
                  </div>
                  <div className={cx('members-item')}>
                     <div className={cx('members-img')}>
                        <img src={'/web-lab-vt/images/members/nvh.png'} alt={'TS Nguyen Viet Hung'} />
                     </div>
                     <div className={cx('members-info')}>
                        <div className={cx('members-name')}>TS Nguyễn Việt Hưng</div>
                        <div className={cx('members-position')}>Thành viên chính</div>
                        <div className={cx('members-des')}>
                           Trưởng bộ môn ... Khoa Viễn thông 1 - Học viện Công nghệ Bưu chính Viễn thông
                        </div>
                        <ul className={cx('info-list')}>
                           <li className={cx('info-item')}>
                              <div className={cx('line-info')}></div>
                              Email: minhht@ptit.edu.vn
                           </li>
                           <li className={cx('info-item')}>
                              <div className={cx('line-info')}></div>
                              H-index: 21, &#62; 1400 citations
                           </li>
                           <li className={cx('info-item')}>
                              <div className={cx('line-info')}></div>
                              ISI-Scopus papers: &#62;50
                           </li>
                           <li className={cx('info-item')}>
                              <div className={cx('line-info')}></div>
                              Lĩnh vực nghiên cứu:
                           </li>
                        </ul>
                        <div className={cx('info-research')}>
                           <div className={cx('re-btn')}>Google Scholar</div>
                           <div className={cx('re-btn')}>Researchgate</div>
                           <div className={cx('re-btn')}>Orcid</div>
                        </div>
                     </div>
                  </div>
               </div> */}
            </div>
         </div>
      </div>
   );
}

export default Members;
