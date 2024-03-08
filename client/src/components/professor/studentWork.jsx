import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PropTypes from "prop-types";
import {
  editCheckHighScore,
  editConnectHighScore,
  getCheckTaskSubmission,
  getConnectTaskSubmission,
  scoreStudentCheck,
  scoreStudentConnect,
} from "../../services/professor";
import "../../assets/scss/prof-scss/studentWork.scss";
import ImagePreview from "../imagePreview";
import LinkPreview from "../linkPreview";

const StudentWork = ({ classType, taskID, pageData }) => {
  const [checkboxes, setCheckboxes] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [data, setData] = useState("");
  const [scores, setScores] = useState({});
  const [newHighScore, setNewHighScores] = useState("");
  const [highScore, setHighScores] = useState(pageData.highestPossibleScore);

  const handleStudentNameClick = (studentName) => {
    setSelectedStudent(studentName[1]);
  };
  const handleCheckboxChange = (studentId) => {
    const isChecked = checkboxes.includes(studentId);
    if (isChecked) {
      setCheckboxes(checkboxes.filter((id) => id !== studentId));
    } else {
      setCheckboxes([...checkboxes, studentId]);
    }
  };
  const updateScore = async (event) => {
    event.preventDefault();
    let result;
    if (classType === "check") {
      result = await editCheckHighScore(taskID, newHighScore);
    } else {
      result = await editConnectHighScore(taskID, newHighScore);
    }
    if (result.message === "Task high score updated") {
      setHighScores(newHighScore);
      setNewHighScores("");
      console.log("success");
    }
  };
  const handleReturnScores = async (event) => {
    event.preventDefault();
    const data = Object.fromEntries(
      Object.entries(scores).filter(
        ([key, value]) =>
          checkboxes.includes(key) && value !== null && !isNaN(value)
      )
    );
    console.log(data);
    let result;
    if (classType === "check") {
      result = await scoreStudentCheck(JSON.stringify(data), taskID);
    } else {
      result = await scoreStudentConnect(JSON.stringify(data), taskID);
    }
    if (result.message === "Students score updated") {
      const fetchData = async () => {
        try {
          let response;
          if (classType === "check") {
            response = await getCheckTaskSubmission(taskID);
          } else {
            response = await getConnectTaskSubmission(taskID);
          }
          setData(response);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
      setHighScores(pageData.highestPossibleScore);
    }
  };
  const handleScoreChange = (event, studentId) => {
    setScores((prevScores) => ({
      ...prevScores,
      [studentId]: event.target.value,
    }));
  };

  // Determine if all checkboxes are checked
  // useEffect(() => {
  //     console.log(checkboxes, scores);
  // }, [checkboxes, scores]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (classType === "check") {
          response = await getCheckTaskSubmission(taskID);
        } else {
          response = await getConnectTaskSubmission(taskID);
        }
        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    setHighScores(pageData.highestPossibleScore);
  }, [classType, taskID, pageData]);
  return (
    <div className="overall-container">
      <div className="left-container">
        <h2 className="activity-title">Module 14: Check for Understanding</h2>
        <div className="sub-content">
          <Container className="stats">
            <Row className="numbers">
              <Col className="turned-in-total">
                {data.studentTurnedIn && data.studentTurnedIn.length}
              </Col>
              <Col className="assigned-total">
                {data.studentAssigned && data.studentAssigned.length}
              </Col>
              <Col className="returned-total">
                {data.studentGraded && data.studentGraded.length}
              </Col>
            </Row>
            <Row className="labels">
              <Col className="turned-in-label">Turned In</Col>
              <Col className="assigned-label">Assigned</Col>
              <Col className="returned-label">Returned</Col>
            </Row>
          </Container>
        </div>
        <div className="upper-left-container">
          <div className="button-container">
            <div>
              <input
                className="langgam no-arrow"
                type="number"
                value={newHighScore}
                onChange={(e) => setNewHighScores(e.target.value)}
                min="0"
              />

              <Button
                className="submit-one"
                type="submit"
                onClick={updateScore}
              >
                Update score
              </Button>
              <Button
                className="submit-two"
                type="submit"
                onClick={handleReturnScores}
              >
                Return
              </Button>
            </div>
          </div>
        </div>

        <div className="student-table-container">
          <div>
            <div className="checkbox-selectall">
              <h3 className="wrong-turn">Turned In</h3>
            </div>
            <div>
              {data.studentTurnedIn &&
                data.studentTurnedIn.map((student) => (
                  <div
                    key={student[0]._id}
                    className="studentList-zero"
                    onClick={() => handleStudentNameClick(student)}
                  >
                    <Form.Check
                      className="checkme"
                      aria-label="option 1"
                      onChange={() => handleCheckboxChange(student[0]._id)}
                    />
                    <div className="student-name">
                      <span className="icon">
                        <i className="bx bxs-user-circle"></i>
                      </span>
                      {`${student[0].firstName} ${student[0].middleName} ${student[0].lastName}`}
                    </div>
                    <span>
                      <input
                        style={{ width: "30px", borderBottom: "2px solid" }}
                        onChange={(event) =>
                          handleScoreChange(event, student[0]._id)
                        }
                      />
                      /{highScore}
                    </span>
                  </div>
                ))}
            </div>
          </div>
          <div>
            <div className="checkbox-selectall">
              <h3 className="graded">Graded</h3>
            </div>
            <div>
              {data.studentGraded &&
                data.studentGraded.map((student) => (
                  <div
                    key={student[0]._id}
                    className="studentList"
                    onClick={() => handleStudentNameClick(student)}
                  >
                    <Form.Check
                      aria-label="option 1"
                      onChange={() => handleCheckboxChange(student[0]._id)}
                    />
                    <div className="student-name">
                      <span className="icon">
                        <i className="bx bxs-user-circle"></i>
                      </span>
                      {`${student[0].firstName} ${student[0].middleName} ${student[0].lastName}`}
                    </div>
                    <span>
                      <input
                        style={{ width: "30px", borderBottom: "2px solid" }}
                        defaultValue={student[1].score}
                        onChange={(event) =>
                          handleScoreChange(event, student[0]._id)
                        }
                      />
                      /{highScore}
                    </span>
                  </div>
                ))}
            </div>
          </div>
          <div>
            <div className="checkbox-selectall">
              <h3 className="frog">Assigned</h3>
            </div>
            <div>
              {data.studentAssigned &&
                data.studentAssigned.map((student) => (
                  <div
                    key={student[0]._id}
                    className="studentList-two"
                    onClick={() => handleStudentNameClick(student)}
                  >
                    
                    <div className="student-name">
                      <span className="icon">
                        <i className="bx bxs-user-circle"></i>
                      </span>
                      {`${student[0].firstName} ${student[0].middleName} ${student[0].lastName}`}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* Contents of right part of student-work container */}
      </div>
      <div className="right-container">
        {selectedStudent && (
          <h2 className="berries">
            {selectedStudent.student.firstName}{" "}
            {selectedStudent.student.middleName}{" "}
            {selectedStudent.student.lastName}
          </h2>
        )}

        {selectedStudent && (
          <div className="right-sub-content">
            <div className="attached-file">
              {classType.toLowerCase() === "connect" ? (
                <div>Answered: {selectedStudent.answer.choice} </div>
              ) : (
                <div>
                  {selectedStudent.attachment.length !== 0 ? (
                    <>
                      <div className="file-con">
                        {selectedStudent.attachment.map((dataPage) => (
                          <div key={dataPage._id} className="file-preview-two">
                            {dataPage.type.startsWith("image") ? (
                              <ImagePreview imageUrl={dataPage.url} />
                            ) : (
                              <LinkPreview Url={dataPage.url} />
                            )}
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <p>No attachment submitted</p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

StudentWork.propTypes = {
  classType: PropTypes.string.isRequired,
  taskID: PropTypes.string.isRequired,
  pageData: PropTypes.object.isRequired,
};
export default StudentWork;
