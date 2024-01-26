import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../../assets/scss/course-new.scss";

function CourseNew() {
  return (
    <div className="course-new">
      <Card style={{ width: "75rem", height: "38rem" }}>
        <Card.Body>
          <Card.Title>Activity 1</Card.Title>
          <Card.Text>
           what
          </Card.Text>
          <Button variant="dark">Attach File</Button>
          <Button variant="dark">Submit</Button>

          
        </Card.Body>
      </Card>

      <Card style={{ width: "75rem", height: "38rem" }}>
        <Card.Body>
          <Card.Title>Activity 2</Card.Title>
          <Card.Text>
            when
          </Card.Text>
          <Button variant="dark">Attach File</Button>
          <Button variant="dark">Submit</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "75rem", height: "38rem" }}>
        <Card.Body>
          <Card.Title>Activity 3</Card.Title>
          <Card.Text>
           who
          </Card.Text>
          <Button variant="dark">Attach File</Button>
          <Button variant="dark">Submit</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CourseNew;
