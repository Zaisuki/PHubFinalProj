import { MDBIcon } from 'mdb-react-ui-kit';
import PropTypes from 'prop-types';

import '@fortawesome/fontawesome-free/css/all.min.css';
import '../assets/scss/header.scss';
const Header = ({ onClick }) => {
    return (
        <header>
            <div onClick={onClick} className='hamburger-container'>
                <div className='hamburger-icon'>
                    <MDBIcon fas icon='bars' />
                </div>
            </div>
            <h3>PHIMHA HUB</h3>
        </header>
    );
};
Header.propTypes = {
    onClick: PropTypes.func.isRequired,
};
export default Header;
