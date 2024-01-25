import CloseButton from 'react-bootstrap/CloseButton';
import PropTypes from 'prop-types';
import '../../assets/scss/sidebar.scss';
import SideBarLink from '../sidebarLink';

const SideBar = ({ isClicked, onClick, onHover, onUnhover }) => {
    return (
        <div className={`sidebar-container ${isClicked ? 'sidebar-open' : ''}`} onMouseOver={onHover} onMouseOut={onUnhover}>
            <CloseButton className='sidebar-close-btn' onClick={onClick} />
            <SideBarLink direct='/profile' icon='bx bxs-user-circle' title='Profile' isClicked={isClicked} />

            <ul>
                <li>
                    <SideBarLink direct='/' icon='bx bxs-dashboard' title='Dashboard' isClicked={isClicked} />
                </li>
                <li>
                    <SideBarLink direct='/task' icon='bx bx-task' title='Task' isClicked={isClicked} />
                </li>
                <li>
                    <SideBarLink direct='/course' icon='bx bxs-notepad' title='Course' isClicked={isClicked} />
                </li>
                <li>
                    <SideBarLink direct='/notification' icon='bx bxs-bell' title='Notification' isClicked={isClicked} />
                </li>
                <li>
                    <SideBarLink direct='/inbox' icon='bx bxs-chat' title='Inbox' isClicked={isClicked} />
                </li>
                <li>
                    <SideBarLink direct='/calendar' icon='bx bxs-calendar' title='Calendar' isClicked={isClicked} />
                </li>
                <li>
                    <SideBarLink direct='evaluation' icon='bx bxs-edit' title='Evaluation' isClicked={isClicked} />
                </li>
            </ul>
            <SideBarLink direct='/login' icon='bx bx-log-out' title='Log out' isClicked={isClicked} />
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
