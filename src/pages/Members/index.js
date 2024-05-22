import { useTranslation } from 'react-i18next';
import styles from './Members.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const membersData = [
   {
      name: 'PGS.TS Hoàng Trọng Minh',
      position: 'Trưởng Lab',
      description: 'Trưởng bộ môn ... Khoa Viễn thông 1 - Học viện Công nghệ Bưu chính Viễn thông',
      email: 'minhht@ptit.edu.vn',
      hIndex: 21,
      citations: '> 1400 citations',
      papers: '> 50',
      researchAreas: 'Lĩnh vực nghiên cứu',
      image: '/web-lab-vt/images/members/htm2.png',
      links: [
         { label: 'Google Scholar', url: '#' },
         { label: 'Researchgate', url: '#' },
         { label: 'Orcid', url: '#' },
      ],
   },
   {
      name: 'PGS.TS Trần Trung Duy',
      position: 'Phó trưởng Lab',
      description: 'Phòng Đào tạo và Khoa học công nghệ - Học viện Công nghệ Bưu chính Viễn thông',
      email: 'duytt@ptit.edu.vn',
      hIndex: 21,
      citations: '> 1400 citations',
      papers: '> 50',
      researchAreas: 'Lĩnh vực nghiên cứu',
      image: '/web-lab-vt/images/members/ttd.png',
      links: [
         { label: 'Google Scholar', url: '#' },
         { label: 'Researchgate', url: '#' },
         { label: 'Orcid', url: '#' },
      ],
   },
   {
      name: 'TS Nguyễn Việt Hưng',
      position: 'Thành viên chính',
      description: 'Khoa Viễn thông 1 - Học viện Công nghệ Bưu chính Viễn thông',
      email: 'hungnv@ptit.edu.vn',
      hIndex: 21,
      citations: '> 1400 citations',
      papers: '> 50',
      researchAreas: 'Lĩnh vực nghiên cứu',
      image: '/web-lab-vt/images/members/nvh.png',
      links: [
         { label: 'Google Scholar', url: '#' },
         { label: 'Researchgate', url: '#' },
         { label: 'Orcid', url: '#' },
      ],
   },
   {
      name: 'TS Đỗ Trung Anh',
      position: 'Cộng tác viên',
      description: 'Phòng QLKHCN&HTQT - Học viện Công nghệ Bưu chính Viễn thông',
      email: 'anhdt@ptit.edu.vn',
      hIndex: 21,
      citations: '> 1400 citations',
      papers: '> 50',
      researchAreas: 'Lĩnh vực nghiên cứu',
      image: '/web-lab-vt/images/members/nvh.png',
      links: [
         { label: 'Google Scholar', url: '#' },
         { label: 'Researchgate', url: '#' },
         { label: 'Orcid', url: '#' },
      ],
   },
   {
      name: 'TS Phạm Anh Thư',
      position: 'Cộng tác viên',
      description: 'Khoa Viễn thông 1 - Học viện Công nghệ Bưu chính Viễn thông',
      email: 'thupa@ptit.edu.vn',
      hIndex: 21,
      citations: '> 1400 citations',
      papers: '> 50',
      researchAreas: 'Lĩnh vực nghiên cứu',
      image: '/web-lab-vt/images/members/nvh.png',
      links: [
         { label: 'Google Scholar', url: '#' },
         { label: 'Researchgate', url: '#' },
         { label: 'Orcid', url: '#' },
      ],
   },
   {
      name: 'ThS Nguyễn Thanh Trà',
      position: 'Cộng tác viên',
      description: 'Khoa Viễn thông 1 - Học viện Công nghệ Bưu chính Viễn thông',
      email: 'trant@ptit.edu.vn',
      hIndex: 21,
      citations: '> 1400 citations',
      papers: '> 50',
      researchAreas: 'Lĩnh vực nghiên cứu',
      image: '/web-lab-vt/images/members/nvh.png',
      links: [
         { label: 'Google Scholar', url: '#' },
         { label: 'Researchgate', url: '#' },
         { label: 'Orcid', url: '#' },
      ],
   },
   {
      name: 'ThS Trần Huy Long',
      position: 'Cộng tác viên',
      description: 'Khoa Viễn thông 1 - Học viện Công nghệ Bưu chính Viễn thông',
      email: 'longth@ptit.edu.vn',
      hIndex: 21,
      citations: '> 1400 citations',
      papers: '> 50',
      researchAreas: 'Lĩnh vực nghiên cứu',
      image: '/web-lab-vt/images/members/nvh.png',
      links: [
         { label: 'Google Scholar', url: '#' },
         { label: 'Researchgate', url: '#' },
         { label: 'Orcid', url: '#' },
      ],
   },
   {
      name: 'TS Lê Văn Ngọc',
      position: 'Cộng tác viên',
      description: 'Khoa cơ bản 1 - Học viện Công nghệ Bưu chính Viễn thông',
      email: 'ngoclv@ptit.edu.vn',
      hIndex: 21,
      citations: '> 1400 citations',
      papers: '> 50',
      researchAreas: 'Lĩnh vực nghiên cứu',
      image: '/web-lab-vt/images/members/nvh.png',
      links: [
         { label: 'Google Scholar', url: '#' },
         { label: 'Researchgate', url: '#' },
         { label: 'Orcid', url: '#' },
      ],
   },
   {
      name: 'TS Nguyễn Kim Quang',
      position: 'Cộng tác viên',
      description: 'Phó Viện trưởng CDiT - Học viện Công nghệ Bưu chính Viễn thông',
      email: 'quangnk@ptit.edu.vn',
      hIndex: 21,
      citations: '> 1400 citations',
      papers: '> 50',
      researchAreas: 'Lĩnh vực nghiên cứu',
      image: '/web-lab-vt/images/members/nvh.png',
      links: [
         { label: 'Google Scholar', url: '#' },
         { label: 'Researchgate', url: '#' },
         { label: 'Orcid', url: '#' },
      ],
   },
   {
      name: 'Dr Takeshi Takahashi',
      position: 'Cộng tác viên',
      description: 'NICT Institute, Japan',
      email: '@gmail.com',
      hIndex: 21,
      citations: '> 1400 citations',
      papers: '> 50',
      researchAreas: 'Lĩnh vực nghiên cứu',
      image: '/web-lab-vt/images/members/nvh.png',
      links: [
         { label: 'Google Scholar', url: '#' },
         { label: 'Researchgate', url: '#' },
         { label: 'Orcid', url: '#' },
      ],
   },
   {
      name: 'Dr Chalee Vorakulpipat',
      position: 'Cộng tác viên',
      description: 'NECTEC Ins, Thailand',
      email: '@gmail.com',
      hIndex: 21,
      citations: '> 1400 citations',
      papers: '> 50',
      researchAreas: 'Lĩnh vực nghiên cứu',
      image: '/web-lab-vt/images/members/nvh.png',
      links: [
         { label: 'Google Scholar', url: '#' },
         { label: 'Researchgate', url: '#' },
         { label: 'Orcid', url: '#' },
      ],
   },
   {
      name: 'PGS.TS Nguyễn Nam Hoàng',
      position: 'Cộng tác viên',
      description: 'Đại học Công nghệ UET',
      email: '@gmail.com',
      hIndex: 21,
      citations: '> 1400 citations',
      papers: '> 50',
      researchAreas: 'Lĩnh vực nghiên cứu',
      image: '/web-lab-vt/images/members/nvh.png',
      links: [
         { label: 'Google Scholar', url: '#' },
         { label: 'Researchgate', url: '#' },
         { label: 'Orcid', url: '#' },
      ],
   },
   {
      name: 'PGS.TS Đào Như Ngọc',
      position: 'Cộng tác viên',
      description: 'Sejong Uni, Korea',
      email: '@gmail.com',
      hIndex: 21,
      citations: '> 1400 citations',
      papers: '> 50',
      researchAreas: 'Lĩnh vực nghiên cứu',
      image: '/web-lab-vt/images/members/nvh.png',
      links: [
         { label: 'Google Scholar', url: '#' },
         { label: 'Researchgate', url: '#' },
         { label: 'Orcid', url: '#' },
      ],
   },
   {
      name: 'TS Nguyễn Trung Hiếu',
      position: 'Cộng tác viên',
      description: 'UNS Uni, Norway',
      email: '@gmail.com',
      hIndex: 21,
      citations: '> 1400 citations',
      papers: '> 50',
      researchAreas: 'Lĩnh vực nghiên cứu',
      image: '/web-lab-vt/images/members/nvh.png',
      links: [
         { label: 'Google Scholar', url: '#' },
         { label: 'Researchgate', url: '#' },
         { label: 'Orcid', url: '#' },
      ],
   },
   {
      name: 'GS.TS Lê Bảo Long',
      position: 'Cộng tác viên',
      description: 'INRS Uni, Canada',
      email: '@gmail.com',
      hIndex: 21,
      citations: '> 1400 citations',
      papers: '> 50',
      researchAreas: 'Lĩnh vực nghiên cứu',
      image: '/web-lab-vt/images/members/nvh.png',
      links: [
         { label: 'Google Scholar', url: '#' },
         { label: 'Researchgate', url: '#' },
         { label: 'Orcid', url: '#' },
      ],
   },
];

function Members() {
   const { t } = useTranslation();

   return (
      <div className={cx('wrapper')}>
         <div className={cx('page-head')}>
            <div className={cx('page-tl')}>{t('members')} Lab</div>
            <div className={cx('page-des')}></div>
         </div>
         <div className={cx('container')}>
            <div className={cx('body-members')}>
               <div className={cx('members-list')}>
                  {membersData.map((member, index) => (
                     <div key={index} className={cx('members-item')}>
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
                                 <div key={linkIndex} className={cx('re-btn')}>
                                    {/* <a href={link.url}>{link.label}</a> */}
                                    {link.label}
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
