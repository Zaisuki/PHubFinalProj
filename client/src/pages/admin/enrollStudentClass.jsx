import "../../assets/scss/admin-scss/enroll-student-form.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

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
      

      <div className="class-count">
        <p>Number of Students</p>
        
        <Dropdown data-bs-theme="dark">
        <Dropdown.Toggle className="dropdown-count" id="dropdown-button-dark-example1" variant="secondary">
          Student Count
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-2">10</Dropdown.Item>
          <Dropdown.Item href="#/action-3">20</Dropdown.Item>
          <Dropdown.Item href="#/action-4">30</Dropdown.Item>
          <Dropdown.Item href="#/action-3">40</Dropdown.Item>
          <Dropdown.Item href="#/action-4">50</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
        </div>
    </div>
  );
}
export default EnrollStudentClass;
