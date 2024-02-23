import React, { useState } from 'react';
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
import { BiTask } from "react-icons/bi";
import { FaPlus, FaTimes } from "react-icons/fa"; 

function TaskProf() {
  const [showWindow, setShowWindow] = useState(false);

  const handlePlusClick = () => {
    setShowWindow(true);
  };

  const handleCloseClick = () => {
    setShowWindow(false);
  };

  return (
    <div className="dropdown-task">
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
                <NavDropdown.Item href="#action/3.2">BSN</NavDropdown.Item>
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
                <NavDropdown.Item href="#action/3.2">Block 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Block 3</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="tcontainer">
        <h1 className="taskN">TASK NAME</h1>
        <h1 className="assigned">ASSIGNED</h1>
        <h1 className="dueD">DUE</h1>
        <FaPlus className="plus" onClick={handlePlusClick} />
        
        {showWindow && (
          <div className="floating-window">
            <button className="close-button" onClick={handleCloseClick}><FaTimes className='eks' /></button> 
            <Card className="connect">
              <h1 className="connect-text"><BiTask />saasssdss</h1>
            </Card>
          </div>
        )}

        <Card className="connect">
          <h1 className="connect-text"><BiTask />Connect</h1>
          
          <Card className='info'>
            <h2 className='connect-title'>Basic shit</h2>
            <h2 className='block'>BSIT2-03</h2>
            <h2 className='due'>today</h2>
          </Card> 
          <br />
          
       
          <Card className='info-one'>
            <h2 className='connect-title'>Basic shit</h2>
            <h2 className='block'>BSIT2-03</h2>
            <h2 className='due'>today</h2>
          </Card> 
          <br />

      

          <Card className='info-two'>
            <h2 className='connect-title'>Basic shit</h2>
            <h2 className='block'>BSIT2-03</h2>
            <h2 className='due'>today</h2>
          </Card> 
        </Card>

        <Card className="check"></Card>

        <Card className="coach"></Card>
      </div>
    </div>
  );
}

export default TaskProf;
