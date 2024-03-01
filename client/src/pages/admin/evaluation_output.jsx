import "../../assets/scss/admin-scss/evaluation-output.scss";
import Card from "react-bootstrap/Card";

function EvaluationOutput() {
  return (
    <div className="evaluation-output">
      <Card className="card-body">
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
      </Card>
    </div>
  );
}
export default EvaluationOutput;
