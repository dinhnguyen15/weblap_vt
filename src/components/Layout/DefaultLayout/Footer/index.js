import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

function Footer() {
   const { t } = useTranslation();
   return (
      <div className={cx('wrapper', 'footer')}>
         <div className={cx('container')}>
            <div className={cx('footer-tl')}>{t('lab_name')}</div>
            <ul className={cx('footer-content')}>
               <li>{t('lab_address')}</li>
               <li>{t('organization_lab')}</li>
               <li>{t('organization_ptit')}</li>
               <li>{t('address')}</li>
               <li>{t('phone_fax')}</li>
               <li>{t('website')}</li>
            </ul>
         </div>
      </div>
   );
}

export default Footer;
