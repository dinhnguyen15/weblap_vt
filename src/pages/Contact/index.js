import { useTranslation } from 'react-i18next';
import styles from './Contact.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Contact() {
   const { t } = useTranslation();
   return (
      <div className={cx('wrapper')}>
         <div className={cx('page-head')}>
            <div className={cx('page-tl')}>ICN Lab</div>
            <div className={cx('page-des')}>{t('lab_name')}</div>
         </div>
         <div className={cx('container')}>
            <div className={cx('body-intro')}>
               <div className={cx('intro-head')}>
                  <div className={cx('intro-head-left')}>
                     <div className={cx('intro-tl')}>{t('gen_info')}</div>
                     <div className={cx('intro-item')}>
                        <div className={cx('intro-name')}>{t('lab_name_or')}</div>
                        <div className={cx('intro-des')}>
                           {t('vi_name')} Lab Mạng kết nối thông minh <br></br>
                           {t('en_name')} Intelligently Connected Networks Lab
                        </div>
                     </div>
                     <div className={cx('intro-item')}>
                        <div className={cx('intro-name')}>{t('lab_address_or')}</div>
                        <div className={cx('intro-des')}>{t('des_address')}</div>
                     </div>
                     <div className={cx('intro-item')}>
                        <div className={cx('intro-name')}>{t('organization_lab')}</div>
                        <div className={cx('intro-des')}>
                           {t('ptit')}
                           <br></br>
                           {t('address')}
                           <br></br>
                           {t('phone_fax')}
                           <br></br>
                           {t('website')}
                        </div>
                     </div>
                  </div>
                  <img
                     className={cx('intro-head-right')}
                     src={'/web-lab-vt/images/bg-lab-home-s2.jpg'}
                     alt={'Data-driven cybersecurity technology'}
                  />
               </div>
               <div className={cx('intro-content')}>
                  <div dangerouslySetInnerHTML={{ __html: t('content_contact') }} />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Contact;
