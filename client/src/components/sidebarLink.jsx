

import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logout } from '../services/entry';
import '../../assets/scss/sidebarLink.scss';

const SideBarLink = ({ direct, icon, title, isClicked }) => {
    const location = useLocation();
    const isActive = location.pathname === direct;

    const handleLogout = () => {
        logout();
        window.location.reload();
    };

    return (
        <Link
            to={direct}
            className={`sidebar-link ${isActive ? 'active' : ''}`}
            onClick={() => {
                if (direct === '/login') {
                    handleLogout();
                }
            }}
        >
            <div className='image-container'>
                <img className='sidebar-img' src={icon} alt={title} />
            </div>
            <span className={`${isClicked ? 'show-block' : ''}`}>{title}</span>
            {isActive && <div className="indicator"></div>}
        </Link>
    );
};

SideBarLink.propTypes = {
    direct: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isClicked: PropTypes.bool.isRequired,
};

export default SideBarLink;
