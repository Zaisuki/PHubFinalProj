import "../../assets/scss/prof-scss/workpage.scss";
import React from "react";
import Card from "react-bootstrap/Card";
import { Tab, Nav } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";

export default function WorkPage() {
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
              <h5 className="due">
                Due
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
          {/* Content inside student-work tab */}
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
}
