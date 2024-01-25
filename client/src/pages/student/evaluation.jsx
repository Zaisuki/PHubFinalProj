import '../../assets/scss/evaluation.scss';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Evaluation() {
  return (
    <Card>
      <Card.Body className='card-body'>
        <h1>Teacher Evaluation Form</h1>
        <label>Dear Students,</label>
  
      <p>Thank you for taking the time to provide feedback on your learning experience. Your input is invaluable for continuous improvement. Please fill out the following evaluation form honestly and constructively.</p>

      <span>Course Information</span>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      <br />

        </Card.Body>
    </Card>



  );
  ;
};


export default Evaluation;
