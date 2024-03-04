import "../../assets/scss/admin-scss/class-form.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

function CreateClass() {
  return (
    <div className="class-form">

      
      <Container>
        <Row>
          <Col sm={4}>
            <Form.Label>Instructor Number/ID</Form.Label>
            <Form.Control placeholder="Enter" />
          </Col>
        </Row>
      </Container>
      

      <div className="assigned-course">
        <p>Assigned Course</p>
        </div>

      <Form className="course">
      {['checkbox'].map((type) => (
        <div className="for-class" key={`default-${type}`} >
          <Form.Check
            type={type}
            id={`default-${type}`}
            label={`Block 1`}
          />

          <Form.Check
            type={type}
            id={`disabled-default-${type}`}
            label={`Block 2`}
          />
          <Form.Check
            type={type}
            id={`disabled-default-${type}`}
            label={`Block 3`}
          />
          <Form.Check
            type={type}
            id={`disabled-default-${type}`}
            label={`Block 4`}
          />
          <Form.Check
            type={type}
            id={`disabled-default-${type}`}
            label={`Block 5`}
          />
        </div>
        
      ))}
      </Form>

      <div className="assigned-class">
        <p>Assigned Class</p>
        </div>

      <Form className="blocks">
      {['checkbox'].map((type) => (
        <div className="for-class" key={`default-${type}`} >
          <Form.Check
            type={type}
            id={`default-${type}`}
            label={`Block 1`}
          />

          <Form.Check
            type={type}
            id={`disabled-default-${type}`}
            label={`Block 2`}
          />
          <Form.Check
            type={type}
            id={`disabled-default-${type}`}
            label={`Block 3`}
          />
          <Form.Check
            type={type}
            id={`disabled-default-${type}`}
            label={`Block 4`}
          />
          <Form.Check
            type={type}
            id={`disabled-default-${type}`}
            label={`Block 5`}
          />
        </div>
        
      ))}
      </Form>

      <div className="assigned-subs">
        <p>Assigned Subjects</p>
        </div>

      <Form className="subs">
      {['checkbox'].map((type) => (
        <div className="for-class" key={`default-${type}`} >
          <Form.Check
            type={type}
            id={`default-${type}`}
            label={`ITE 400`}
          />

          <Form.Check
            type={type}
            id={`disabled-default-${type}`}
            label={`ITE 393`}
          />
          <Form.Check
            type={type}
            id={`disabled-default-${type}`}
            label={`ITE 308`}
          />
          <Form.Check
            type={type}
            id={`disabled-default-${type}`}
            label={`ITE 300`}
          />
          <Form.Check
            type={type}
            id={`disabled-default-${type}`}
            label={`ITE292`}
          />
        </div>
        
      ))}
      </Form>
    </div>
  );
}
export default CreateClass;
