import "../../assets/scss/dashboard.scss";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { useState } from "react";

function Statistics() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "P1", value: "1" },
    { name: "P2", value: "2" },
    { name: "P3", value: "3" },
  ];
  return (
    <Card.Body className="stat-card">
      <div className="top-card">

      <Card className="stat-one">
        <h1>This Week</h1>
        <div className="task-description">

        <h2 className="text-one">Check 
        </h2>
        <h2 className="text-two">Connect 
        </h2>
        <h2 className="text-three">Coach 
        </h2>
        <h2 className="text-four">Missing 
        </h2>
        </div>
        <div className="task-description">

        <h3>1</h3>
        <h3>4</h3>
        <h3>3</h3>
        <h3>0</h3>
        </div>
      </Card>

      <Card className="stat-two">
        
        <h1>Grade</h1>
        <h2>90%</h2>
      </Card>
          </div>
      <Card className="stat-three">
        <Form.Select className="select-stat" aria-label="def">
          <option className="op">Select a Course</option>
          <option className="op" value="1">
            ITE 30
          </option>
          <option className="op" value="2">
            ITE 400
          </option>
          <option className="op" value="3">
            ITE 186
          </option>
        </Form.Select>
        <ButtonGroup className="bg-p">
          {radios.map((radio, idx) => (
            <ToggleButton
              className="toggle-p"
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={idx % 2 ? "outline-dark" : "outline-dark"}
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
              >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </Card>
      <div className="bottom-card">

      <Card className="stat-four">
        <h1>Quizzes</h1>
          <p className="score">First Quiz 10/10</p>
        <p className="score">Second Quiz 10/10</p>
      </Card>
      <Card className="stat-five">
        <h1>Exams</h1>
        <p className="score-one">First Exam 10/10</p>
        <p className="score-two">Second Exam 10/10</p>
        <p className="score-three">Third Exam 10/10</p>
      </Card>
      </div>
    </Card.Body>
  );
}

export default Statistics;
