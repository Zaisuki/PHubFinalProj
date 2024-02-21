import "../../assets/scss/evaluation.scss";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";

function Evaluation() {
  return (
    <Card>
      <Card.Body className="card-body">
        <h1>Teacher Evaluation Form</h1>
        <label className="dear-student">Dear Students,</label>

        <p>
          Thank you for taking the time to provide feedback on your learning
          experience. Your input is invaluable for continuous improvement.
          Please fill out the following evaluation form honestly and
          constructively.
        </p>

        <span>STUDENT DETAILS</span>
        <div className="details">
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">
            Student Name{" "}
          </InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup></div>

        <div className="details2">
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">
            Student ID{" "}
          </InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup></div>
        <Form.Select className="select" aria-label="Default select example">
          <option>Select a Course</option>
          <option value="1">ITE 30</option>
          <option value="2">ITE 400</option>
          <option value="3">ITE 186</option>
        </Form.Select>
        <span>
          Rate each aspect on a scale of 1 to 5, where 1 is strongly disagree
          and 5 is strongly agree.
        </span>
        <div class="card">
          <div class="card-body">
          My professor always answer my questions during class hours with respect.
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                {" "}
                Strongly agree{" "}
              </label>
            </div>
            
            
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                {" "}
                Agree{" "}
              </label>
            </div>

            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                {" "}
                Neutral{" "}
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                {" "}
                Disagree{" "}
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                {" "}
                Strongly Disagree{" "}
              </label>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
          My professor always answer my questions during class hours with respect.
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                {" "}
                Strongly agree{" "}
              </label>
            </div>
            
            
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                {" "}
                Agree{" "}
              </label>
            </div>

            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                {" "}
                Neutral{" "}
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                {" "}
                Disagree{" "}
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                {" "}
                Strongly Disagree{" "}
              </label>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Evaluation;
