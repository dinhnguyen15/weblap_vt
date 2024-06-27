import { useTranslation } from 'react-i18next';
import styles from './Publications.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Publications() {
   const { t } = useTranslation();
   const [publications, setPublications] = useState([]);
   const [filter, setFilter] = useState('1'); // 1: Newest, 2: Oldest
   const [currentPage, setCurrentPage] = useState(1);
   const [itemsPerPage, setItemsPerPage] = useState(100);

   useEffect(() => {
      fetch('/publicationsData/publications.json')
         .then((response) => response.json())
         .then((data) => {
            const parsedData = data.map((pub) => ({
               ...pub,
               originalDate: pub.date_time,
               date_time: new Date(pub.date_time.split('/').reverse().join('-')),
            }));
            setPublications(parsedData);
         });
   }, []);

   const handleFilterChange = (e) => {
      setFilter(e.target.value);
   };

   const handleItemsPerPageChange = (e) => {
      setItemsPerPage(parseInt(e.target.value));
      setCurrentPage(1); // Reset to the first page when items per page changes
   };

   const sortedPublications = [...publications].sort((a, b) => {
      if (filter === '1') {
         return b.date_time - a.date_time; // Newest first
      } else {
         return a.date_time - b.date_time; // Oldest first
      }
   });

   const indexOfLastItem = currentPage * itemsPerPage;
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   const currentItems = sortedPublications.slice(indexOfFirstItem, indexOfLastItem);

   const totalPages = Math.ceil(sortedPublications.length / itemsPerPage);

   const handlePrevPage = () => {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
   };

   const handleNextPage = () => {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
   };

   const handleFirstPage = () => {
      setCurrentPage(1);
   };

   const handleLastPage = () => {
      setCurrentPage(totalPages);
   };

   const getPaginationItems = () => {
      const pages = [];
      const maxPages = 5; // Maximum number of page buttons to display

      if (totalPages <= maxPages) {
         for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
         }
      } else {
         let startPage = Math.max(currentPage - 2, 1);
         let endPage = Math.min(currentPage + 2, totalPages);

         if (currentPage <= 3) {
            endPage = maxPages;
         } else if (currentPage + 2 >= totalPages) {
            startPage = totalPages - 4;
         }

         if (startPage > 1) {
            pages.push(1);
            if (startPage > 2) {
               pages.push('...');
            }
         }

         for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
         }

         if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
               pages.push('...');
            }
            pages.push(totalPages);
         }
      }

      return pages;
   };

   return (
      <div className={cx('wrapper')}>
         <div className={cx('page-head')}>
            <div className={cx('page-tl')}>{t('publications')}</div>
            <div className={cx('page-des')}></div>
         </div>
         <div className={cx('container')}>
            <div className={cx('body-Pub')}>
               <div className={cx('filter-ipp')}>
                  <div className={cx('items-per-page')}>
                     <label className={cx('items-per-page-tl')} htmlFor="itemsPerPage">
                        {t('items_per_page')}:
                     </label>
                     <select
                        className={cx('items-per-page-name')}
                        id="itemsPerPage"
                        name="itemsPerPage"
                        value={itemsPerPage}
                        onChange={handleItemsPerPageChange}
                     >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                     </select>
                  </div>
                  <div className={cx('filter-research')}>
                     <label className={cx('filter-tl')} htmlFor="status">
                        {t('filter')}
                     </label>
                     <select
                        className={cx('filter-name')}
                        id="status"
                        name="status"
                        value={filter}
                        onChange={handleFilterChange}
                     >
                        <option className={cx('filter-status')} value="1">
                           {t('filter_newest')}
                        </option>
                        <option className={cx('filter-status')} value="2">
                           {t('filter_oldest')}
                        </option>
                     </select>
                  </div>
               </div>
               <div className={cx('research-list')}>
                  {currentItems.map((pub) => (
                     <a
                        href={pub.link_pub}
                        key={pub.id}
                        className={cx('research-item')}
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <div className={cx('line-research')}></div>
                        <div className={cx('research-name')}>{pub.title}</div>
                        <div className={cx('research-des')}>{pub.author}</div>
                        {/* Hiển thị như trong json */}
                        <div className={cx('research-date')}>{pub.originalDate}</div>

                        {/* <div className={cx('research-date')}>{pub.date_time.toLocaleDateString()}</div>Hiển thị định dạng tháng/ngày/năm */}
                     </a>
                  ))}
               </div>
               <div className={cx('pagination')}>
                  <button className={cx('first-button')} onClick={handleFirstPage} disabled={currentPage === 1}>
                     <FontAwesomeIcon icon={faAnglesLeft} />
                  </button>
                  <button className={cx('prev-button')} onClick={handlePrevPage} disabled={currentPage === 1}>
                     <FontAwesomeIcon icon={faAngleLeft} />
                  </button>
                  {getPaginationItems().map((page, index) => (
                     <button
                        key={index}
                        className={cx('page-button', { active: page === currentPage })}
                        onClick={() => page !== '...' && setCurrentPage(page)}
                        disabled={page === '...'}
                     >
                        {page}
                     </button>
                  ))}
                  <button className={cx('next-button')} onClick={handleNextPage} disabled={currentPage === totalPages}>
                     <FontAwesomeIcon icon={faAngleRight} />
                  </button>
                  <button className={cx('last-button')} onClick={handleLastPage} disabled={currentPage === totalPages}>
                     <FontAwesomeIcon icon={faAnglesRight} />
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Publications;
