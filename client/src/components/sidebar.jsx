import { Link } from 'react-router-dom';

import '../assets/scss/sidebar.scss';

const SideBar = () => {
    return (
        <div className='sidebar-container'>
            <Link to='/profile'>
                <i className='bx bxs-user-circle'></i>
                <span>Profile</span>
            </Link>
            <ul>
                <li>
                    <Link to='/'>
                        <i className='bx bxs-dashboard'></i>
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <i className='bx bxs-notepad'></i>
                        <span>Task</span>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <i className='bx bxs-bell'></i>
                        <span>Notification</span>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <i className='bx bxs-chat'></i>
                        <span>Inbox</span>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <i className='bx bxs-calendar-alt'></i>
                        <span>Calendar</span>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <i className='bx bxs-calendar-alt'></i>
                        <span>Para sa Iba</span>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <i className='bx bxs-calendar-alt'></i>
                        <span>Para sa Iba</span>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <i className='bx bxs-calendar-alt'></i>
                        <span>Para sa Iba</span>
                    </Link>
                </li>
            </ul>
            <Link to='/'>
                <i className='bx bx-log-out'></i>
                <span>Log out</span>
            </Link>
        </div>
    );
};

export default SideBar;
