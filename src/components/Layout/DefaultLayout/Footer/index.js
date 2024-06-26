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
               <li>{t('address_footer')}</li>
               <li>{t('phone_fax')}</li>
               <li>{t('email')}</li>
               <li>{t('website')}</li>
            </ul>
         </div>
      </div>
   );
}

export default Footer;
