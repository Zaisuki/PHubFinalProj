import '../assets/scss/profile.scss';
import ProfileIcon from '../assets/img/mygirl.jpg';
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

      <img src={ProfileIcon} alt='profile' />
      </Card>
      <Card className='two'>

      </Card>
      <Card className='three'>

      </Card>
      

    
     
        
      </Card.Body>
      </div>
      
    </Card>
    
  );
}
export default Profile;