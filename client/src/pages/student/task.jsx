import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "../../assets/scss/task.scss";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

export default function Task() {
  return (
    <Tabs id="justify-tab" className="mb-3" justify>
      
      {/* COACH TAB */}
      <Tab className="coach-tab" eventKey="coach" title="Coach">
        <Accordion defaultActiveKey="0" className="main-holder">
          <Accordion.Item eventKey="0" className="1st">
            <Accordion.Header>This Week</Accordion.Header>
            <Accordion.Body>
              <Card className="card-within">
                <Card.Body>
                  <h4 className="task-type">
                    CHECK: <span className="task-title">Module 21</span>
                  </h4>
                  <h5 className="date-posted">February 10, 2024</h5>
                </Card.Body>
              </Card>
              <Card className="card-within">
                <Card.Body>
                  <h4 className="task-type">
                    CHECK: <span className="task-title">Module 20</span>
                  </h4>
                  <h5 className="date-posted">February 11, 2024</h5>
                </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="2nd">
            <Accordion.Header>Next Week</Accordion.Header>
            <Accordion.Body>
              <Card className="card-within">
                <Card.Body>
                  <h4 className="task-type">
                    CHECK: <span className="task-title">Module 21</span>
                  </h4>
                  <h5 className="date-posted">February 10, 2024</h5>
                </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="3rd">
            <Accordion.Header>Later</Accordion.Header>
            <Accordion.Body>
              <Card className="card-within">
                <Card.Body>
                  <h4 className="task-type">
                    CHECK: <span className="task-title">Module 21</span>
                  </h4>
                  <h5 className="date-posted">February 10, 2024</h5>
                </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Tab>

      {/* CONNECT TAB */}
      <Tab className="connect-tab" eventKey="connect" title="Connect">
        <Accordion defaultActiveKey="0" className="main-holder">
          <Accordion.Item eventKey="0" className="1st">
            <Accordion.Header>This Week</Accordion.Header>
            <Accordion.Body>
              <Card className="card-within">
                <Card.Body>
                  <h4 className="task-type">
                    CHECK: <span className="task-title">Module 21</span>
                  </h4>
                  <h5 className="date-posted">February 10, 2024</h5>
                </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="2nd">
            <Accordion.Header>Next Week</Accordion.Header>
            <Accordion.Body>
              <Card className="card-within">
                <Card.Body>
                  <h4 className="task-type">
                    CHECK: <span className="task-title">Module 21</span>
                  </h4>
                  <h5 className="date-posted">February 10, 2024</h5>
                </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="3rd">
            <Accordion.Header>Later</Accordion.Header>
            <Accordion.Body>
              <Card className="card-within">
                <Card.Body>
                  <h4 className="task-type">
                    CHECK: <span className="task-title">Module 21</span>
                  </h4>
                  <h5 className="date-posted">February 10, 2024</h5>
                </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Tab>

      {/* CHECK TAB */}
      <Tab className="check-tab" eventKey="check" title="Check">
        <Accordion defaultActiveKey="0" className="main-holder">
          <Accordion.Item eventKey="0" className="1st">
            <Accordion.Header>This Week</Accordion.Header>
            <Accordion.Body>
              <Card className="card-within">
                <Card.Body>
                  <h4 className="task-type">
                    CHECK: <span className="task-title">Module 21</span>
                  </h4>
                  <h5 className="date-posted">February 10, 2024</h5>
                </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="2nd">
            <Accordion.Header>Next Week</Accordion.Header>
            <Accordion.Body>
              <Card className="card-within">
                <Card.Body>
                  <h4 className="task-type">
                    CHECK: <span className="task-title">Module 21</span>
                  </h4>
                  <h5 className="date-posted">February 10, 2024</h5>
                </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="3rd">
            <Accordion.Header>Later</Accordion.Header>
            <Accordion.Body>
              <Card className="card-within">
                <Card.Body>
                  <h4 className="task-type">
                    CHECK: <span className="task-title">Module 21</span>
                  </h4>
                  <h5 className="date-posted">February 10, 2024</h5>
                </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Tab>

      {/* MISSING TAB */}
      <Tab className="missing-tab" eventKey="missing" title="Missing">
        <Accordion defaultActiveKey="0" className="main-holder">
          <Accordion.Item eventKey="0" className="1st">
            <Accordion.Header>This Week</Accordion.Header>
            <Accordion.Body>
              <Card className="card-within">
                <Card.Body>
                  <h4 className="task-type">
                    CHECK: <span className="task-title">Module 21</span>
                  </h4>
                  <h5 className="date-posted">February 10, 2024</h5>
                </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="2nd">
            <Accordion.Header>Next Week</Accordion.Header>
            <Accordion.Body>
              <Card className="card-within">
                <Card.Body>
                  <h4 className="task-type">
                    CHECK: <span className="task-title">Module 21</span>
                  </h4>
                  <h5 className="date-posted">February 10, 2024</h5>
                </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="3rd">
            <Accordion.Header>Earlier</Accordion.Header>
            <Accordion.Body>
              <Card className="card-within">
                <Card.Body>
                  <h4 className="task-type">
                    CHECK: <span className="task-title">Module 21</span>
                  </h4>
                  <h5 className="date-posted">February 10, 2024</h5>
                </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Tab>
    </Tabs>
  );
}
