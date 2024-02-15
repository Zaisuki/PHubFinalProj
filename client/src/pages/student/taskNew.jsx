import "../../assets/scss/taskNew.scss";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "boxicons";

export default function NewTask() {
  return (
    <Container>
      <Row>
        {/* Here is where you can find all the contents inside the right container or card */}
        <Col xs={12} md={8}>
          <Card className="main-left-card-container">
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
          </Card>
        </Col>

        {/* Here is where you can find all the contents inside the left container or card */}
        <Col xs={12} md={8} lg={4}>
          <Card className="main-right-card-container">
            <Card className="submission-card">
              <h5>Your Work</h5>

              {/* eto yung lalabas pag nakapag-upload na yung student ng file/pic/link */}
              <Card className="student-work-container">
                <p>Module 21.jpg</p>
                <box-icon name="x" color="#686464" size="md"></box-icon>
              </Card>

              <div className="buttons-container">
                <Button className="upload-file-button">Upload File</Button>{" "}
                <Button className="upload-photo-button">Upload Photo</Button>{" "}
                <Button className="insert-link-button">Insert Link</Button>
              </div>
              <div>
              <Button className="submit-button">Submit</Button>
              </div>
            </Card>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
