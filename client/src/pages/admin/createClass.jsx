import "../../assets/scss/admin-scss/class-form.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { addClass, getProfessorID, getSubjectID } from "../../services/admin";

function CreateClass() {
  const [formData, setFormData] = useState({
    professorID: "",
    block: "",
    subjectID: "",
  });
  const [professors, setProfessors] = useState([]);
  const [professorSearch, setProfessorSearch] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [subjectSearch, setSubjectSearch] = useState("");
  const handleInputChange = (event) => {
    let { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    let result = await addClass(formData);
    if (result.message === "Professor handling the class") {
      setFormData({
        professorID: "",
        block: "",
        subjectID: "",
      });
      console.log("success");
    }
  };
  const handleSearchProfessor = async (event) => {
    event.preventDefault();
    let result = await getProfessorID(professorSearch);
    if (result.message) {
      setProfessors(result.message);
    }
  };
  const handleSearchSubject = async (event) => {
    event.preventDefault();
    let result = await getSubjectID(subjectSearch);
    if (result.message) {
      setSubjects(result.message);
    }
  };
  return (
    <div className="class-form">
      <Container className="container-1">
        <Row>
          <Col sm={7}>
            <Form.Label>Professor ID</Form.Label>
            <Form.Control
              name="professorID"
              value={formData.professorID}
              onChange={handleInputChange}
              placeholder="Professor ID"
            />
          </Col>
        </Row>
        <Row>
          <Col sm={7}>
            <Form.Label>Section</Form.Label>
            <Form.Control
              name="block"
              value={formData.block}
              onChange={handleInputChange}
              placeholder="Section"
            />
          </Col>
        </Row>
        <Row>
          <Col sm={7}>
            <Form.Label>Subject ID</Form.Label>
            <Form.Control
              name="subjectID"
              value={formData.subjectID}
              onChange={handleInputChange}
              placeholder="Subject ID"
            />
          </Col>
        </Row>
        <div style={{ marginTop: "30px" }}> </div>
        <div className="student-button">
          <button type="submit" onClick={handleSubmit}>
            Create Class
          </button>
        </div>
      </Container>

      <Container className="container-2">
        <h1 className="search-title">SEARCH</h1>
        <Row>
          <Col>
            <Form.Label>Search Professor ID</Form.Label>
            <Form.Control
              name="professorID"
              value={professorSearch}
              onChange={(event) => {
                let { value } = event.target;
                setProfessorSearch(value);
              }}
              placeholder="Professor name"
            />
          </Col>
        </Row>
        <div className="search-prof">
          <button
            className="search-inside"
            type="submit"
            onClick={handleSearchProfessor}
          >
            search
          </button>
          <div className="list-container">
            <div className="list-search-1">
              <h5 className="prof-ID">PROFESSOR ID</h5>
              {professors.map((prof) => (
                <div className="list-search" key={prof._id}>
                  <p className="prof-ID-result">{prof._id}</p>
                </div>
              ))}
            </div>
            <div className="list-search-2">
              <h5 className="prof-NAME">NAME</h5>
              {professors.map((prof) => (
                <div className="list-search" key={prof._id}>
                  <p className="prof-NAME-result">
                    {prof.firstName} {prof.middleName} {prof.lastName}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <Container className="container-3">
        <Row>
          <Col>
            <Form.Label>Search Subject ID</Form.Label>
            <Form.Control
              name="subjectID"
              value={subjectSearch}
              onChange={(event) => {
                let { value } = event.target;
                setSubjectSearch(value);
              }}
              placeholder="Subject code"
            />
          </Col>
        </Row>
        <div className="search-sub-button">
          <button
            className="search-inside2"
            type="submit"
            onClick={handleSearchSubject}
          >
            Search
          </button>
          <div className="list-container">
            <div className="list-search-1">
              <h5>SUBJECT ID</h5>
              {subjects.map((subject) => (
                <div className="list-search" key={subject._id}>
                  <p>{subject._id}</p>
                </div>
              ))}
            </div>
            <div className="list-search-2">
              <h5>NAME</h5>
              {subjects.map((subject) => (
                <div className="list-search" key={subject._id}>
                  <p>
                    {subject.subjectCode}: {subject.subjectDescription}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default CreateClass;
