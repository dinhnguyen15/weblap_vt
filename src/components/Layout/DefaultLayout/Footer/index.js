import styles from './Footer.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Footer() {
   return (
      <div className={cx('wrapper', 'footer')}>
         <div className={cx('container')}>
            <ul className={cx('footer-tl')}>Lab Mạng kết nối thông minh</ul>
            <ul className={cx('footer-content')}>
               <li>Địa chỉ phòng Lab: Phòng mạng viễn thông.</li>
               <li>Tổ chức phụ trách phòng Lab:</li>
               <li>Tổ chức: Học viện Công nghệ Bưu chính Viễn thông</li>
               <li>Địa chỉ: 122 Hoàng Quốc Việt, Cầu Giấy, Hà Nội</li>
               <li>Điện thoại/Fax: 024-357446799 / 024-3779432</li>
               <li>Website: ptit.edu.vn</li>
            </ul>
         </div>
      </div>
   );
}

export default Footer;
