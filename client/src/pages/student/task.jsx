import { Tab, Nav } from "react-bootstrap";
import "../../assets/scss/task.scss";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function Task() {
  const navigate = useNavigate();
  return (
    <Tab.Container id="student-tabs" defaultActiveKey="coach">
      <Nav justify variant="tabs" className="student-nav-tab">
        <Nav.Item>
          <Nav.Link eventKey="coach" style={{ color: "black" }}>
            Coach
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="connect" style={{ color: "black" }}>
            Connect
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="check" style={{ color: "black" }}>
            Check
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="missing" style={{ color: "black" }}>
            Missing
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab.Content>
        <Tab.Pane eventKey="coach">
          <Accordion defaultActiveKey="0" className="main-holder">
            <Accordion.Item eventKey="0" className="1st">
              <Accordion.Header>This Week</Accordion.Header>
              <Accordion.Body>
                <Card className="card-within">
                  <button
                    onClick={() => navigate("/task-new")}
                    type="button"
                    data-mdb-ripple-init
                  >
                    <Card.Body className="cb">
                      <h4 className="task-type">
                        CHECK: <span className="task-title">Module 21</span>
                      </h4>
                      <h5 className="date-posted">February 10, 2024</h5>
                    </Card.Body>
                  </button>
                </Card>

                <Card className="card-within">
                  <button
                    onClick={() => navigate("/task-new")}
                    type="button"
                    data-mdb-ripple-init
                  >
                    <Card.Body className="cb">
                      <h4 className="task-type">
                        CHECK: <span className="task-title">Module 20</span>
                      </h4>
                      <h5 className="date-posted">February 11, 2024</h5>
                    </Card.Body>
                  </button>
                </Card>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="2nd">
              <Accordion.Header>Next Week</Accordion.Header>
              <Accordion.Body>
                <Card className="card-within">
                  <button
                    onClick={() => navigate("/task-new")}
                    type="button"
                    data-mdb-ripple-init
                  >
                    <Card.Body className="cb">
                      <h4 className="task-type">
                        CHECK: <span className="task-title">Module 21</span>
                      </h4>
                      <h5 className="date-posted">February 10, 2024</h5>
                    </Card.Body>
                  </button>
                </Card>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="3rd">
              <Accordion.Header>Later</Accordion.Header>
              <Accordion.Body>
                <Card className="card-within">
                  <button
                    onClick={() => navigate("/task-new")}
                    type="button"
                    data-mdb-ripple-init
                  >
                    <Card.Body className="cb">
                      <h4 className="task-type">
                        CHECK: <span className="task-title">Module 21</span>
                      </h4>
                      <h5 className="date-posted">February 10, 2024</h5>
                    </Card.Body>
                  </button>
                </Card>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Tab.Pane>

        {/* CONNECT TAB */}
        <Tab.Pane eventKey="connect">
          <Accordion defaultActiveKey="0" className="main-holder">
            <Accordion.Item eventKey="0" className="1st">
              <Accordion.Header>This Week</Accordion.Header>
              <Accordion.Body>
                <Card className="card-within">
                  <button
                    onClick={() => navigate("/task-new")}
                    type="button"
                    data-mdb-ripple-init
                  >
                    <Card.Body>
                      <h4 className="task-type">
                        CHECK: <span className="task-title">Module 21</span>
                      </h4>
                      <h5 className="date-posted">February 10, 2024</h5>
                    </Card.Body>
                  </button>
                </Card>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="2nd">
              <Accordion.Header>Next Week</Accordion.Header>
              <Accordion.Body>
                <Card className="card-within">
                  <button
                    onClick={() => navigate("/task-new")}
                    type="button"
                    data-mdb-ripple-init
                  >
                    <Card.Body>
                      <h4 className="task-type">
                        CHECK: <span className="task-title">Module 21</span>
                      </h4>
                      <h5 className="date-posted">February 10, 2024</h5>
                    </Card.Body>
                  </button>
                </Card>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="3rd">
              <Accordion.Header>Later</Accordion.Header>
              <Accordion.Body>
                <Card className="card-within">
                  <button
                    onClick={() => navigate("/task-new")}
                    type="button"
                    data-mdb-ripple-init
                  >
                    <Card.Body>
                      <h4 className="task-type">
                        CHECK: <span className="task-title">Module 21</span>
                      </h4>
                      <h5 className="date-posted">February 10, 2024</h5>
                    </Card.Body>
                  </button>
                </Card>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Tab.Pane>

        {/* CHECK TAB */}
        <Tab.Pane eventKey="check">
          <Accordion defaultActiveKey="0" className="main-holder">
            <Accordion.Item eventKey="0" className="1st">
              <Accordion.Header>This Week</Accordion.Header>
              <Accordion.Body>
                <Card className="card-within">
                  <button
                    onClick={() => navigate("/task-new")}
                    type="button"
                    data-mdb-ripple-init
                  >
                    <Card.Body>
                      <h4 className="task-type">
                        CHECK: <span className="task-title">Module 21</span>
                      </h4>
                      <h5 className="date-posted">February 10, 2024</h5>
                    </Card.Body>
                  </button>
                </Card>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="2nd">
              <Accordion.Header>Next Week</Accordion.Header>
              <Accordion.Body>
                <Card className="card-within">
                  <button
                    onClick={() => navigate("/task-new")}
                    type="button"
                    data-mdb-ripple-init
                  >
                    <Card.Body>
                      <h4 className="task-type">
                        CHECK: <span className="task-title">Module 21</span>
                      </h4>
                      <h5 className="date-posted">February 10, 2024</h5>
                    </Card.Body>
                  </button>
                </Card>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="3rd">
              <Accordion.Header>Later</Accordion.Header>
              <Accordion.Body>
                <Card className="card-within">
                  <button
                    onClick={() => navigate("/task-new")}
                    type="button"
                    data-mdb-ripple-init
                  >
                    <Card.Body>
                      <h4 className="task-type">
                        CHECK: <span className="task-title">Module 21</span>
                      </h4>
                      <h5 className="date-posted">February 10, 2024</h5>
                    </Card.Body>
                  </button>
                </Card>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Tab.Pane>

        {/* MISSING TAB */}
        <Tab.Pane eventKey="missing">
          <Accordion defaultActiveKey="0" className="main-holder">
            <Accordion.Item eventKey="0" className="1st">
              <Accordion.Header>This Week</Accordion.Header>
              <Accordion.Body>
                <Card className="card-within">
                  <button
                    onClick={() => navigate("/task-new")}
                    type="button"
                    data-mdb-ripple-init
                  >
                    <Card.Body>
                      <h4 className="task-type">
                        CHECK: <span className="task-title">Module 21</span>
                      </h4>
                      <h5 className="date-posted">February 10, 2024</h5>
                    </Card.Body>
                  </button>
                </Card>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="2nd">
              <Accordion.Header>Next Week</Accordion.Header>
              <Accordion.Body>
                <Card className="card-within">
                  <button
                    onClick={() => navigate("/task-new")}
                    type="button"
                    data-mdb-ripple-init
                  >
                    <Card.Body>
                      <h4 className="task-type">
                        CHECK: <span className="task-title">Module 21</span>
                      </h4>
                      <h5 className="date-posted">February 10, 2024</h5>
                    </Card.Body>
                  </button>
                </Card>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="3rd">
              <Accordion.Header>Earlier</Accordion.Header>
              <Accordion.Body>
                <Card className="card-within">
                  <button
                    onClick={() => navigate("/task-new")}
                    type="button"
                    data-mdb-ripple-init
                  >
                    <Card.Body>
                      <h4 className="task-type">
                        CHECK: <span className="task-title">Module 21</span>
                      </h4>
                      <h5 className="date-posted">February 10, 2024</h5>
                    </Card.Body>
                  </button>
                </Card>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
}

export default Task;
