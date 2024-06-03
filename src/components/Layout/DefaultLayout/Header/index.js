import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

function Header() {
   const [isOpen, setIsOpen] = useState(false);
   const [lineStyle, setLineStyle] = useState({});
   const location = useLocation();
   const linksRef = useRef([]);
   const { t, i18n } = useTranslation();
   const [language, setLanguage] = useState(() => {
      const storedLanguage = localStorage.getItem('i18nextLng') || 'en';
      return storedLanguage;
   });

   const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
      localStorage.setItem('i18nextLng', lng); // Lưu ngôn ngữ đã chọn vào localStorage
   };

   useEffect(() => {
      const handleLanguageChange = (lng) => {
         setLanguage(lng);
      };

      i18n.on('languageChanged', handleLanguageChange);

      // Thiết lập ngôn ngữ mặc định nếu không có ngôn ngữ nào được lưu
      if (!localStorage.getItem('i18nextLng')) {
         i18n.changeLanguage('en');
      }

      return () => {
         i18n.off('languageChanged', handleLanguageChange);
      };
   }, [i18n]);

   useEffect(() => {
      const updateLineStyle = () => {
         const activeLink = linksRef.current.find((link) => link && link.classList.contains(cx('active')));
         if (activeLink) {
            const { offsetLeft, offsetWidth } = activeLink;
            setLineStyle({
               left: offsetLeft,
               width: offsetWidth,
            });
         }
      };

      updateLineStyle();

      window.addEventListener('resize', updateLineStyle);

      return () => {
         window.removeEventListener('resize', updateLineStyle);
      };
   }, [location]);

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
                  <img src={'/web-lab-vt/images/logo-labvt.jpg'} alt={'logo'} />
               </NavLink>
               <div className={cx('navbarLinks', { open: isOpen })}>
                  <div className={cx('line')} style={lineStyle}></div>
                  <NavLink
                     to="/"
                     className={({ isActive }) => cx('menu-item', { active: isActive })}
                     ref={(el) => (linksRef.current[0] = el)}
                     onClick={() => handleMenuClick('/')}
                  >
                     {t('home')}
                  </NavLink>
                  <NavLink
                     to="/news"
                     className={({ isActive }) => cx('menu-item', { active: isActive })}
                     ref={(el) => (linksRef.current[1] = el)}
                     onClick={() => handleMenuClick('/news')}
                  >
                     {t('news')}
                  </NavLink>
                  {/* <NavLink
                     to="/introduction"
                     className={({ isActive }) => cx('menu-item', { active: isActive })}
                     ref={(el) => (linksRef.current[2] = el)}
                     onClick={() => handleMenuClick('/introduction')}
                  >
                     {t('introduction')}
                  </NavLink> */}
                  <NavLink
                     to="/members"
                     className={({ isActive }) => cx('menu-item', { active: isActive })}
                     ref={(el) => (linksRef.current[3] = el)}
                     onClick={() => handleMenuClick('/members')}
                  >
                     {t('members')}
                  </NavLink>
                  <NavLink
                     to="/publications"
                     className={({ isActive }) => cx('menu-item', { active: isActive })}
                     ref={(el) => (linksRef.current[4] = el)}
                     onClick={() => handleMenuClick('/publications')}
                  >
                     {t('publications')}
                  </NavLink>
                  <NavLink
                     to="/callforpapers"
                     className={({ isActive }) => cx('menu-item', { active: isActive })}
                     ref={(el) => (linksRef.current[5] = el)}
                     onClick={() => handleMenuClick('/callforpapers')}
                  >
                     {t('call_for_papers')}
                  </NavLink>
                  <NavLink
                     to="/others"
                     className={({ isActive }) => cx('menu-item', { active: isActive })}
                     ref={(el) => (linksRef.current[6] = el)}
                     onClick={() => handleMenuClick('/others')}
                  >
                     {t('others')}
                  </NavLink>
                  <NavLink
                     to="/contact"
                     className={({ isActive }) => cx('menu-item', { active: isActive })}
                     ref={(el) => (linksRef.current[7] = el)}
                     onClick={() => handleMenuClick('/contact')}
                  >
                     {t('contact_us')}
                  </NavLink>
                  <div className={cx('languageSwitcher')}>
                     <button onClick={() => changeLanguage(language === 'en' ? 'vi' : 'en')}>
                        {language === 'en' ? 'VI' : 'EN'}
                        <img
                           src={
                              language === 'en'
                                 ? '/web-lab-vt/images/vietnam-flag.png'
                                 : '/web-lab-vt/images/uk-flag.png'
                           }
                           alt={language === 'en' ? 'Vietnamese' : 'English'}
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
