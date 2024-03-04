import CloseButton from 'react-bootstrap/CloseButton';
import PropTypes from 'prop-types';
import '../../assets/scss/sidebar.scss';
import SideBarLink from '../sidebarLink';
import InboxImg from '../../assets/img/inbox.png';
import CourseImg from '../../assets/img/course.png';
import FeedImg from '../../assets/img/feed.png';
import ProfileImg from '../../assets/img/profile.png';
import StatisticsImg from '../../assets/img/statistics.png';
import TaskImg from '../../assets/img/task.png';
import LogoutImg from '../../assets/img/logout.png';
import bnw from '../../assets/img/remove.png';

const SideBar = ({ isClicked, onClick, onHover, onUnhover }) => {
    return (
        <div className={`sidebar-container ${isClicked ? 'sidebar-open' : ''}`} onMouseOver={onHover} onMouseOut={onUnhover}>
            {/* TODO: Crop niyo img dapat same ang width and height neto .. sige  */}
            <CloseButton className='sidebar-close-btn' onClick={onClick} />
            <img className='bnw' src={bnw} alt='bnw' />
            <h1 className='ph'> PHINMA <span> HUB</span></h1>
            <SideBarLink direct='/profile' icon={ProfileImg} title='Profile' isClicked={isClicked} />
            <ul className='iconS'>
                <li>
                    <SideBarLink direct='/' icon={FeedImg} title='Feed' isClicked={isClicked} />
                </li>
                <li>
                    <SideBarLink direct='/task' icon={TaskImg} title='Task' isClicked={isClicked} />
                </li>
                <li>
                    <SideBarLink direct='/course-prof' icon={CourseImg} title='Course' isClicked={isClicked} />
                </li>
                <li>
                    <SideBarLink direct='/inbox' icon={InboxImg} title='Chika Hub' isClicked={isClicked} />
                </li>
                <li>
                    <SideBarLink direct='/statistics' icon={StatisticsImg} title='Statistics' isClicked={isClicked} />
                </li>
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
