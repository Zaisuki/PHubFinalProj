import "../assets/scss/profile.scss";
import picon from "../assets/img/mygirl.jpg";
import Card from "react-bootstrap/Card";
import { profile } from "../services/user";
import Loading from "./loading";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Profile() {
  const [data, setData] = useState(null);
  const [userInformation, setUserInformation] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await profile();
        setData(response);
        setUserInformation(() =>
          response.userType === "student"
            ? response.studentInformation
            : response.userType === "professor"
            ? response.professorInformation
            : response.adminInformation
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <Loading />;
  }

  return (
    <main className="prof-main-con">
      <Container className="profile-container">
        <Row>
          <Col sm={6} className="first-col">
            <Card className="one">
              <img className="profile-img" src={picon} alt="profile" />
              <h1>
                {userInformation.firstName} {userInformation.middleName}{" "}
                {userInformation.lastName}
              </h1>
              <h2>{userInformation.personalNumber}</h2>
              <h3 className="email">{data.personalEmail}</h3>
            </Card>

            <div className="sub-container">
              <Card className="two">
                <div>
                  <h1>Year/Grade:</h1>
                  <h2>Second</h2>
                </div>
              </Card>
              <Card className="three">
                <div>
                  <h1>Section:</h1>
                  <h2>{userInformation.section}</h2>
                </div>
              </Card>
            </div>

            <Card className="four">
              <div className="f1">
                <h1>Course:</h1>
                <h2>{userInformation.course}</h2>
              </div>

              <div className="f2">
                <h1>Semester:</h1>
                <h2>Second</h2>
              </div>
            </Card>
          </Col>

          <Col sm={6} className="second-col">
            <Card className="five">
              <h1 className="title">Personal Data</h1>

              {/* First/Last name labels */}
              <div className="first-last">
                <h1 className="fname">First Name</h1>
                <h1 className="lname">Last Name</h1>
              </div>
              {/* First/Last name contents */}
              <div className="six-sev-container">
                <Card className="six">
                  <h2>{userInformation.firstName}</h2>
                </Card>
                <Card className="seven">
                  <h2>{userInformation.lastName}</h2>
                </Card>
              </div>

              {/* Middle name label */}
              <div className="mid">
                <h1>Middle Name</h1>
              </div>
              {/* Middle name contents */}
              <Card className="eight">
                <h2>{userInformation.middleName}</h2>
              </Card>

              {/* BIRTHDAY, CONTACT label */}
              <div className="bd-cn">
                <h1 className="bd">Birth Date</h1>
                <h1 className="cn">Contact Number</h1>
              </div>
              {/* BIRTHDAY, CONTACT contents*/}
              <div className="nine-ten-container">
                <Card className="nine">
                  <h2>{userInformation.birthday}</h2>
                </Card>
                <Card className="ten">
                  <h2>{userInformation.personalNumber}</h2>
                </Card>
              </div>

              {/* Address label */}
              <div className="ca">
                <h1>Current Address(House#, Street, Brgy, City)</h1>
              </div>
              {/* Address contents */}
              <Card className="eleven">
                <h2>{userInformation.address}</h2>
              </Card>

              {/* SCHOOL EMAIL label */}
              <div className="se">
                <h1>School Email</h1>
              </div>
              {/* SCHOOL EMAIL contents */}
              <Card className="twelve">
                <h2>{data.schoolEmail}</h2>
              </Card>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
export default Profile;
