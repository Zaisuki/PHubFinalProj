import '../assets/scss/profile.scss';
import picon from '../assets/img/mygirl.jpg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Profile() {
  return (
    
    <Card className='main'>
        <div className='border'></div>
        
      <Card.Header className='cardT'>Profile</Card.Header>
      <div className='bg'>
      <Card.Body className='card-booty'>
      <Card className='one'>
      <img src={picon} alt='profile' />
      <h1>Neeguh Paterno</h1>
      <h2>098763340965</h2>
      <h3>niga.paterno.up@phinmaed.com</h3>
      <div className='line'></div>
      </Card>
      <Card className='two'>
        <h1>Year/Grade:</h1>
        <h2>2nd</h2>
      </Card>
      <Card className='three'>
    <h1>Block:</h1>
      </Card>
      <Card className='four'>
        <h1>Course:</h1>
        <h2>Semester:</h2>
        
      </Card>
      <Card className='five'>
        <h1>Personal Data</h1>
        <h2>Last Name</h2>
      </Card>
      
      

    
     
        
      </Card.Body>
      </div>
      
    </Card>
    
  );
}
export default Profile;