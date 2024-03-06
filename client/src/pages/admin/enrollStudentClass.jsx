import '../../assets/scss/admin-scss/enroll-student-form.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { enrollStudent, getClassID, getStudentID } from '../../services/admin';

function EnrollStudentClass() {
    const [formData, setFormData] = useState({
        studentID: '',
        classID: '',
    });
    const [students, setStudents] = useState([]);
    const [studentSearch, setStudentSearch] = useState('');
    const [classes, setClasses] = useState([]);
    const [classSearch, setClassSearch] = useState('');
    const handleInputChange = (event) => {
        let { name, value } = event.target;

        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();

        let result = await enrollStudent(formData);
        if (result.message === 'Student enrolled') {
            setFormData({
                studentID: '',
                classID: '',
            });
        }
    };
    const handleSearchStudent = async (event) => {
        event.preventDefault();
        let result = await getStudentID(studentSearch);
        if (result.message) {
            setStudents(result.message);
        }
    };
    const handleSearchClass = async (event) => {
        event.preventDefault();
        let result = await getClassID(classSearch);
        if (result.message) {
            setClasses(result.message);
        }
    };
    return (
        <div className='enroll-student-form'>
            <Container>
                <Row>
                    <Col>
                        <Form.Label>Student ID</Form.Label>
                        <Form.Control name='studentID' value={formData.studentID} onChange={handleInputChange} placeholder='Student ID' />
                    </Col>
                </Row>
                <Row className='sub-des'>
                    <Col>
                        <Form.Label>Class ID</Form.Label>
                        <Form.Control name='classID' value={formData.classID} onChange={handleInputChange} placeholder='Class ID' />
                    </Col>
                </Row>
                <div className='stud-button' >
                <button type='submit' onClick={handleSubmit}>
                    Enroll Student
                </button>
                </div>
            </Container>
            <Container>
                <h1>Search</h1>
                <Row>
                    <Col>
                        <Form.Label>Search Student ID</Form.Label>
                        <Form.Control
                            name='studentID'
                            value={studentSearch}
                            onChange={(event) => {
                                let { value } = event.target;
                                setStudentSearch(value);
                            }}
                            placeholder='Student name/ID'
                        />
                    </Col>
                </Row>
                <button type='submit' onClick={handleSearchStudent}>
                    Search
                </button>
                <div className='list-search'>
                    <h3>STUDENT ID</h3>
                    <p>NAME</p>
                </div>
                {students.map((stud) => (
                    <div className='list-search' key={stud._id}>
                        <h3>{stud._id}</h3>
                        <p>
                            {stud.firstName} {stud.middleName} {stud.lastName}
                        </p>
                    </div>
                ))}
            </Container>
            <Container>
                <Row className='sub-des'>
                    <Col>
                        <Form.Label>Search Subject ID</Form.Label>
                        <Form.Control
                            name='subjectID'
                            value={classSearch}
                            onChange={(event) => {
                                let { value } = event.target;
                                setClassSearch(value);
                            }}
                            placeholder='Professor Name/Subject Code'
                        />
                    </Col>
                </Row>
                <button type='submit' onClick={handleSearchClass}>
                    Search
                </button>
                <div className='list-search'>
                    <h3>CLASS ID</h3>
                    <p>NAME</p>
                </div>
                {classes.map((classObj) => (
                    <div className='list-search' key={classObj._id}>
                        <h3>{classObj._id}</h3>
                        <p>
                            {classObj.subject.subjectCode}: {classObj.subject.subjectDescription} - {classObj.professor.firstName} {classObj.professor.middleName} {classObj.professor.lastName}
                        </p>
                    </div>
                ))}
            </Container>
        </div>
    );
}
export default EnrollStudentClass;
