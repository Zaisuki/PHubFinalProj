import CloseButton from 'react-bootstrap/CloseButton';
import PropTypes from 'prop-types';
import '../../assets/scss/sidebar.scss';
import SideBarLink from '../sidebarLink';
import CourseImg from '../../assets/img/course.png';
import FeedImg from '../../assets/img/feed.png';
import TaskImg from '../../assets/img/task.png';
import LogoutImg from '../../assets/img/logout.png';

const SideBar = ({ isClicked, onClick, onHover, onUnhover }) => {
    return (
        <div className={`sidebar-container ${isClicked ? 'sidebar-open' : ''}`} onMouseOver={onHover} onMouseOut={onUnhover}>
            <CloseButton className='sidebar-close-btn' onClick={onClick} />
            <SideBarLink direct='/' icon={FeedImg} title='Home' isClicked={isClicked} />
            <ul className='iconS'>
                <li>
                    <SideBarLink direct='/create-student' icon={FeedImg} title='Create Student' isClicked={isClicked} />
                </li>
                <li>
                    <SideBarLink direct='/create-professor' icon={TaskImg} title='Create Professor' isClicked={isClicked} />
                </li>
                <li>
                    <SideBarLink direct='/create-admin' icon={CourseImg} title='Create Admin' isClicked={isClicked} />
                </li>
                <li>
                    <SideBarLink direct='/create-subject' icon={CourseImg} title='Create Subject' isClicked={isClicked} />
                </li>
                <li>
                    <SideBarLink direct='/create-class' icon={CourseImg} title='Create Class' isClicked={isClicked} />
                </li>
                <li>
                    <SideBarLink direct='/enroll-student-class' icon={CourseImg} title='Enroll Student to Class' isClicked={isClicked} />
                </li>
                <li>
                    <SideBarLink direct='/evaluation-output' icon={CourseImg} title='Evaluation' isClicked={isClicked} />
                </li>
                {/* {'DUPLICATE NIYO LANG IYONG LI NA TAG PAG GAGAWA PA NG LINK AT PAGE'} */}
            </ul>
            <SideBarLink direct='/login' icon={LogoutImg} title='Logout' isClicked={isClicked} />
        </div>
    );
};

SideBar.propTypes = {
    isClicked: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    onHover: PropTypes.func.isRequired,
    onUnhover: PropTypes.func.isRequired,
};

export default SideBar;
