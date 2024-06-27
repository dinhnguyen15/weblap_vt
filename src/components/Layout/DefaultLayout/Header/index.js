import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

function Header() {
   const [isOpen, setIsOpen] = useState(false);
   const linksRef = useRef([]);
   const { t, i18n } = useTranslation();
   const [language, setLanguage] = useState('en');

   const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
      localStorage.setItem('i18nextLng', lng); // Lưu ngôn ngữ đã chọn vào localStorage
   };

   useEffect(() => {
      // Đặt ngôn ngữ mặc định là 'en' mỗi khi component được tải
      i18n.changeLanguage('en');
      localStorage.setItem('i18nextLng', 'en');
      setLanguage('en');

      const handleLanguageChange = (lng) => {
         setLanguage(lng);
      };

      i18n.on('languageChanged', handleLanguageChange);

      return () => {
         i18n.off('languageChanged', handleLanguageChange);
      };
   }, [i18n]);

   const toggleNavbar = () => {
      setIsOpen(!isOpen);
   };
   const handleMenuClick = (to) => {
      localStorage.setItem('activeLink', to);
      setIsOpen(false); // Đóng navbarLinks sau khi chọn menu
   };

   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            <nav className={cx('navbar')}>
               <NavLink to="/" className={cx('navbarLogo')}>
                  <img src={'/images/logo-labvt.jpg'} alt={'logo'} />
               </NavLink>
               <div className={cx('navbarLinks', { open: isOpen })}>
                  <NavLink
                     to="/"
                     className={({ isActive }) => cx('menu-item', { active: isActive })}
                     ref={(el) => (linksRef.current[0] = el)}
                     onClick={() => handleMenuClick('/')}
                  >
                     {t('home')}
                     <div className={cx('line')}></div>
                  </NavLink>
                  <NavLink
                     to="/news"
                     className={({ isActive }) => cx('menu-item', { active: isActive })}
                     ref={(el) => (linksRef.current[1] = el)}
                     onClick={() => handleMenuClick('/news')}
                  >
                     {t('news')}
                     <div className={cx('line')}></div>
                  </NavLink>
                  {/* <NavLink
                     to="/introduction"
                     className={({ isActive }) => cx('menu-item', { active: isActive })}
                     ref={(el) => (linksRef.current[2] = el)}
                     onClick={() => handleMenuClick('/introduction')}
                  >
                     {t('introduction')}
                     <div className={cx('line')}></div>
                  </NavLink> */}
                  <NavLink
                     to="/members"
                     className={({ isActive }) => cx('menu-item', { active: isActive })}
                     ref={(el) => (linksRef.current[3] = el)}
                     onClick={() => handleMenuClick('/members')}
                  >
                     {t('members')}
                     <div className={cx('line')}></div>
                  </NavLink>
                  <NavLink
                     to="/publications"
                     className={({ isActive }) => cx('menu-item', { active: isActive })}
                     ref={(el) => (linksRef.current[4] = el)}
                     onClick={() => handleMenuClick('/publications')}
                  >
                     {t('publications')}
                     <div className={cx('line')}></div>
                  </NavLink>
                  <NavLink
                     to="/callforpapers"
                     className={({ isActive }) => cx('menu-item', { active: isActive })}
                     ref={(el) => (linksRef.current[5] = el)}
                     onClick={() => handleMenuClick('/callforpapers')}
                  >
                     {t('call_for_papers')}
                     <div className={cx('line')}></div>
                  </NavLink>
                  <NavLink
                     to="/projects"
                     className={({ isActive }) => cx('menu-item', { active: isActive })}
                     ref={(el) => (linksRef.current[6] = el)}
                     onClick={() => handleMenuClick('/projects')}
                  >
                     {t('projects')}
                     <div className={cx('line')}></div>
                  </NavLink>
                  <NavLink
                     to="/contact"
                     className={({ isActive }) => cx('menu-item', { active: isActive })}
                     ref={(el) => (linksRef.current[7] = el)}
                     onClick={() => handleMenuClick('/contact')}
                  >
                     {t('contact_us')}
                     <div className={cx('line')}></div>
                  </NavLink>
                  <div className={cx('languageSwitcher')}>
                     <button onClick={() => changeLanguage(language === 'vi' ? 'en' : 'vi')}>
                        {language === 'vi' ? 'EN' : 'VI'}
                        <img
                           src={language === 'vi' ? '/images/uk-flag.png' : '/images/vietnam-flag.png'}
                           alt={language === 'vi' ? 'English' : 'Vietnamese'}
                           className={cx('flagIcon')}
                        />
                     </button>
                  </div>
               </div>
               <div className={cx('navbarToggle')} onClick={toggleNavbar}>
                  {isOpen ? (
                     <FontAwesomeIcon icon={faTimes} className={cx('icon', 'icon-open')} />
                  ) : (
                     <FontAwesomeIcon icon={faBars} className={cx('icon', 'icon-close')} />
                  )}
               </div>
            </nav>
         </div>
      </header>
   );
}

export default Header;
