import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import profileIcon from "../assets/img/mygirl.jpg";
import "../assets/scss/inbox.scss";

const Inbox = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const sendMessage = () => {
    if (inputMessage.trim() !== "") {
      setMessages([...messages, { text: inputMessage, sender: "user" }]);
      setInputMessage("");
    }
  };

  return (
    <>
      <Dropdown className="dropdown-container">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Available Instructors Today
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Anakin Skywalker</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Chico Lachowski</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Bill Gates</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Container>
        <Row>
          <Col className="first">
            <img src={profileIcon} alt="profile" />
          </Col>
        </Row>
        <Row>
          <Col className="second">
            <img src={profileIcon} alt="profile" />
          </Col>
        </Row>
        <Row>
          <Col className="first">
            <img src={profileIcon} alt="profile" />
          </Col>
        </Row>
        <Row>
          <Col className="second">
            <img src={profileIcon} alt="profile" />
          </Col>
        </Row>
      </Container>

      <div className="holder">
        <div className="container mt-5">
          <div className="card">
            <div className="card-body">
              <div className="chat-container">
                <div className="messages">
                  {messages.map((message, index) => (
                    <div key={index} className={`message ${message.sender}`}>
                      {message.text}
                    </div>
                  ))}
                </div>
                <div className="input-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type your message..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                  />
                  <button className="btn btn-success" onClick={sendMessage}>
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inbox;
