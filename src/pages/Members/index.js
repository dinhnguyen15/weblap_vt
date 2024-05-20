import styles from './Members.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Members() {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('page-head')}>
            <div className={cx('page-tl')}>Thành viên Lab</div>
            <div className={cx('page-des')}></div>
         </div>
         <div className={cx('container')}>
            <div className={cx('body-members')}>
               <div className={cx('members-list')}>
                  <div className={cx('members-item')}>
                     <div className={cx('members-img')}>
                        <img src={'./images/members/htm2.png'} alt={'PGS.TS Hoang Trong Minh'} />
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
                        <img src={'./images/members/ttd.png'} alt={'PGS.TS Tran Trung Duy'} />
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
                        <img src={'./images/members/nvh.png'} alt={'TS Nguyen Viet Hung'} />
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
               </div>
            </div>
         </div>
      </div>
   );
}

export default Members;
