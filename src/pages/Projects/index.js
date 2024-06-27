import styles from './Projects.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Projects() {
   return <h2 className={cx('text')}>Projects page</h2>;
}

export default Projects;
