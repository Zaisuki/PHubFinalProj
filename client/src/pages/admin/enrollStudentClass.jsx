import "../../assets/scss/admin-scss/enroll-student-form.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

function EnrollStudentClass() {
  return (
    <div className="enroll-student-form">
      
        <Row className="stud-num">
          <Col sm={4}>
            <Form.Label>Student Number/ID</Form.Label>
            <Form.Control placeholder="Enter" />
          </Col>
        </Row>
        <Row  className="class-id">
          <Col sm={5}>
            <Form.Label>Class ID</Form.Label>
            <Form.Control placeholder="Enter" />
          </Col>
        </Row>
      
    </div>
  );
}
export default EnrollStudentClass;
