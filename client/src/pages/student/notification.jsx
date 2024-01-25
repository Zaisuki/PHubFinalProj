import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import '../../assets/scss/notification.scss';

function Notification() {
    return (
        <div className='main-container'>
            <div className='title'>
                <h2>Notifications</h2>  
            </div>
            <ToastContainer className='toast-container'>
                <Toast className='box'>
                    <Toast.Header>
                        <strong className='me-auto'>Bill Gates</strong>
                        <small className='text-muted'>just now</small>
                    </Toast.Header>
                    <Toast.Body>Posted an assignment</Toast.Body>
                </Toast>
                <Toast>
                    <Toast.Header>
                        <strong className='me-auto'>Mark Zuckerburg</strong>
                        <small className='text-muted'>45 seconds ago</small>
                    </Toast.Header>
                    <Toast.Body>Sent a message</Toast.Body>
                </Toast>
                <Toast>
                    <Toast.Header>
                        <strong className='me-auto'>Anakin Skywalker</strong>
                        <small className='text-muted'>2 minutes ago</small>
                    </Toast.Header>
                    <Toast.Body>Sent a message</Toast.Body>
                </Toast>
                <Toast>
                    <Toast.Header>
                        <strong className='me-auto'>Ellie Williams</strong>
                        <small className='text-muted'>2 days ago</small>
                    </Toast.Header>
                    <Toast.Body>Posted an assignment</Toast.Body>
                </Toast>
                <Toast>
                    <Toast.Header>
                        <strong className='me-auto'>Nicola Tesla</strong>
                        <small className='text-muted'>82 years ago</small>
                    </Toast.Header>
                    <Toast.Body>Sent a message</Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
    );
}

export default Notification;
