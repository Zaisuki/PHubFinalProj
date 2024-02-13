import CloseButton from 'react-bootstrap/CloseButton';
import PropTypes from 'prop-types';
import '../../assets/scss/sidebar.scss';
import SideBarLink from '../sidebarLink';
import CalendarImg from '../../assets/img/calendar.png';
import InboxImg from '../../assets/img/inbox.png';
import CourseImg from '../../assets/img/course.png';
import FeedImg from '../../assets/img/feed.png';
import ProfileImg from '../../assets/img/profile.png';
import StatisticsImg from '../../assets/img/statistics.png';
import EvaluationImg from '../../assets/img/calendar.png';
import TaskImg from '../../assets/img/task.png';
import NotificationImg from '../../assets/img/calendar.png';
import LogoutImg from '../../assets/img/calendar.png';

const SideBar = ({ isClicked, onClick, onHover, onUnhover }) => {
    return (
        <div className={`sidebar-container ${isClicked ? 'sidebar-open' : ''}`} onMouseOver={onHover} onMouseOut={onUnhover}>
            <CloseButton className='sidebar-close-btn' onClick={onClick} />
            <SideBarLink direct='/profile' icon={ProfileImg} title='Profile' isClicked={isClicked} />
            <ul className='iconS'>
                <li>
                    <SideBarLink direct='/' icon={FeedImg} title='Feed' isClicked={isClicked} />
                </li>
                <li>
                    <SideBarLink direct='/task' icon={TaskImg} title='Task' isClicked={isClicked} />
                </li>
                <li>
                    <SideBarLink direct='/course' icon={CourseImg} title='Course' isClicked={isClicked} />
                </li>
                <li>
                    <SideBarLink direct='/notification' icon={NotificationImg} title='Notification' isClicked={isClicked} />
                </li>
                <li>
                    <SideBarLink direct='/inbox' icon={InboxImg} title='Inbox' isClicked={isClicked} />
                </li>
                <li>
                    <SideBarLink direct='/calendar' icon={CalendarImg} title='Calendar' isClicked={isClicked} />
                </li>
                <li>
                    <SideBarLink direct='evaluation' icon={EvaluationImg} title='Evaluation' isClicked={isClicked} />
                </li>
                <li>
                    <SideBarLink direct='evaluation' icon={StatisticsImg} title='Statistics' isClicked={isClicked} />
                </li>
            </ul>
            <SideBarLink direct='/login' icon={LogoutImg} title='Log out' isClicked={isClicked} />
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
