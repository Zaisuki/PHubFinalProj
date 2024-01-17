import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SideBarLink = ({ direct, icon, title, isClicked }) => {
    return (
        <Link to={direct}>
            <i className={icon}></i>
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
