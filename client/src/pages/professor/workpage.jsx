import "../../assets/scss/prof-scss/workpage.scss";
import Card from "react-bootstrap/Card";
import { Tab, Nav } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

function WorkPage() {
  const [checkboxes, setCheckboxes] = useState([]);

  // Function to handle checkbox click in the body
  const handleCheckboxChange = (index) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index] = !updatedCheckboxes[index];
    setCheckboxes(updatedCheckboxes);
  };

  // Function to handle checkbox click in the header
  const handleSelectAll = () => {
    const updatedCheckboxes = new Array(checkboxes.length).fill(!selectAll);
    setCheckboxes(updatedCheckboxes);
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
          <div className="button-container">
          <Button type="submit">Return</Button>
          </div>
          <div className="student-work-container">
            <div className="container-1">
              <div className="content-1">
                {/* Table contents for "Turned In" */}
                <Table className="table-1" border hover>
                  {/* When clicked, all turned in student will automatically selected for easy returning of works*/}
                  <thead>
                    <tr>
                      <th>
                        <Form.Check
                          aria-label="option 1"
                          checked={selectAll}
                          onChange={handleSelectAll}
                        />
                      </th>
                      <th>Turned In</th>
                    </tr>
                  </thead>
                  {/* Contents of "Turned In" */}
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

                    {/* Duplicates to show the length and scrollability of table, can be removed afterwards */}
                    <tr>
                      <td className="checkbox">
                        <Form.Check
                          aria-label="option 2"
                          checked={checkboxes[1]}
                          onChange={() => handleCheckboxChange(1)}
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
                    <tr>
                      <td className="checkbox">
                        <Form.Check
                          aria-label="option 3"
                          checked={checkboxes[2]}
                          onChange={() => handleCheckboxChange(2)}
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

                    <tr>
                      <td className="checkbox">
                        <Form.Check
                          aria-label="option 4"
                          checked={checkboxes[3]}
                          onChange={() => handleCheckboxChange(3)}
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

                    <tr>
                      <td className="checkbox">
                        <Form.Check
                          aria-label="option 5"
                          checked={checkboxes[4]}
                          onChange={() => handleCheckboxChange(4)}
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
                    <tr>
                      <td className="checkbox">
                        <Form.Check
                          aria-label="option 6"
                          checked={checkboxes[5]}
                          onChange={() => handleCheckboxChange(5)}
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

                    <tr>
                      <td className="checkbox">
                        <Form.Check
                          aria-label="option 7"
                          checked={checkboxes[6]}
                          onChange={() => handleCheckboxChange(6)}
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
                    <tr>
                      <td className="checkbox">
                        <Form.Check
                          aria-label="option 8"
                          checked={checkboxes[7]}
                          onChange={() => handleCheckboxChange(7)}
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

                    <tr>
                      <td className="checkbox">
                        <Form.Check
                          aria-label="option 9"
                          checked={checkboxes[8]}
                          onChange={() => handleCheckboxChange(8)}
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
                    <tr>
                      <td className="checkbox">
                        <Form.Check
                          aria-label="option 10"
                          checked={checkboxes[9]}
                          onChange={() => handleCheckboxChange(9)}
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
                    <tr>
                      <td className="checkbox">
                        <Form.Check
                          aria-label="option 11"
                          checked={checkboxes[10]}
                          onChange={() => handleCheckboxChange(10)}
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
                    <tr>
                      <td className="checkbox">
                        <Form.Check
                          aria-label="option 12"
                          checked={checkboxes[11]}
                          onChange={() => handleCheckboxChange(11)}
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
                    {/* End of Duplicates*/}
                  </tbody>
                </Table>

                {/* Another TABLE for "Assigned", list of students that doesnt turn in yet */}
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

                {/* Another TABLE for "Graded", list of students that are already graded */}
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
              </div>
            </div>

            {/* Contents of container 2 */}
            <div className="container-2">
              <h2>Container 2</h2>
              <div className="content-2"></div>
            </div>
          </div>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
}

export default WorkPage;
