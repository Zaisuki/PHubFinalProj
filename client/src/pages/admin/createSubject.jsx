import "../../assets/scss/admin-scss/subject-form.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

function CreateSubject() {
  return (
    <div className="subject-form">
        <Row className="sub-code">
          <Col sm={4}>
            <Form.Label>Subject Code</Form.Label>
            <Form.Control placeholder="Enter" />
          </Col>
        </Row>
        <Row className="sub-des">
          <Col sm={6}>
            <Form.Label>Subject Description</Form.Label>
            <Form.Control placeholder="Enter" />
          </Col>
        </Row>
    </div>
  );
}
export default CreateSubject;
