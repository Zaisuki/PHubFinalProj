import "../../assets/scss/admin-scss/student-form.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";

function StudentForm() {
  // for DATE
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  // for personal NUMBER FORM
  const [personalNumber, setPersonalNumber] = useState("");

  const handlePNumberChange = (event) => {
    const inputValue = event.target.value;
    // Ensure that the input value contains only numbers
    if (/^\d*$/.test(inputValue)) {
      setPersonalNumber(inputValue);
    }
  };

  const [schoolNumber, setSchoolNumber] = useState("");

  const handleSNumberChange = (event) => {
    const inputValue = event.target.value;
    // Ensure that the input value contains only numbers
    if (/^\d*$/.test(inputValue)) {
      setSchoolNumber(inputValue);
    }
  };

  return (
    <div className="student-form">
      <Container>
        {/* STUDENT NAME */}
        <Row>
          <Col>
            <Form>
              <Row>
                <Col>
                  <Form.Label>Last name</Form.Label>
                  <Form.Control placeholder="Enter" />
                </Col>
              </Row>
            </Form>
          </Col>
          <Col sm={4}>
            <Form>
              <Row>
                <Col>
                  <Form.Label>First name</Form.Label>
                  <Form.Control placeholder="Enter" />
                </Col>
              </Row>
            </Form>
          </Col>
          <Col sm={4}>
            <Form>
              <Row>
                <Col>
                  <Form.Label>Middle name</Form.Label>
                  <Form.Control placeholder="Enter" />
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>

        {/* STUDENT ID, Year Level, Section, and Course */}
        <Row>
          <Col sm={4}>
            <Form>
              <Row>
                <Col>
                  <Form.Label>Student ID/Number</Form.Label>
                  <Form.Control placeholder="Enter" />
                </Col>
              </Row>
            </Form>
          </Col>
          <Col sm={2}>
            <Form>
              <Row>
                <Col>
                  <Form.Label>Year Level</Form.Label>
                  <Form.Select defaultValue="Select...">
                    <option>Select...</option>
                    <option>...</option>
                  </Form.Select>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col sm={2}>
            <Form>
              <Row>
                <Col>
                  <Form.Label>Course</Form.Label>
                  <Form.Select defaultValue="Select...">
                    <option>Select...</option>
                    <option>...</option>
                  </Form.Select>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col sm={2}>
            <Form>
              <Row>
                <Col>
                  <Form.Label>Section</Form.Label>
                  <Form.Select defaultValue="Select...">
                    <option>Select...</option>
                    <option>...</option>
                  </Form.Select>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>

        {/* Student School Email, Personal Email, and Password*/}
        <Row>
          <Col sm={4}>
            <Form>
              <Row>
                <Col>
                  <Form.Label>School Email</Form.Label>
                  <Form.Control type="email" placeholder="Email" />
                </Col>
              </Row>
            </Form>
          </Col>
          <Col sm={4}>
            <Form>
              <Row>
                <Col>
                  <Form.Label>Personal Email</Form.Label>
                  <Form.Control type="email" placeholder="Email" />
                </Col>
              </Row>
            </Form>
          </Col>
          <Col sm={4}>
            <Form>
              <Row>
                <Col>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>

        {/* STUDENT Username and Date of Birth*/}
        <Row>
          <Col sm={4}>
            <Form>
              <Row>
                <Col>
                  <Form.Label>Username</Form.Label>
                  <Form.Control placeholder="Enter" />
                </Col>
              </Row>
            </Form>
          </Col>
          <Col sm={4}>
            <Form>
              <Form.Label>Date of Birth</Form.Label>
              <Form.Group controlId="formDate">
                <Form.Control
                  type="date"
                  value={selectedDate}
                  onChange={handleDateChange}
                  placeholder="Date"
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>

        {/* STUDENT School and Personal Number */}
        <Row>
          <Col sm={4}>
            <Form>
              <Form.Group controlId="formSchoolNumber">
                <Form.Label>School Number</Form.Label>
                <Form.Control
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={schoolNumber}
                  onChange={handleSNumberChange}
                  placeholder="Number"
                />
              </Form.Group>
            </Form>
          </Col>
          <Col sm={4}>
            <Form>
              <Form.Group controlId="formPersonalNumber">
                <Form.Label>Personal Number:</Form.Label>
                <Form.Control
                  type="text" // type to text
                  inputMode="numeric" //input mode to numeric
                  pattern="[0-9]*" //to accept only numeric input
                  value={personalNumber}
                  onChange={handlePNumberChange}
                  placeholder="Number"
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>

        {/* Current Address */}
        <Row>
          <Col>
            <Form>
              <Row>
                <Col>
                  <Form.Label>Current Address</Form.Label>
                  <Form.Control placeholder="House/Lot Number, Barangay, City/Municipal Name, Province, Postal Code" />
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default StudentForm;
