import "../../assets/scss/prof-scss/feed.scss";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function FeedProf() {
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

      <div className="division">
        <Card className="feed-post-one">
          <div className="text-one">
            <h1>CREATE A POST</h1>
          </div>

          <div className="h2-text">
            <h2>Title</h2>
          </div>

          <InputGroup className="input-placeholder">
            <Form.Control
              placeholder="Title"
              aria-label="title"
              aria-describedby="basic-addon2"
            />
          </InputGroup>

          <div className="h2-text-one">
            <h2>Description</h2>
          </div>

          <InputGroup className="input-placeholder-one">
            <Form.Control
              placeholder=""
              aria-label="title"
              aria-describedby="basic-addon2"
            />
          </InputGroup>
          <Button className="create-post" variant="success">
            Post
          </Button>
        </Card>
      </div>
    </Card.Body>
  );
}

export default FeedProf;
