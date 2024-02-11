import "../../assets/scss/taskNew.scss";
import Card from "react-bootstrap/Card";

export default function NewTask() {
  return (
    <div className="NewTask-container">
      <Card className="upper-container">
        <h5 className="date">
          Due
          <span className="due"> January 21, 2024</span>
        </h5>
        <h4 className="task-type">
          CHECK:{" "}
          <span className="task-title">
            Lesson 14, Stress Management and Recreation
          </span>
        </h4>
        <h5 className="points-label">
          <span className="points">10 </span>
          points
        </h5>
      </Card>

      <Card className="middle-container">
        <p>
          Good day, Executives. Please answer the modules and pass it no later
          than the due date. Once you have done this, please take a picture,
          attach it to a PDF file, and upload it here.
        </p>
        <p>
          Please write your name on every page and kindly pass it via PDF. For
          those who still do not have their modules, please answer them on a
          clean sheet of paper. Make sure that I can understand your penmanship.
          Answer only. Thank you, and stay safe.
        </p>
        <p>Thank you, and stay safe.</p>
      </Card>

      <Card className="bottom-container">
        <h4>Attachment</h4>
      </Card>
    </div>
  );
}
