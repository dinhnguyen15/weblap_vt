import Footer from './Footer';
import Header from './Header';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
   return (
      <div>
         <Header />
         <div className={cx('body-page')}>{children}</div>
         <Footer />
      </div>
   );
}

export default DefaultLayout;
