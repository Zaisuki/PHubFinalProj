import "../../assets/scss/prof-scss/task.scss";
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import calendar from '../../assets/img/calendar.png';
import Form from 'react-bootstrap/Form';

function TaskProf() {
  return (
    <div className="task">
    <Navbar variant="dark" bg="dark" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#home">Task</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-dark-example" />
      <Navbar.Collapse id="navbar-dark-example">
        <Nav>
          <NavDropdown
            id="nav-dropdown-dark-example"
            title="Course"
            menuVariant="dark"
          >
            <NavDropdown.Item href="#action/3.1">BSIT</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              BSN
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">BSA</NavDropdown.Item>

          
          </NavDropdown>

          
        </Nav>

        <Nav>
          <NavDropdown
            id="nav-dropdown-dark-example"
            title="Block"
            menuVariant="dark"
          >
            <NavDropdown.Item href="#action/3.1">Block 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Block 2
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Block 3</NavDropdown.Item>

          
          </NavDropdown>

          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  

  <div className="tcontainer">
  <Card className="con">
    <div className="indrop">    
  <DropdownButton id="dropdown-basic-button" title="TYPE OF TASK" variant="secondary">
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
    <img src={calendar} alt=""/>
    </div>

    <div className="form">
    <Form>
      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          
          
          <Form.Check className="default"
            inline
            label="Default"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check className="default"
            inline
            label="Quiz"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check className="default"
            inline
            label="Exam "
            name="group1"
            type={type}
            id={`inline-${type}-3`}
          />
         
        </div>
      ))}
    </Form>
   </div>

   <div className="tcontainer2">
        <Card className="con2">
        <h1>CREATE TASK</h1>
        <h2 className="task-title">Task Title</h2>
        <Card className="taskt">
        </Card>
        <h3 className="points">Points</h3>
        <Card className="taskt2">
        </Card>
        <h4 className="description">Description</h4>
        <Card className="taskt3">
        </Card>
        </Card>
        
        <div className="post">
          <h1>POST</h1>
        </div>
        

        
   </div>
  </Card>



  </div> 
  </div>
  
  
    
  );
}

export default TaskProf;
