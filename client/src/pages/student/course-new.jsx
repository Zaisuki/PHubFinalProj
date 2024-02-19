import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import DropdownButton from "react-bootstrap/DropdownButton";
import "../../assets/scss/course-new.scss";

function CourseNew() {
  return (
    <Tabs id="justify-tab" className="mb-3" justify>
      {/* CLASSWORK TAB */}
      <Tab eventKey="classwork" title="Classwork">
        <Container className="classwork-container">
          {/* CARDS within classwork tab*/}
          <Card className="card-within">
            <Card.Body>
              <h4 className="task-type">
                CHECK: <span className="task-title">Module 21</span>
              </h4>
              <h5 className="date-posted">February 10, 2024</h5>
            </Card.Body>
          </Card>
          <Card className="card-within">
            <Card.Body>
              <h4 className="task-type">
                CHECK: <span className="task-title">Module 21</span>
              </h4>
              <h5 className="date-posted">February 10, 2024</h5>
            </Card.Body>
          </Card>
          <Card className="card-within">
            <Card.Body>
              <h4 className="task-type">
                CHECK: <span className="task-title">Module 21</span>
              </h4>
              <h5 className="date-posted">February 10, 2024</h5>
            </Card.Body>
          </Card>
          <Card className="card-within">
            <Card.Body>
              <h4 className="task-type">
                CHECK: <span className="task-title">Module 21</span>
              </h4>
              <h5 className="date-posted">February 10, 2024</h5>
            </Card.Body>
          </Card>
          <Card className="card-within">
            <Card.Body>
              <h4 className="task-type">
                CHECK: <span className="task-title">Module 21</span>
              </h4>
              <h5 className="date-posted">February 10, 2024</h5>
            </Card.Body>
          </Card>
        </Container>
      </Tab>

      {/* PEOPLE TAB */}
      <Tab className="people-tab" eventKey="people" title="People"></Tab>
    </Tabs>
  );
}

export default CourseNew;
