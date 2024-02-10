import "../../assets/scss/dashboard.scss";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { useState } from "react";

function Dashboard() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "P1", value: "1" },
    { name: "P2", value: "2" },
    { name: "P3", value: "3" },
  ];
  return (
    <Card.Body className="stat-card">
      <Card className="stat-one">
        <h1>This Week</h1>
        <h2 className="num-one">1</h2>
        <h2 className="num-two">4</h2>
        <h2 className="num-three">3</h2>
        <h2 className="num-four">0</h2>

        <h3 className="text-one">Check</h3>
        <h3 className="text-two">Connect</h3>
        <h3 className="text-three">Coach</h3>
        <h3 className="text-four">Missing</h3>
      </Card>

      <Card className="stat-two">
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
        <h1>Grade</h1>
        <h2>90%</h2>
      </Card>
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
      </Card>
      <Card className="stat-four">
        <h1>Quizzes</h1>
        <Card className="score-one">
          <h1>First Quiz</h1>
          <h1 className="score">10/10</h1>
        </Card>
        <Card className="score-two"></Card>
        <h1>Second Quiz</h1>
        <h1 className="score">10/10</h1>
      </Card>
      <Card className="stat-five">
        <h1>Exams</h1>
        <Card className="score-one"></Card>
        <Card className="score-two"></Card>
        <Card className="score-three"></Card>
      </Card>
    </Card.Body>
  );
}

export default Dashboard;
