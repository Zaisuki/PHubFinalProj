import "../../assets/scss/taskNew.scss";
import { useEffect, useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import formatDate from "../../utils/formatDate";
import ImagePreview from "../../components/imagePreview";
import LinkPreview from "../../components/linkPreview";
import { FileUploader } from "react-drag-drop-files";
import { FaTimes } from "react-icons/fa";
import {
  getCheckTask,
  getCoachTask,
  getConnectTask,
  submitCheck,
  submitConnect,
  unSubmitCheck,
} from "../../services/student";

export default function NewTask() {
    let { taskID, classType } = useParams();
  const [pageData, setData] = useState({});
  const [showWindow, setShowWindow] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState("");
  const [attachment, setAttachment] = useState([]);
  const fileTypes = ["JPG", "PNG", "GIF", "PDF"];

  const handlePlusClick = () => {
    setShowWindow(true);
  };
  const handleRadioChange = (event) => {	
setSelectedChoice(event.target.value);		
    };

  const handleCloseClick = () => {
    setShowWindow(false);
  };

  const handleRemove = (index) => {
    setAttachment(attachment.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("taskID", taskID);
    for (const file of attachment) {
      formData.append("file", file);
    }
    let result;
    if (classType === "check") {
      result = await submitCheck(formData);
    } else if (classType === "connect") {
      
    }
    if (result.message === "Check submitted") {
      updateForm();
    }
  };

  const handleUnSubmit = async () => {
    let result = await unSubmitCheck(taskID);
    if (result.message === "Check unsubmitted") {
      updateForm();
    }
  };

  const handleConnectSubmit = async () => {
    let result = await submitConnect(taskID, selectedChoice);
    if (result.message === "Connect submitted") {
      updateForm();
    }
  };
  const updateForm = () => {
    setAttachment([]);
    setSelectedChoice("");
    setSubmitted((prevState) => !prevState);
  };

  useEffect(() => {
    const fetchData = async () => {
      let data;
      if (classType === "coach") {
        data = await getCoachTask(taskID);
      } else if (classType === "connect") {
        data = await getConnectTask(taskID);
        setSubmitted(data.message.studentSubmission.length !== 0);
      } else {
        data = await getCheckTask(taskID);
        setSubmitted(data.message.studentSubmission.length !== 0);
      }
      setData(data.message);
    };
    fetchData();
  }, [taskID, classType, submitted]);

  useEffect(() => {
    handleCloseClick();
  }, [attachment]);

  return (
    <Container>
      <Row>
        <div className="taskk-header">
          <h4 className="task-type">
            {classType.toUpperCase()}:‎ ‎
            <span className="task-titles">{pageData.postTitle}</span>
          </h4>{" "}
        </div>

        <Col xs={12} md={8}>
          <Card className="main-left-card-container">
            <Card className="header-container">
              <h4 className="task-type">
                {classType.toUpperCase()}:{" "}
                <span className="task-titles">{pageData.postTitle}</span>
              </h4>{" "}
              {classType.toLowerCase() !== "coach" && (
                <h5 className="points-label">
                  <span className="points">
                    {pageData.highestPossibleScore}{" "}
                  </span>
                  points
                </h5>
              )}
              {classType.toLowerCase() !== "coach" && (
                <h5 className="dueT">
                  {pageData.dueDate ? (
                    <>
                      Due on‎ ‎
                      <span className="date">
                        {formatDate(pageData.dueDate)}
                      </span>{" "}
                    </>
                  ) : (
                    "No Due Date"
                  )}
                </h5>
              )}
            </Card>

            <Card className="content-container">
              <p className="yes">{pageData.postDescription}</p>
            </Card>

            {(classType === "coach" || classType === "check") &&
              pageData.attachment && (
                <Card className="attachment-container">
                  <Row>
                    {pageData.attachment.map((dataPage) => (
                      <Col key={dataPage._id}>
                        <div className="image-container">
                          {dataPage.type.startsWith("image") ? (
                            <ImagePreview
                              className="attachment-image"
                              imageUrl={dataPage.url}
                            />
                          ) : (
                            <LinkPreview Url={dataPage.url} />
                          )}
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Card>
              )}
          </Card>
        </Col>

        {classType.toLowerCase() === "check" &&
          (!submitted ? (
            <>
              <Col xs={12} md={8} lg={4}>
                <Card className="main-right-card-container">
                  <Card className="submission-card">
                    <h5 className="yaur">Your Work</h5>

                    {/* eto yung lalabas pag nakapag-upload na yung student ng file/pic/link */}
                    <Card className="student-work-container">
                      {attachment.map((file, idx) => (
                        <p key={idx}>
                          {file.name}
                          <FaTimes
                            className="eks"
                            onClick={() => handleRemove(idx)}
                          />
                        </p>
                      ))}
                      <box-icon name="x" color="#686464" size="md"></box-icon>
                    </Card>

                    <div className="buttons-container">
                      <Button
                        className="upload-file-button"
                        onClick={handlePlusClick}
                      >
                        Upload File
                      </Button>
                    </div>
                    <div>
                      <Button className="mark-button" onClick={handleSubmit}>
                        Mark as done
                      </Button>
                    </div>
                  </Card>
                </Card>
              </Col>

              {showWindow && (
                <div className="popup-submission">
                  <FaTimes className="eks" onClick={handleCloseClick} />
                  <FileUploader
                    className="w-screen"
                    handleChange={(files) =>
                      setAttachment((prevState) => [
                        ...prevState,
                        ...Object.values(files),
                      ])
                    }
                    name="file"
                    types={fileTypes}
                    multiple={true}
                  />
                </div>
              )}
            </>
          ) : (
            <>
             <Col xs={12} md={8} lg={4}>
                <Card className="main-right-card-container">
                  <Card className="submission-card">
                    <h5>Your Work</h5>

                    <div className="file-container">
                      {pageData.studentSubmission.map((submission) =>
                        submission.attachment.map((dataPage) => (
                          <div key={dataPage._id}>
                            {dataPage.type.startsWith("image") ? (
                              <ImagePreview imageUrl={dataPage.url} />
                            ) : (
                              <LinkPreview Url={dataPage.url} />
                            )}
                          </div>
                        ))
                      )}
                    </div>

                    <div>
                      <Button className="mark-button" onClick={handleUnSubmit}>
                        Unsubmit
                      </Button>
                    </div>
                  </Card>
                </Card>
              </Col>

              {showWindow && (
                <div className="popup-submission">
                  <FaTimes className="eks" onClick={handleCloseClick} />
                  <FileUploader
                    className="w-screen"
                    handleChange={(files) =>
                      setAttachment((prevState) => [
                        ...prevState,
                        ...Object.values(files),
                      ])
                    }
                    name="file"
                    types={fileTypes}
                    multiple={true}
                  />
                </div>
              )}
            </>
          ))}
        {classType.toLowerCase() === "connect" && pageData.postChoices && (
          <Card className="pool-container">
            <h4>Pool</h4>

            {submitted ? (
              <div className="choice-container">
                <form>
                  {pageData.postChoices.map((dataPage) => (
                    <div key={dataPage._id}>
                      {/* TODO change it to 0 */}
                      <input
                        type="radio"
                        disabled
                        value={dataPage._id}
                        checked={
                          pageData.studentSubmission[0].answer._id ===
                          dataPage._id
                        }
                      />
                      <span>{dataPage.choice}</span>
                      <span>
                        {convertPercentage(
                          dataPage.respondents,
                          pageData.class.totalStudents
                        )}
                        %
                      </span>
                    </div>
                  ))}
                </form>
              </div>
            ) : (
              <div className="choice-container">
                <form>
                  {pageData.postChoices.map((dataPage) => (
                    <ChoicesConnect
                      data={dataPage}
                      choiceFunction={handleRadioChange}
                      selectedChoice={selectedChoice}
                      totalStudents={pageData.class.totalStudents}
                      key={dataPage._id}
                    />
                  ))}
                  <Button className="mark-button" onClick={handleConnectSubmit}>
                    Submit
                  </Button>
                </form>
              </div>
            )}
          </Card>
        )}
      </Row>
    </Container>
  );
}
