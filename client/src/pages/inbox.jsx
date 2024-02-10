import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import '../assets/scss/inbox.scss';

function Inbox() {
    return (
        <Dropdown className='dropdown-container'>
            <Dropdown.Toggle variant='success' id='dropdown-basic'>
                Available Instructors Today
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href='#/action-1'>Anakin Skywalker</Dropdown.Item>
                <Dropdown.Item href='#/action-2'>Chico Lachowski</Dropdown.Item>
                <Dropdown.Item href='#/action-3'>Bill Gates</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default Inbox;
