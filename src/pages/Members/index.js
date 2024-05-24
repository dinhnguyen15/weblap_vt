import { useTranslation } from 'react-i18next';
import styles from './Members.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const membersData = [
   {
      name: 'PGS.TS Hoàng Trọng Minh',
      position: 'Head of ICN Lab; Senior IEEE',
      description: 'Trưởng bộ môn ... Khoa Viễn thông 1 - Học viện Công nghệ Bưu chính Viễn thông ',
      email: 'hoangtrongminh@ptit.edu.vn',
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
      position: 'Deputy Head of ICN Lab',
      description: 'Phòng Đào tạo và Khoa học công nghệ - Học viện Công nghệ Bưu chính Viễn thông',
      email: 'trantrungduy@ptithcm.edu.vn',
      hIndex: 21,
      citations: '> 1400 citations',
      papers: '> 50',
      researchAreas: 'Lĩnh vực nghiên cứu',
      image: '/web-lab-vt/images/members/ttd.jpg',
      links: [
         { label: 'Google Scholar', url: '#' },
         { label: 'Researchgate', url: '#' },
         { label: 'Orcid', url: '#' },
      ],
   },
   {
      name: 'TS Nguyễn Việt Hưng',
      position: 'Researcher/ main member',
      description: 'Khoa Viễn thông 1 - Học viện Công nghệ Bưu chính Viễn thông',
      email: 'nvhung_vt1@ptit.edu.vn',
      hIndex: 21,
      citations: '> 1400 citations',
      papers: '> 50',
      researchAreas: 'Lĩnh vực nghiên cứu',
      image: '/web-lab-vt/images/members/nvh.jpg',
      links: [
         { label: 'Google Scholar', url: '#' },
         { label: 'Researchgate', url: '#' },
         { label: 'Orcid', url: '#' },
      ],
   },
   {
      name: 'GS.TS Lê Bảo Long',
      position: 'Science Advisor',
      description: 'INRS Uni, Canada',
      email: 'long.le@emt.inrs.ca',
      hIndex: 21,
      citations: '> 1400 citations',
      papers: '> 50',
      researchAreas: 'Lĩnh vực nghiên cứu',
      image: '/web-lab-vt/images/members/lbl.jpg',
      links: [
         { label: 'Google Scholar', url: '#' },
         { label: 'Researchgate', url: '#' },
         { label: 'Orcid', url: '#' },
      ],
   },
   {
      name: 'Dr Takeshi Takahashi',
      position: 'Collaborating Professor',
      description: 'NICT Institute, Japan',
      email: 'takeshi_takahashi@nict.go.jp',
      hIndex: 21,
      citations: '> 1400 citations',
      papers: '> 50',
      researchAreas: 'Lĩnh vực nghiên cứu',
      image: '/web-lab-vt/images/members/takeshi.jpg',
      links: [
         { label: 'Google Scholar', url: '#' },
         { label: 'Researchgate', url: '#' },
         { label: 'Orcid', url: '#' },
      ],
   },
   {
      name: 'PGS.TS Đào Như Ngọc',
      position: 'Collaborating Professor, Senior member of IEEE; Member of ACM',
      description: 'Sejong Uni, Korea',
      email: 'nndao@sejong.ac.kr',
      hIndex: 21,
      citations: '> 1400 citations',
      papers: '> 50',
      researchAreas: 'Lĩnh vực nghiên cứu',
      image: '/web-lab-vt/images/members/dnn.jpg',
      links: [
         { label: 'Google Scholar', url: '#' },
         { label: 'Researchgate', url: '#' },
         { label: 'Orcid', url: '#' },
      ],
   },
   {
      name: 'Dr Chalee Vorakulpipat',
      position: 'Collaborating Professor',
      description: 'NECTEC Ins, Thailand',
      email: 'chalee.vorakulpipat@nectec.or.th',
      hIndex: 21,
      citations: '> 1400 citations',
      papers: '> 50',
      researchAreas: 'Lĩnh vực nghiên cứu',
      image: '/web-lab-vt/images/members/chalee.jpg',
      links: [
         { label: 'Google Scholar', url: '#' },
         { label: 'Researchgate', url: '#' },
         { label: 'Orcid', url: '#' },
      ],
   },
   {
      name: 'PGS.TS Nguyễn Nam Hoàng',
      position: 'Collaborating Professor',
      description: 'Đại học Công nghệ UET',
      email: 'hoangnn@vnu.edu.vn',
      hIndex: 21,
      citations: '> 1400 citations',
      papers: '> 50',
      researchAreas: 'Lĩnh vực nghiên cứu',
      image: '/web-lab-vt/images/members/nnh.jpg',
      links: [
         { label: 'Google Scholar', url: '#' },
         { label: 'Researchgate', url: '#' },
         { label: 'Orcid', url: '#' },
      ],
   },
   {
      name: 'TS Nguyễn Trung Hiếu',
      position: 'Collaborating Professor',
      description: 'UNS Uni, Norway',
      email: 'Hieu.Nguyen@usn.no',
      hIndex: 21,
      citations: '> 1400 citations',
      papers: '> 50',
      researchAreas: 'Lĩnh vực nghiên cứu',
      image: '/web-lab-vt/images/members/nth.jpg',
      links: [
         { label: 'Google Scholar', url: '#' },
         { label: 'Researchgate', url: '#' },
         { label: 'Orcid', url: '#' },
      ],
   },
   {
      name: 'TS Nguyễn Kim Quang',
      position: 'Researcher/ member',
      description: 'Phó Viện trưởng CDiT - Học viện Công nghệ Bưu chính Viễn thông',
      email: 'quangnk@ptit.edu.vn',
      hIndex: 21,
      citations: '> 1400 citations',
      papers: '> 50',
      researchAreas: 'Lĩnh vực nghiên cứu',
      image: '/web-lab-vt/images/members/nkq.jpg',
      links: [
         { label: 'Google Scholar', url: '#' },
         { label: 'Researchgate', url: '#' },
         { label: 'Orcid', url: '#' },
      ],
   },
   {
      name: 'TS Phạm Anh Thư',
      position: 'Researcher/ member',
      description: 'Khoa Viễn thông 1 - Học viện Công nghệ Bưu chính Viễn thông',
      email: 'thupa@ptit.edu.vn',
      hIndex: 21,
      citations: '> 1400 citations',
      papers: '> 50',
      researchAreas: 'Lĩnh vực nghiên cứu',
      image: '/web-lab-vt/images/members/pat.jpg',
      links: [
         { label: 'Google Scholar', url: '#' },
         { label: 'Researchgate', url: '#' },
         { label: 'Orcid', url: '#' },
      ],
   },
   {
      name: 'ThS Nguyễn Thanh Trà',
      position: 'Researcher/ member',
      description: 'Khoa Viễn thông 1 - Học viện Công nghệ Bưu chính Viễn thông',
      email: 'trant@ptit.edu.vn',
      hIndex: 21,
      citations: '> 1400 citations',
      papers: '> 50',
      researchAreas: 'Lĩnh vực nghiên cứu',
      image: '/web-lab-vt/images/members/ntt.jpg',
      links: [
         { label: 'Google Scholar', url: '#' },
         { label: 'Researchgate', url: '#' },
         { label: 'Orcid', url: '#' },
      ],
   },
   {
      name: 'ThS Trần Huy Long',
      position: 'Researcher/ member',
      description: 'Khoa Viễn thông 1 - Học viện Công nghệ Bưu chính Viễn thông',
      email: 'longth@ptit.edu.vn',
      hIndex: 21,
      citations: '> 1400 citations',
      papers: '> 50',
      researchAreas: 'Lĩnh vực nghiên cứu',
      image: '/web-lab-vt/images/members/thl.jpg',
      links: [
         { label: 'Google Scholar', url: '#' },
         { label: 'Researchgate', url: '#' },
         { label: 'Orcid', url: '#' },
      ],
   },
   {
      name: 'TS Đỗ Trung Anh',
      position: 'Researcher/ member',
      description: 'Phòng QLKHCN&HTQT - Học viện Công nghệ Bưu chính Viễn thông',
      email: 'anhdt@ptit.edu.vn',
      hIndex: 21,
      citations: '> 1400 citations',
      papers: '> 50',
      researchAreas: 'Lĩnh vực nghiên cứu',
      image: '/web-lab-vt/images/members/dta.jpg',
      links: [
         { label: 'Google Scholar', url: '#' },
         { label: 'Researchgate', url: '#' },
         { label: 'Orcid', url: '#' },
      ],
   },
   {
      name: 'TS Lê Văn Ngọc',
      position: 'Researcher/ member',
      description: 'Khoa cơ bản 1 - Học viện Công nghệ Bưu chính Viễn thông',
      email: 'ngoclv@ptit.edu.vn',
      hIndex: 21,
      citations: '> 1400 citations',
      papers: '> 50',
      researchAreas: 'Lĩnh vực nghiên cứu',
      image: '/web-lab-vt/images/members/lvn.jpg',
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
