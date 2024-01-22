import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/scss/inbox.scss";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const sendMessage = () => {
    if (inputMessage.trim() !== "") {
      setMessages([...messages, { text: inputMessage, sender: "user" }]);
      setInputMessage("");
    }
  };

  return (
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
                <button className="btn btn-primary" onClick={sendMessage}>
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
