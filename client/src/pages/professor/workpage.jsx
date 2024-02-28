import "../../assets/scss/prof-scss/workpage.scss";
import Card from "react-bootstrap/Card";
import { Tab, Nav } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function WorkPage() {
  const [checkboxes, setCheckboxes] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showFloatingWindow, setShowFloatingWindow] = useState(false);

  // FOR CHECKBOX
  // Function to handle checkbox click in the body
  const handleCheckboxChange = (index) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index] = !updatedCheckboxes[index];
    setCheckboxes(updatedCheckboxes);
  };

  // Function to handle student name click
  const handleStudentNameClick = (studentName) => {
    setSelectedStudent(studentName);
  };

  // Function to handle checkbox click in the header
  const handleSelectAll = () => {
    const updatedCheckboxes = new Array(checkboxes.length).fill(!selectAll);
    setCheckboxes(updatedCheckboxes);
  };

  // Function to toggle the floating window
  const toggleFloatingWindow = () => {
    setShowFloatingWindow(!showFloatingWindow);
  };

  // Determine if all checkboxes are checked
  const selectAll = checkboxes.every((checkbox) => checkbox);

  return (
    <Tab.Container id="tabs-example" defaultActiveKey="instruction">
      <Nav justify variant="tabs" className="nav-tab">
        <Nav.Item>
          <Nav.Link eventKey="instruction" style={{ color: "grey" }}>
            Instructor
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="student-work" style={{ color: "grey" }}>
            Student Work
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab.Content>
        <Tab.Pane eventKey="instruction">
          {/* Content inside instruction tab */}
          <div className="instruction-container">
            <Card className="header-container">
              <h5 className="posted">
                Posted
                <span className="date"> January 21, 2024</span>
              </h5>
              <h4 className="task-type">
                CHECK:{" "}
                <span className="task-title">
                  Lesson 14, Stress Management and Recreation
                </span>
              </h4>
              <h5 className="points-label">
                <span className="points">10 </span>
                points
              </h5>
            </Card>

            <Card className="content-container">
              <p>
                Good day, Executives. Please answer the modules and pass it no
                later than the due date. Once you have done this, please take a
                picture, attach it to a PDF file, and upload it here.
              </p>
              <p>
                Please write your name on every page and kindly pass it via PDF.
                For those who still do not have their modules, please answer
                them on a clean sheet of paper. Make sure that I can understand
                your penmanship. Answer only. Thank you, and stay safe.
              </p>
              <p>Thank you, and stay safe.</p>
            </Card>

            <Card className="attachment-container">
              <h4>Attachment</h4>
            </Card>
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey="student-work">
          <div className="overall-container">
            {/* Contents of left part of student-work container */}
            <div className="left-container">
              <div className="upper-left-container">
                <div className="sub-upper-left-container">
                  <h2 className="activity-title">
                    Module 14: Check for Understanding
                  </h2>
                  <div className="sub-content">
                    <Container className="stats">
                      <Row className="numbers">
                        <Col className="turned-in-total" sm={1}>
                          10
                        </Col>
                        <Col className="assigned-total" sm={1}>
                          22
                        </Col>
                        <Col className="returned-total" sm={1}>
                          7
                        </Col>
                      </Row>
                      <Row className="labels">
                        <Col className="turned-in-label" sm={1}>
                          Turned In
                        </Col>
                        <Col className="assigned-label" sm={1}>
                          Assigned
                        </Col>
                        <Col className="returned-label" sm={1}>
                          Returned
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </div>
                <div className="button-container">
                  <Button type="submit">Return</Button>
                </div>
              </div>
              <div className="student-table-container">
                <div className="container-1">
                  <div className="content-1">
                    {/* Table contents for "Turned In" */}
                    <Table className="table-1" border hover>
                      {/* When clicked, all turned in student will automatically selected for easy returning of works*/}
                      <thead>
                        <tr>
                          <th>Turned In</th>
                        </tr>
                      </thead>
                      {/* Contents of "Turned In" */}
                      <tbody>
                        <tr>
                          <td
                            className="student-name"
                            onClick={() =>
                              handleStudentNameClick("Liezel Untalan Gabica")
                            }
                          >
                            {" "}
                            <span className="icon">
                              <i class="bx bxs-user-circle"></i>
                            </span>
                            Liezel Untalan Gabica
                          </td>
                          <td className="score">_/100</td>
                        </tr>
                      </tbody>
                    </Table>

                    <Table className="table-3" border hover>
                      <thead>
                        <tr>
                          <th>
                            <Form.Check
                              aria-label="option 1"
                              checked={selectAll}
                              onChange={handleSelectAll}
                            />
                          </th>
                          <th>Graded</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="checkbox">
                            <Form.Check
                              aria-label="option 1"
                              checked={checkboxes[0]}
                              onChange={() => handleCheckboxChange(0)}
                            />
                          </td>
                          <td className="student-name">
                            {" "}
                            <span className="icon">
                              <i class="bx bxs-user-circle"></i>
                            </span>
                            Liezel Untalan Gabica
                          </td>
                          <td className="score">_/100</td>
                        </tr>
                      </tbody>
                    </Table>
                    <Table className="table-2" border hover>
                      <thead>
                        <tr>
                          <th>
                            <Form.Check
                              aria-label="option 1"
                              checked={selectAll}
                              onChange={handleSelectAll}
                            />
                          </th>
                          <th>Assigned</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="checkbox">
                            <Form.Check
                              aria-label="option 1"
                              checked={checkboxes[0]}
                              onChange={() => handleCheckboxChange(0)}
                            />
                          </td>
                          <td className="student-name">
                            {" "}
                            <span className="icon">
                              <i class="bx bxs-user-circle"></i>
                            </span>
                            Liezel Untalan Gabica
                          </td>
                          <td className="score">_/100</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
              {/* Contents of right part of student-work container */}
            </div>
            <div className="right-container">
              {selectedStudent && (
                <div className="right-sub-content">
                  <h2 className="studentN">{selectedStudent}</h2>
                  <div className="attached-file">
                    <h6>Turned in</h6>
                    <Button
                      className="floating-button"
                      variant="primary"
                      onClick={toggleFloatingWindow}
                    >
                      (See history)
                    </Button>
                    {showFloatingWindow && (
                      <div className="floating-window">
                        <div className="history">
                        <p>Turned in</p>
                        <p>9:00pm</p>
                        <p>Today</p>
                        </div>
                      </div>
                    )}
                    <img
                      src="../../assets/img/notification.png"
                      alt="Attachment"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
}

export default WorkPage;
