import "../../assets/scss/prof-scss/feed.scss";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useEffect, useRef, useState } from "react";

function FeedProf() {
  const textAreaRef = useRef(null);
  const [val, setVal] = useState("");
  const handleChange = (e) => {
    setVal(e.target.value);
  };
  useEffect(() => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  }, [val]);

  return (
    <Card.Body className="feed-post">
      <Card className="feed-one">
        <h1></h1>
      </Card>

      <Card className="feed-two">
        <h1></h1>
      </Card>

      <Card className="feed-three">
        <h1></h1>
      </Card>

      <Card className="feed-post-one">
        <div className="text-one">
          <h1>CREATE A POST</h1>
        </div>

        <div className="h2-text">
          <h2>Title</h2>
        </div>
        <div className="input-placeholder">
          <div className="textArea">
            <textarea
              className="p-2 bg-neutral-700 active active:outline-none focus:outline-none w-50 h-80"
              placeholder="Type something.."
              value={val}
              onChange={handleChange}
              rows="1"
              ref={textAreaRef}
            ></textarea>
          </div>
        </div>
        <Button className="create-post" variant="success"></Button>

        <div className="h2-text-one">
          <h2>Description</h2>

          <div className="input-placeholder-one">
            <div className="textArea">
              <textarea
                className="p-2 bg-neutral-700 active active:outline-none focus:outline-none w-50 h-80"
                placeholder="Type something.."
                value={val}
                onChange={handleChange}
                rows="1"
                ref={textAreaRef}
              ></textarea>
            </div>
          </div>
        </div>
      </Card>
    </Card.Body>
  );
}

export default FeedProf;
