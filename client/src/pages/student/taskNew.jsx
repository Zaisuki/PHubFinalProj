import "../../assets/scss/taskNew.scss";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function NewTask() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={7}>
          <Card className="upper-left-container">
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
        </Col>
        <Col>
          <Card className="right-container">
            <h5>lagayan ng shits</h5>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={7}>
          <Card className="middle-left-container">
            <p>
              Good day, Executives. Please answer the modules and pass it no
              later than the due date. Once you have done this, please take a
              picture, attach it to a PDF file, and upload it here.
            </p>
            <p>
              Please write your name on every page and kindly pass it via PDF.
              For those who still do not have their modules, please answer them
              on a clean sheet of paper. Make sure that I can understand your
              penmanship. Answer only. Thank you, and stay safe.
            </p>
            <p>Thank you, and stay safe.</p>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={7}>
          <Card className="bottom-left-container">
            <h4>Attachment</h4>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
