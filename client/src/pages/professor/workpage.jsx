import React, { useState } from "react";
import { Tab, Nav } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "../../assets/scss/prof-scss/workpage.scss";
import "../../assets/scss/prof-scss/PDFViewer.scss";

function WorkPage() {
  const [checkboxes, setCheckboxes] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showFloatingWindow, setShowFloatingWindow] = useState(false);
  const [pdfFile, setPDFFile] = useState(null);
  const [viewPdf, setViewPdf] = useState(null);

  const fileType = ["application/pdf"];

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && fileType.includes(selectedFile.type)) {
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onload = () => {
        setPDFFile(reader.result);
      };
    } else {
      setPDFFile(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pdfFile !== null) {
      setViewPdf(pdfFile);
    } else {
      setViewPdf(null);
    }
  };

  const handleCheckboxChange = (index) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index] = !updatedCheckboxes[index];
    setCheckboxes(updatedCheckboxes);
  };

  const handleStudentNameClick = (studentName) => {
    setSelectedStudent(studentName);
  };

  const handleSelectAll = () => {
    const updatedCheckboxes = new Array(checkboxes.length).fill(!selectAll);
    setCheckboxes(updatedCheckboxes);
  };

  const toggleFloatingWindow = () => {
    setShowFloatingWindow(!showFloatingWindow);
  };

  const selectAll = checkboxes.every((checkbox) => checkbox);

  const newplugin = defaultLayoutPlugin();

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
              <form onSubmit={handleSubmit}>
                <input
                  type="file"
                  className="form-control"
                  onChange={handleChange}
                />
                <button type="submit" className="btn btn-success">
                  View PDF
                </button>
              </form>
              <h2>view pdf</h2>
              <div className="pdf-container">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
                  {viewPdf && (
                    <Viewer file={{ data: viewPdf }} plugins={[newplugin]} />
                  )}
                  {!viewPdf && <>No PDF</>}
                </Worker>
              </div>
            </Card>
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey="student-work">
          <div className="overall-container">
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
                    <Table className="table-1" border hover>
                      <thead>
                        <tr>
                          <th>Turned In</th>
                        </tr>
                      </thead>
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
                              <i className="bx bxs-user-circle"></i>
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
                              <i className="bx bxs-user-circle"></i>
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
                              <i className="bx bxs-user-circle"></i>
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
