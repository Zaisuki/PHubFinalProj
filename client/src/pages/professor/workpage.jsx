import { useEffect, useState } from "react";
import { Tab, Nav, Card, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {
  getCheckTask,
  getCoachTask,
  getConnectTask,
} from "../../services/professor";
import formatDate from "../../utils/formatDate";
import StudentWork from "../../components/professor/studentWork";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "../../assets/scss/prof-scss/workpage.scss";
import "../../assets/scss/prof-scss/PDFViewer.scss";
import ImagePreview from "../../components/imagePreview";
import LinkPreview from "../../components/linkPreview";
import ChoicesConnect from "../../components/choicesConnect";

function WorkPage() {
  let { taskID, classType } = useParams();
  const [pageData, setPageData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data;
        if (classType === "coach") {
          data = await getCoachTask(taskID);
        } else if (classType === "connect") {
          data = await getConnectTask(taskID);
        } else {
          data = await getCheckTask(taskID);
        }
        setPageData(data.message);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [taskID, classType]);

  return (
    <Tab.Container id="tabs-example" defaultActiveKey="instruction">
      <Nav justify variant="tabs" className="nav-tab-shi">
        <Nav.Item>
          <Nav.Link eventKey="instruction">Instructor</Nav.Link>
        </Nav.Item>
        {classType !== "coach" && (
          <Nav.Item>
            <Nav.Link eventKey="student-work">Student Work</Nav.Link>
          </Nav.Item>
        )}
      </Nav>
      <Tab.Content>
        <Tab.Pane eventKey="instruction">
          <div className="instruction-container">
            <Card className="header-container">
              <h4 className="task-type-w">
                {classType.toUpperCase()}:
                <span className="task-title-w">{pageData.postTitle}</span>
              </h4>
              {classType !== "coach" && pageData.highestPossibleScore && (
                <h5 className="points-label">
                  <span className="points">
                    {pageData.highestPossibleScore}
                  </span>{" "}
                  {pageData.highestPossibleScore === 1 ? "point" : "points"}
                </h5>
              )}
              <h5 className="posted">
                Posted on ‎<span className="date">{formatDate(pageData.createdAt)}</span>
              </h5>
            </Card>

            <Card className="content-container-shi">
              <p className="no">{pageData.postDescription}</p>
            </Card>
            {pageData.attachment && pageData.attachment.length > 0 && (
              <Card className="attachment-container-shi">
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
            {pageData.postChoices && (
              <Card className="pool-container">
                <h4>Pool</h4>
                <div className="choice-container">
                  {pageData.postChoices.map((dataPage) => (
                    <ChoicesConnect
                      data={dataPage}
                      totalStudents={pageData.class.totalStudents}
                      key={dataPage._id}
                    />
                  ))}
                </div>
              </Card>
            )}
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey="student-work">
          <StudentWork
            classType={classType.toLowerCase()}
            taskID={taskID}
            pageData={pageData}
          />
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
}

export default WorkPage;
