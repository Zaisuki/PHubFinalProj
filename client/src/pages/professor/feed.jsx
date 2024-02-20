import React, { useEffect, useRef, useState } from "react";
import "../../assets/scss/prof-scss/feed.scss";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FeedProf() {
  const titleTextAreaRef = useRef(null);
  const descriptionTextAreaRef = useRef(null);
  const [titleVal, setTitleVal] = useState("");
  const [descriptionVal, setDescriptionVal] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const characterLimit = 500;

  const handleTitleChange = (e) => {
    const input = e.target.value;
    if (input.length <= characterLimit) {
      setTitleVal(input);
      setCharacterCount(input.length);
    }
  };

  const handleDescriptionChange = (e) => {
    const input = e.target.value;
    if (input.length <= characterLimit) {
      setDescriptionVal(input);
      setCharacterCount(input.length);
    }
  };

  const handleKeyDown = (e) => {
    if (e.target.value.length >= characterLimit && e.key !== "Backspace") {
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (titleTextAreaRef.current) {
      titleTextAreaRef.current.style.height = "auto";
      titleTextAreaRef.current.style.height =
        titleTextAreaRef.current.scrollHeight + "px";
    }
    if (descriptionTextAreaRef.current) {
      descriptionTextAreaRef.current.style.height = "auto";
      descriptionTextAreaRef.current.style.height =
        descriptionTextAreaRef.current.scrollHeight + "px";
    }
  }, [titleVal, descriptionVal]);

  return (
    <Container className="feed-post">
      <Row>
        <Col sm={7}>
          <Card className="feed-one">
            <h1></h1>
          </Card>

          <Card className="feed-two">
            <h1></h1>
          </Card>

          <Card className="feed-three">
            <h1></h1>
          </Card>
        </Col>

        <Col>
          <Card className="feed-post-one">
            <Row>
              <Col>
                <div className="text-one">
                  <h1>CREATE A POST</h1>
                </div>

                <div className="h2-text">
                  <h2>Title</h2>
                </div>
                <div className="input-placeholder">
                  <textarea
                    className="p-2 bg-neutral-700 active active:outline-none focus:outline-none w-100 h-80"
                    placeholder="Type something.."
                    value={titleVal}
                    onChange={handleTitleChange}
                    onKeyDown={handleKeyDown}
                    rows="1"
                    ref={titleTextAreaRef}
                  ></textarea>
                  <p className="word-count">{titleVal.length}/{characterLimit}</p>
                </div>
                <div className="h2-text-one">
                  <h2>Description</h2>

                  <div className="input-placeholder-one">
                    <div className="textArea">
                      <textarea
                        className="p-2 bg-neutral-700 active active:outline-none focus:outline-none w-100 h-80"
                        placeholder="Type something.."
                        value={descriptionVal}
                        onChange={handleDescriptionChange}
                        onKeyDown={handleKeyDown}
                        rows="1"
                        ref={descriptionTextAreaRef}
                      ></textarea>
                      <p className="word-count">{characterCount}/{characterLimit}</p>
                      <Button
                        className="create-post"
                        variant="success"
                      ></Button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default FeedProf;
