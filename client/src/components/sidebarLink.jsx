import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const SideBarLink = ({ direct, icon, title, isClicked }) => {
    const navigate = useNavigate();
    return (
        <Link
            to={direct}
            onClick={() => {
                navigate('/login');
                direct === '/login' && window.location.reload();
            }}
        >
            <img className='sidebar-img' src={icon}></img>
            <span className={`${isClicked ? 'show-block' : ''}`}>{title}</span>
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
