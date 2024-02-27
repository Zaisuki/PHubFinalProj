import React, { useState } from "react";
import "../../assets/scss/prof-scss/task.scss";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import calendar from "../../assets/img/calendar.png";
import Form from "react-bootstrap/Form";
import { BiTask } from "react-icons/bi";
import { FaPlus, FaTimes } from "react-icons/fa";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import SplitButton from "react-bootstrap/SplitButton";

function TaskProf() {
  const [showWindow, setShowWindow] = useState(false);
  const [taskSelection, setTaskSelection] = useState("");
  const color = ["Secondary"];

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
            <button className="close-button" onClick={handleCloseClick}>
              <FaTimes className="eks" />
            </button>

            <Card className="plus-task">
              <div className="header-plus-task">
                <h1 className="post">Post an assignment</h1>
                <DropdownButton
                  variant="light"
                  className="header-task-selection"
                  title="Type of Task"
                >
                  <Dropdown.Item onChange={() => setTaskSelection("Coach")}>
                    Coach
                  </Dropdown.Item>
                  <Dropdown.Item onChange={() => setTaskSelection("Connect")}>
                    Connect
                  </Dropdown.Item>
                  <Dropdown.Item onChange={() => setTaskSelection("Check")}>
                    Check
                  </Dropdown.Item>
                </DropdownButton>
              </div>
              {/* {taskSelection === "Coach" ? ( */}
              <InputGroup className="plus-title">
                <div className="task-name-container">
                  <h1 className="task-name">Task Name</h1>
                  <Form.Control
                    className="task-name-input"
                    placeholder="Write here..."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                </div>

                <div className="plus-block">
                  <h1 className="blockN">Block</h1>
                  <DropdownButton
                    variant="light"
                    id="dropdown-basic-button"
                    title="Section selection"
                  >
                    <Dropdown.Item href="#/action-1">BSIT2</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">BSIT1</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">BSIT3</Dropdown.Item>
                  </DropdownButton>
                </div>

                <div className="due">
                  <h1 className="dueN">Due date</h1>
                  <input className="input-type" type="date" />
                </div>

                <div className="dropdown-ccc">
                  <h1 className="ccc">Choose</h1>
                  {color.map((variant) => (
                    <SplitButton
                      key={variant}
                      id={`dropdown-split-variants-${variant}`}
                      variant={variant.toLowerCase()}
                      title={variant}
                    >
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3" active>
                        Active Item
                      </Dropdown.Item>
                    </SplitButton>
                  ))}
                </div>
                <Button className="post-ass-button" variant="light">
                  Post
                </Button>
              </InputGroup>
              {/* ) : (
                taskSelection 
              )} */}
            </Card>
          </div>
        )}

        <div className="connect">
          <h1 className="connect-text">
            <BiTask />
            Connect
          </h1>

          <div className="info">
            <h2 className="connect-title">Basic shit</h2>
            <h2 className="block">BSIT2-03</h2>
            <h2 className="due">today</h2>
          </div>

          <div className="info-one">
            <h2 className="connect-title">Basic shit</h2>
            <h2 className="block">BSIT2-03</h2>
            <h2 className="due">today</h2>
          </div>

          <div className="info-two">
            <h2 className="connect-title">Basic shit</h2>
            <h2 className="block">BSIT2-03</h2>
            <h2 className="due">today</h2>
          </div>
        </div>

        <Card className="check">
          <h1 className="check-text">
            <BiTask />
            Check
          </h1>

          <div className="info">
            <h2 className="check-title">Basic shit</h2>
            <h2 className="block">BSIT2-03</h2>
            <h2 className="due">today</h2>
          </div>

          <div className="info-one">
            <h2 className="check-title">Basic shit</h2>
            <h2 className="block">BSIT2-03</h2>
            <h2 className="due">today</h2>
          </div>

          <div className="info-two">
            <h2 className="check-title">Basic shit</h2>
            <h2 className="block">BSIT2-03</h2>
            <h2 className="due">today</h2>
          </div>
        </Card>

        <Card className="coach">
          <h1 className="coach-text">
            <BiTask />
            Coach
          </h1>

          <div className="info">
            <h2 className="check-title">Basic shit</h2>
            <h2 className="block">BSIT2-03</h2>
            <h2 className="due">today</h2>
          </div>

          <div className="info-one">
            <h2 className="check-title">Basic shit</h2>
            <h2 className="block">BSIT2-03</h2>
            <h2 className="due">today</h2>
          </div>

          <div className="info-two">
            <h2 className="check-title">Basic shit</h2>
            <h2 className="block">BSIT2-03</h2>
            <h2 className="due">today</h2>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default TaskProf;
