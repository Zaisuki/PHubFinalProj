import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SideBarLink = ({ direct, icon, title }) => {
    return (
        <Link to={direct}>
            <i className={icon}></i>
            <span>{title}</span>
        </Link>
    );
};

SideBarLink.propTypes = {
    direct: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default SideBarLink;
