import Card from 'react-bootstrap/Card';
import '../assets/scss/notification.scss';

function Notification() {
    return (
        <Card.Body className='container'>
            
            <Card className='content'>
            <h1 className='etch'>CHECK: Module 20 Niggakha...</h1>
            </Card>
            <Card className='sub'>
            <h1>GFY 069</h1>
            </Card>
            <Card className='date'>
            <h1>Jan</h1>
            </Card>

            <Card className='content2'>
            <h1>CHECK: Module 20 Niggakha...</h1>
            </Card>
            <Card className='sub2'>
            <h1>GFY 069</h1>
            </Card>
            <Card className='date2'>
            <h1>Jan</h1>
            </Card>

            <Card className='content3'>
            <h1>CHECK: Module 20 Niggakha...</h1>
            </Card>
            <Card className='sub3'>
            <h1>GFY 069</h1>
            </Card>
            <Card className='date3'>
            <h1>Jan</h1>
            </Card>
        </Card.Body>
    );
}

export default Notification;
