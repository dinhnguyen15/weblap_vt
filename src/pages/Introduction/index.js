import styles from './Introduction.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Introduction() {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('page-head')}>
            <div className={cx('page-tl')}>ICN Lab</div>
            <div className={cx('page-des')}>Lab Mạng kết nối thông minh</div>
         </div>
         <div className={cx('container')}>
            <div className={cx('body-intro')}>
               <div className={cx('intro-head')}>
                  <div className={cx('intro-head-left')}>
                     <div className={cx('intro-tl')}>Thông tin chung:</div>
                     <div className={cx('intro-item')}>
                        <div className={cx('intro-name')}>Tên phòng Lab:</div>
                        <div className={cx('intro-des')}>
                           Tên tiếng Việt: Lab Mạng kết nối thông minh <br></br>Tên tiếng Anh: Intelligently Connected
                           Network Lab
                        </div>
                     </div>
                     <div className={cx('intro-item')}>
                        <div className={cx('intro-name')}>Địa chỉ phòng Lab:</div>
                        <div className={cx('intro-des')}>
                           Phòng mạng viễn thông - Khoa Viễn thông 1 - Học viện Công nghệ Bưu chính Viễn thông
                        </div>
                     </div>
                     <div className={cx('intro-item')}>
                        <div className={cx('intro-name')}>Tổ chức phụ trách phòng Lab:</div>
                        <div className={cx('intro-des')}>
                           Học viện Công nghệ Bưu chính Viễn thông<br></br>
                           Địa chỉ: 122 Hoàng Quốc Việt, Cầu Giấy, Hà Nội<br></br>
                           Điện thoại/Fax: 024-357446799 / 024-3779432<br></br>
                           Website: ptit.edu.vn
                        </div>
                     </div>
                  </div>
                  <div className={cx('intro-head-right')}></div>
               </div>
               <div className={cx('intro-content')}>
                  Phòng Lab nghiên cứu tập trung chính vào các hướng nghiên cứu chuyên sâu, cập nhật theo xu thế nghiên
                  cứu quốc tế và trong nước về lĩnh vực mạng và kết nối thông minh. Một số hướng nghiên cứu hiện tại của
                  phòng Lab nghiên cứu bao gồm:<br></br>
                  -   Mạng kết nối thông minh và trí tuệ nhân tạo: Trí tuệ nhân tạo (AI) có thể được áp dụng vào các
                  mạng kết nối thông minh để tăng cường tính linh hoạt và khả năng tự động hóa trong việc quản lý và vận
                  hành mạng.<br></br>
                  -   Mạng kết nối thông minh và IoT: Các thiết bị IoT đang ngày càng phổ biến và liên tục kết nối với
                  nhau, tạo ra một lượng lớn dữ liệu. Mạng kết nối thông minh có thể sử dụng để quản lý và xử lý dữ liệu
                  này, đồng thời tối ưu hóa các kết nối giữa các thiết bị IoT.<br></br>
                  -   Mạng kết nối thông minh và 5G/6G: 5G/6G là một kỹ thuật mới mạnh mẽ, cho phép tốc độ truyền tải dữ
                  liệu nhanh hơn và kết nối nhiều thiết bị hơn. Mạng kết nối thông minh có thể tận dụng 5G/6G để tạo ra
                  các ứng dụng mới và cải thiện hiệu suất của mạng.<br></br>
                  -   Mạng kết nối thông minh và an ninh mạng: Với sự gia tăng của các cuộc tấn công mạng và các mối đe
                  dọa an ninh mạng, mạng kết nối thông minh có thể được sử dụng để giám sát và phát hiện các hoạt động
                  đáng ngờ trong mạng và thực hiện các biện pháp bảo vệ mạng.<br></br>
                  -   Mạng kết nối thông minh và các ứng dụng trong thực tế ảo và thực tế tăng cường: Mạng kết nối thông
                  minh có thể được sử dụng để tăng cường khả năng tương tác giữa các thiết bị trong thực tế ảo và thực
                  tế tăng cường, đồng thời cải thiện trải nghiệm người dùng.
               </div>
            </div>
         </div>
      </div>
   );
}

export default Introduction;
