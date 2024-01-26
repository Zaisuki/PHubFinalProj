import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Accordion from "react-bootstrap/Accordion";
import "../../assets/scss/task.scss";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function Task() {
  return (
    <Tabs id="justify-tab" className="mb-3" justify>
      <Tab className="coach-tab" eventKey="coach" title="Coach">
        <div className="coach-content">
          <MDBAccordion initialActive={1}>
            <MDBAccordionItem collapseId={1} headerTitle="This Week">
              <MDBCard className="card-container">
                <MDBCardHeader>ITE 400</MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle className="title">
                    Create a proposal
                  </MDBCardTitle>
                  <MDBCardText className="text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
              <MDBCard>
                <MDBCardHeader>HIS 069</MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle className="title">Make a poster</MDBCardTitle>
                  <MDBCardText className="text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBAccordionItem>
            <MDBAccordionItem collapseId={2} headerTitle="Next Week">
              <MDBCard className="card-container">
                <MDBCardHeader>ITE 400</MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle className="title">
                    Create a proposal
                  </MDBCardTitle>
                  <MDBCardText className="text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBAccordionItem>
            <MDBAccordionItem collapseId={3} headerTitle="Later">
              <MDBCard className="card-container">
                <MDBCardHeader>ITE 400</MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle className="title">
                    Create a proposal
                  </MDBCardTitle>
                  <MDBCardText className="text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBAccordionItem>
          </MDBAccordion>
        </div>
      </Tab>
      <Tab className="connect-tab" eventKey="connect" title="Connect">
        Tab content for Connect
      </Tab>
      <Tab className="check-tab" eventKey="check" title="Check">
        Tab content for Check
      </Tab>
      <Tab className="missing-tab" eventKey="missing" title="Missing">
        Tab content for Missing
      </Tab>
    </Tabs>
  );
}
