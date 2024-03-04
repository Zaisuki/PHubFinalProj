import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import "../../assets/scss/course-new.scss";
import { useNavigate } from 'react-router-dom';
import { MdOutlineAccessTime } from "react-icons/md";
import { FaBook } from "react-icons/fa";



function CourseNew() {
  const navigate = useNavigate();
  return (
    <Tabs id="justify-tab" className="mb-3" justify>
      {/* CLASSWORK TAB */}
      <Tab className="class" eventKey="classwork" title="Classwork">
        <Container className="classwork-container">
          {/* CARDS within classwork tab*/}
          <Card className="card-within">
            <Card.Body onClick={() => navigate('/work-page')}>
            <FaBook className="book"/>
              <h4 className="task-type">
                CHECK: 
              </h4>
              <span className="task-title">Moduaaaaaaaale 21</span>
              <h5 className="date-posted"><MdOutlineAccessTime />February 10, 2024</h5>
            </Card.Body>
          </Card>
          
        </Container>
      </Tab>

      {/* PEOPLE TAB */}
      <Tab className="people-tab" eventKey="people" title="People">
        <Card className="instructor-card">
          <Card.Header>Instructor</Card.Header>
          <Card.Body>
            <i className="bx bxs-user-circle"></i>
            <p className="name">Padme Naberie Amidala Skywalker</p>
          </Card.Body>
        </Card>

        <Card className="student-card">
          <Card.Header>Students</Card.Header>
          <Card.Body>
            <ListGroup className="lists">
              <ListGroup.Item>
                <i className="bx bxs-user-circle"></i>
                <p className="name">Glaiza Joyce Bauzon Alicoben</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <i className="bx bxs-user-circle"></i>
                <p className="name">Stephen Paul Bautista Bautista</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <i className="bx bxs-user-circle"></i>
                <p className="name">Jaydeebryann Estrada Ang</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <i className="bx bxs-user-circle"></i>
                <p className="name">Leanne Main Dela Cruz</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <i className="bx bxs-user-circle"></i>
                <p className="name">Christian Quimsim Munar</p>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Tab>
    </Tabs>
  );
}

export default CourseNew;
