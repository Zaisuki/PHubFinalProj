import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import '../assets/scss/inbox.scss';
import Message from './student/Messages';
import Input from './student/Input';

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
            
            <div className='page'>
                <div className='container'>
                    <div className='chat'>
                    <span>Chikaboo</span>
                    <Message/>
                    <Input/>
                    </div>
                </div>
            </div>

        </Dropdown>

    );
}

export default Inbox;
