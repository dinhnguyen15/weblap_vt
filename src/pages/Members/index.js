import { useTranslation } from 'react-i18next';
import styles from './Members.module.scss';
import classNames from 'classnames/bind';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

function Members() {
   const { i18n, t } = useTranslation();
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
                                 <p className={cx('item-research')}>{member.researchAreas}</p>
                              </li>
                           </ul>
                           <div className={cx('info-research')}>
                              {member.links.map((link, linkIndex) => (
                                 <div key={linkIndex}>
                                    <a
                                       className={cx('re-btn')}
                                       href={link.url}
                                       target="_blank"
                                       rel="noopener noreferrer"
                                    >
                                       {link.label}
                                    </a>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}

export default Members;
