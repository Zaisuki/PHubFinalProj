import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "../../assets/scss/task.scss";
import Accordion from "react-bootstrap/Accordion";

export default function Task() {
  return (
    <Tabs id="justify-tab" className="mb-3" justify>

      <Tab className="coach-tab" eventKey="coach" title="Coach">
        <Accordion defaultActiveKey="0" className="main-holder">
          <Accordion.Item eventKey="0" className="1st">
            <Accordion.Header>This Week</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="2nd">
            <Accordion.Header>Next Week</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="3rd">
            <Accordion.Header>Later</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Tab>

      <Tab className="connect-tab" eventKey="connect" title="Connect">
        <Accordion defaultActiveKey="0" className="main-holder">
          <Accordion.Item eventKey="0" className="1st">
            <Accordion.Header>This Week</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="2nd">
            <Accordion.Header>Next Week</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="3rd">
            <Accordion.Header>Later</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Tab>

      <Tab className="check-tab" eventKey="check" title="Check">
        <Accordion defaultActiveKey="0" className="main-holder">
          <Accordion.Item eventKey="0" className="1st">
            <Accordion.Header>This Week</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="2nd">
            <Accordion.Header>Next Week</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="3rd">
            <Accordion.Header>Later</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Tab>

      <Tab className="missing-tab" eventKey="missing" title="Missing">
        <Accordion defaultActiveKey="0" className="main-holder">
          <Accordion.Item eventKey="0" className="1st">
            <Accordion.Header>This Week</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="2nd">
            <Accordion.Header>Next Week</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="3rd">
            <Accordion.Header>Earlier</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Tab>
    </Tabs>
  );
}
