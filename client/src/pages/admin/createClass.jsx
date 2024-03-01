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
        <Row>
          <Col sm={5}>
            <Form.Label>Block</Form.Label>
            <Form.Control placeholder="Enter" />
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <Form.Label>Subject ID</Form.Label>
            <Form.Control placeholder="Enter" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default CreateClass;
