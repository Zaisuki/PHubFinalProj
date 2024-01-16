import { Link } from 'react-router-dom';

import '../assets/scss/sidebar.scss';
import SideBarLink from './sidebarLink';

const SideBar = () => {
    return (
        <div className='sidebar-container'>
            <SideBarLink direct='/profile' icon='bx bxs-user-circle' title='Profile' />

            <ul>
                <li>
                    <SideBarLink direct='/' icon='bx bxs-dashboard' title='Dashboard' />
                </li>
                <li>
                    <SideBarLink direct='/' icon='bx bxs-notepad' title='Task' />
                </li>
                <li>
                    <SideBarLink direct='/' icon='bx bxs-bell' title='Notification' />
                </li>
                <li>
                    <SideBarLink direct='/' icon='bx bxs-chat' title='Inbox' />
                </li>
                <li>
                    <SideBarLink direct='/' icon='bx bxs-calendar-alt' title='Calendar' />
                </li>
                <li>
                    <SideBarLink direct='/' icon='bx bxs-notepad' title='ewan' />
                </li>
                <li>
                    <SideBarLink direct='/' icon='bx bxs-notepad' title='ewan' />
                </li>
                <li>
                    <SideBarLink direct='/' icon='bx bxs-calendar-alt' title='ewan' />
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
