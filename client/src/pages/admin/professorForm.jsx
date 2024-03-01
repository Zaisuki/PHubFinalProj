import "../../assets/scss/admin-scss/professor-form.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";

function ProfessorForm() {
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

  // for school NUMBER FORM
  const [schoolNumber, setSchoolNumber] = useState("");

  const handleSNumberChange = (event) => {
    const inputValue = event.target.value;
    if (/^\d*$/.test(inputValue)) {
      setSchoolNumber(inputValue);
    }
  };

  return (
    <div className="professor-form">
      <Container>
        {/* Professor Full Name */}
        <Row>
          <Col sm={4}>
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

        {/* PROFESSOR ID and Department */}
        <Row>
          <Col sm={4}>
            <Form>
              <Row>
                <Col>
                  <Form.Label>Instructor ID/Number</Form.Label>
                  <Form.Control placeholder="Enter" />
                </Col>
              </Row>
            </Form>
          </Col>
          <Col sm={2}>
            <Form>
              <Row>
                <Col>
                  <Form.Label>Department</Form.Label>
                  <Form.Select defaultValue="Select...">
                    <option>Select...</option>
                    <option>...</option>
                  </Form.Select>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>

        {/* PROFESSOR School Email, Personal Email, and Password*/}
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

        {/* PROFESSOR Username and Date of Birth*/}
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

        {/* PROFESSOR School and Personal Number */}
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

        {/* PROFESSOR Current Address */}
        <Row sm={8}>
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

        {/* PROFESSOR Active */}
        <Row>
          <Col sm={4} className="active-holder">
            <Form.Label>Active</Form.Label>
            <Form className="active-radio">
              <Form.Check
                type="radio"
                label="True"
                name="singleRadio"
                id="radio1"
                aria-label="radio 1"
              />
              <Form.Check
                type="radio"
                label="False"
                name="singleRadio"
                id="radio2"
                aria-label="radio 2"
              />
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProfessorForm;
