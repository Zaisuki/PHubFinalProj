// SideBar.js

import React from 'react';
import CloseButton from 'react-bootstrap/CloseButton';
import PropTypes from 'prop-types';
import '../../assets/scss/sidebar.scss';
import SideBarLink from '../sidebarLink';
import InboxImg from '../../assets/img/inbox.png';
import CourseImg from '../../assets/img/course.png';
import FeedImg from '../../assets/img/feed.png';
import ProfileImg from '../../assets/img/profile.png';
import TaskImg from '../../assets/img/task.png';
import NotificationImg from '../../assets/img/notification.png';
import LogoutImg from '../../assets/img/logout.png';
import bnw from '../../assets/img/remove.png';

const SideBar = ({ isClicked, onClick, onHover, onUnhover, currentPage }) => {
    return (
        <div className={`sidebar-container ${isClicked ? 'sidebar-open' : ''}`} onMouseOver={onHover} onMouseOut={onUnhover}>
            <CloseButton className='sidebar-close-btn' onClick={onClick} />
            <img className='bnw' src={bnw} alt='bnw' />
            <h1 className='ph'> PHINMA <span> HUB</span></h1>
            

            <SideBarLink direct='/profile' icon={ProfileImg} title='Profile' isClicked={isClicked} isActive={currentPage === '/profile'} />
            <ul className='iconS'>
                <li>
                    <SideBarLink direct='/' icon={FeedImg} title='Feed' isClicked={isClicked} isActive={currentPage === '/'} />
                </li>
                <li>
                    <SideBarLink direct='/task' icon={TaskImg} title='Task' isClicked={isClicked} isActive={currentPage === '/task'} />
                </li>
                <li>
                    <SideBarLink direct='/course-student' icon={CourseImg} title='Course' isClicked={isClicked} isActive={currentPage === '/course'} />
                </li>
                <li>
                    <SideBarLink direct='/notification' icon={NotificationImg} title='Notification' isClicked={isClicked} isActive={currentPage === '/notification'} />
                </li>
                <li>
                    <SideBarLink direct='/inbox' icon={InboxImg} title='Chika Hub' isClicked={isClicked} isActive={currentPage === '/inbox'} />
                </li>
            </ul>
            <SideBarLink direct='/login' icon={LogoutImg} title='Logout' isClicked={isClicked} isActive={currentPage === '/login'} />
        </div>
    );
};

SideBar.propTypes = {
    isClicked: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    onHover: PropTypes.func.isRequired,
    onUnhover: PropTypes.func.isRequired,
    currentPage: PropTypes.string.isRequired, 
};

export default SideBar;
